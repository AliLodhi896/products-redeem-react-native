import React, {useContext, useState, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import theme from '../constants/theme';
import {useForm} from 'react-hook-form';
import PrimaryHeader from '../components/Headers/PrimaryHeader';
import {AuthContext} from '../context/AuthContext';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {get_redeem_history} from '../apis';
import {SkeletonLoader} from '../components';

const RedeemRequests = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const {userToken} = useContext(AuthContext);
  const [activeTab, setaAtiveTab] = useState('Sent');
  const [reedemedRequests, setReedemedRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getReedemedRequests = async () => {
    setIsLoading(true);
    const responseData = await get_redeem_history(userToken);
    if (responseData?.status == 'success') {
      setReedemedRequests(responseData?.data);
    }
    setIsLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      getReedemedRequests();
    }, []),
  );
  return isLoading == true ? <SkeletonLoader /> : (
    <View style={styles.mainContainer}>
      <PrimaryHeader />
      <ScrollView style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Your</Text>
        <Text style={styles.sectionHeading}>Redeemed Requests</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: theme.colors.lightdisbaled,
            height: 60,
            padding: 4,
            borderRadius: 40,
            marginVertical: 20,
          }}>
          <TouchableOpacity
            onPress={() => setaAtiveTab('Sent')}
            style={{
              width: '50%',
              backgroundColor:
                activeTab == 'Sent'
                  ? theme.colors.backgroundSecondary
                  : theme.colors.lightdisbaled,
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: theme.colors.primaryText,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Sent Request
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setaAtiveTab('Completed')}
            style={{
              width: '50%',
              backgroundColor:
                activeTab == 'Completed'
                  ? theme.colors.backgroundSecondary
                  : theme.colors.lightdisbaled,
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: theme.colors.primaryText,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Completed Request
            </Text>
          </TouchableOpacity>
        </View>
        {isLoading == true ? (
          null
        ) : activeTab == 'Sent' ? (
          reedemedRequests?.map(item => {
            return (
              item?.RStatus == 0 && (
                <TouchableOpacity
                  style={{
                    marginHorizontal:10,
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
                    marginBottom: 20,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        width: '30%',
                        backgroundColor: '#DCEED6',
                        padding: 4,
                        borderRadius: 40,
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'green',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        {item?.RStatus == 0 ? 'Sent' : 'Completed'}
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
                      {item?.SchemeName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: theme.colors.success,
                        fontWeight: 'bold',
                        marginVertical: 10,
                      }}>
                      {item?.SchemePoint}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: theme.colors.disbaled,
                        fontWeight: 'bold',
                        marginVertical: 2,
                      }}>
                      Remark:
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: theme.colors.disbaled,
                        fontWeight: 'bold',
                        marginVertical: 2,
                        marginLeft: 10,
                      }}>
                      {item?.Remark1} | {item?.Remark2}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: theme.colors.disbaled,
                        fontWeight: 'bold',
                        marginVertical: 2,
                      }}>
                      Redeemed Date:
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: theme.colors.disbaled,
                        fontWeight: 'bold',
                        marginVertical: 2,
                        marginLeft: 10,
                      }}>
                      20 Jan 2024
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            );
          })
        ) : (
          reedemedRequests?.map(item => {
            return (
              item?.RStatus == 1 && (
                <TouchableOpacity
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
                    marginBottom: 20,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        width: '30%',
                        backgroundColor: '#DCEED6',
                        padding: 4,
                        borderRadius: 40,
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'green',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        {item?.RStatus == 0 ? 'Sent' : 'Completed'}
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
                      {item?.SchemeName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: theme.colors.primaryText,
                        fontWeight: 'bold',
                        marginVertical: 10,
                      }}>
                      {item?.SchemePoint}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: theme.colors.disbaled,
                        fontWeight: 'bold',
                        marginVertical: 2,
                      }}>
                      Remark:
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: theme.colors.disbaled,
                        fontWeight: 'bold',
                        marginVertical: 2,
                        marginLeft: 10,
                      }}>
                      {item?.Remark1} | {item?.Remark2}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: theme.colors.disbaled,
                        fontWeight: 'bold',
                        marginVertical: 2,
                      }}>
                      Redeemed Date:
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: theme.colors.disbaled,
                        fontWeight: 'bold',
                        marginVertical: 2,
                        marginLeft: 10,
                      }}>
                      20 Jan 2024
                    </Text>
                  </View>
                </TouchableOpacity>
              )
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
export default RedeemRequests;
