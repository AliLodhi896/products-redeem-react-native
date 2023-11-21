import React, {useState, useContext, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking
} from 'react-native';
import theme from '../constants/theme';
import {useForm} from 'react-hook-form';
import PrimaryHeader from '../components/Headers/PrimaryHeader';
import {get_scan_history} from '../apis/Scan';
import {useFocusEffect} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';
import {user_profile} from '../apis';
import { PrimaryButton, SkeletonLoader } from '../components';

const Help = () => {
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

  return   (
    <View style={styles.mainContainer}>
      <PrimaryHeader onPressRefresh={()=>getScanRequests()}  />
    <ScrollView style={{flex:1,paddingHorizontal:20}}>
    <TouchableOpacity
          style={[styles.container]}
         >
          <Image
            source={require('../assets/icons/calling.png')}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.sectionHeading}>Our Help !</Text>
        <Text
          style={{
            fontSize: 12,
            color: theme.colors.disbaled,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: theme.colors.disbaled,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
        </Text>
        <View style={{marginTop:20}}>
        <PrimaryButton title={'More info'} 
        onPress={()=>Linking.openURL(`tel:123456789`)}
        />
        </View>
      
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
    marginTop:40,
    textAlign:"center"
  },
  sectionSubHeading: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.primaryText,
    fontWeight: '500',
    marginVertical: theme.margins.small,
  },
  container: {
    height: 80,
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
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
export default Help;
