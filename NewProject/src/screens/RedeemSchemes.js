import React, {useContext, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import theme from '../constants/theme';
import {useForm} from 'react-hook-form';
import PrimaryHeader from '../components/Headers/PrimaryHeader';
import {AuthContext} from '../context/AuthContext';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {add_rewards, get_redeem_history, get_rewards_scheme} from '../apis';
import {AddRedeemRequest, PrimaryButton, SkeletonLoader} from '../components';
import Toast from 'react-native-toast-message';

const RedeemSchemes = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const navigation = useNavigation();
  const {userToken} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [redeemRewards, setRedeemRewards] = useState([]);

  const getReedemedReward = async () => {
    setIsLoading(true);
    const responseData = await get_rewards_scheme();
    setRedeemRewards(responseData?.data);
    setIsLoading(false);
  };

  const addReward = async rewardCode => {
    setIsLoading(true);
    const responseData = await add_rewards(rewardCode, userToken);
    if (responseData?.status == 'success') {
      Toast.show({
        type: 'success',
        text1: responseData?.message,
        visibilityTime: 2000,
      });
      getReedemedRequests();
    } else {
      Toast.show({
        type: 'error',
        text1: responseData?.message,
        visibilityTime: 2000,
      });
      setIsLoading(false);
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useFocusEffect(
    useCallback(() => {
      getReedemedReward();
    }, []),
  );
  return isLoading == true ? (
    <SkeletonLoader />
  ) : (
    <View style={styles.mainContainer}>
      <PrimaryHeader onPressRefresh={() => getReedemedRequests()} />
      <ScrollView style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>All</Text>
        <Text style={styles.sectionHeading}>Redeemed Schemes</Text>
        {isLoading == true
          ? null
          : redeemRewards?.map(item => {
            const randomColor = getRandomColor();
              return (
               (
                <TouchableOpacity
                onPress={()=>navigation.navigate('SchemeDetail',{details:item})}
                style={{
                  backgroundColor: randomColor,
                  paddingLeft: 10,
                  borderRadius: 20,
                  marginTop:10
                }}>
                <View
                  style={{
                    padding: 20,
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
                  }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent:"space-between"
                      }}>
                      <Text
                        style={{
                          fontSize: theme.fontSizes.medium,
                          color: randomColor,
                          fontWeight: 'bold',
                        }}>
                          Plus Points {item?.Point}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontSize: theme.fontSizes.medium,
                          color: theme.colors.primaryText,
                          fontWeight: 'bold',
                        }}>
                        {item?.SchemeName} | {item?.SchemeCode} 
                      </Text>
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
                        marginVertical: 10,
                      }}>
                      {item?.Remark1} | {item?.Remark2}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
                )
              );
            })}
        <PrimaryButton title={'Add request'} />
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
  sectionDescription: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.secondaryText,
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
export default RedeemSchemes;
