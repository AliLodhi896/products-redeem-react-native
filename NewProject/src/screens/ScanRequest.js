import React, {useState, useContext, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import theme from '../constants/theme';
import {useForm} from 'react-hook-form';
import PrimaryHeader from '../components/Headers/PrimaryHeader';
import {get_scan_history} from '../apis/Scan';
import {useFocusEffect} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';
import {user_profile} from '../apis';
import { SkeletonLoader } from '../components';

const ScanRequest = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const {userToken, userDetails, setUserDetails} = useContext(AuthContext);
  const [scannedItems, setScannedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getScanRequests = async () => {
    setIsLoading(true);
    const responseData = await get_scan_history(userToken);
    const userDetailsData = await user_profile(userToken);
    setUserDetails(userDetailsData?.data);
    if (responseData?.status == 'success') {
      setScannedItems(responseData?.data);
    }
    setIsLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      getScanRequests();
    }, []),
  );

  return isLoading == true ? <SkeletonLoader /> :  (
    <View style={styles.mainContainer}>
      <PrimaryHeader />
      <ScrollView style={styles.sectionContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: theme.colors.lightdisbaled,
            height: 150,
            padding: 20,
            borderRadius: 10,
            marginVertical: 20,
          }}>
          <View>
            <Text
              style={{
                fontSize: 12,
                color: theme.colors.primaryText,
                fontWeight: 'bold',
              }}>
              Total Points
            </Text>
            <Text
              style={{
                fontSize: 26,
                color: theme.colors.primaryText,
                fontWeight: 'bold',
              }}>
              {userDetails?.BalPoint}
            </Text>
          </View>
          <View style={{height: 60, width: 60}}>
            <Image
              source={require('../assets/images/points.png')}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 12,
                color: theme.colors.primaryText,
                fontWeight: 'bold',
                marginTop: 20,
              }}>
              {userDetails?.Name}
            </Text>
          </View>
        </View>
        <Text style={styles.sectionSubHeading}>Recent Scanned Products</Text>
        {isLoading == true ? (
          <>
            <SkeletonLoader />
          </>
        ) : (
          scannedItems?.map(item => {
            const parsedDate = new Date(item?.ScanDateTime?.date);
            const months = [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ];
            const year = parsedDate.getFullYear();
            const month = months[parsedDate.getMonth()];
            const day = parsedDate.getDate();
            const hours = parsedDate.getHours();
            const minutes = parsedDate.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedDate = `${day} ${month} ${year} ${
              hours % 12 || 12
            }:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;

            const formattedTime = `${hours}:${minutes}`;
            return (
              <TouchableOpacity
                style={{
                  padding: 20,
                  marginHorizontal: 10,
                  backgroundColor: theme.colors.background,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0.5,
                    height: 0.5,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 5,
                  elevation: 4,
                  borderRadius: 20,
                  marginBottom: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      width: 'auto',
                      backgroundColor: '#FCEAD3',
                      padding: 4,
                      borderRadius: 40,
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        color: 'orange',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      {item?.QRCodeValue}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme.colors.primaryText,
                      fontWeight: 'bold',
                      marginVertical: 10,
                    }}>
                    {item?.ItemName}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme.colors.success,
                      fontWeight: 'bold',
                      marginVertical: 10,
                    }}>
                    {item?.Point}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: theme.colors.disbaled,
                      fontWeight: 'bold',
                      marginVertical: 2,
                      marginLeft: 10,
                    }}>
                    {formattedDate}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  logoContainer: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: theme.colors.secondary,
    padding: 10,
  },
  sectionContainer: {
    paddingHorizontal: theme.padding.medium,
  },
  sectionHeading: {
    fontSize: theme.fontSizes.xxl,
    color: theme.colors.primaryText,
    fontWeight: '500',
  },
  sectionSubHeading: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.primaryText,
    fontWeight: '500',
    marginVertical: theme.margins.small,
  },
  container: {
    backgroundColor: '#7050E5',
    height: 60,
    width: 60,
    marginHorizontal: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#34BB82',
    height: 60,
    width: 60,
    marginHorizontal: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    backgroundColor: '#F0D473',
    height: 60,
    width: 60,
    marginHorizontal: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container4: {
    backgroundColor: '#FF7273',
    height: 60,
    width: 60,
    marginHorizontal: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ScanRequest;
