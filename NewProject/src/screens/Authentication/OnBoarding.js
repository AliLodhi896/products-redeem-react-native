import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import theme from '../../constants/theme';
import {useForm} from 'react-hook-form';
import {InputField, PrimaryButton, SecondaryHeader} from '../../components';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthContext';
import {registered_or_unregistered} from '../../apis';
import Toast from 'react-native-toast-message';

const OnBoarding = () => {
  const navigation = useNavigation();
  const {setIsSignin,appInfo} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});

  const sendOtp = async data => {
    setIsLoading(true)
    const responseData = await registered_or_unregistered(data?.mobile_no);
    console.log('responseData',responseData)
    if (
      responseData?.message == 'OTP Sent Successfully' &&
      responseData?.is_register == 0
    ) {
      Toast.show({
        type: 'success',
        text1: 'Please Register Youreself !',
        visibilityTime: 2000,
      });
      navigation.navigate('Registration', {otp: responseData?.OTP});
    } else if (
      responseData?.message == 'OTP Sent Successfully' &&
      responseData?.is_register == 1
    ){
      Toast.show({
        type: 'success',
        text1: responseData?.message,
        visibilityTime: 2000,
      });
      navigation.navigate('Verification', {mobile_no: data?.mobile_no});
    }else{
      Toast.show({
        type: 'error',
        text1: 'Something Went Wrong !',
        visibilityTime: 2000,
      });
    }
    setIsLoading(false)

  };

  return (
    <View style={styles.mainContainer}>
      <SecondaryHeader onPress={()=>navigation.goBack()} />
      <View
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginVertical: theme.margins.large,
        }}>
        <View style={styles.logoContainer}>
          <Image
            source={{uri:appInfo?.Logo}}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Login</Text>
        <Text style={styles.sectionDescription}>
        Enter your Whatsapp Number with country code to continue the app
        </Text>
        <InputField
          name="mobile_no"
          control={control}
          lableVisible={false}
          lable={'Mobile Number'}
          rules={{
            required: 'Mobile Number is required',
          }}
          placeholder="eg 999-999-9999"
        />
        {errors.mobile_no && (
          <Text style={styles.errormessage}>* {errors.mobile_no.message}</Text>
        )}
        <PrimaryButton loader={isLoading} title="Send OTP" onPress={handleSubmit(sendOtp)} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Text
            style={{
              fontSize: 14,
              color: theme.colors.disbaled,
              fontWeight: 'bold',
            }}> */}
            {/* Don't have an account?
          </Text> */}
          {/* <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text
              style={{
                fontSize: 14,
                color: theme.colors.primary,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Register Now
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  logoContainer: {
    height: 200,
    width: 200,
    padding: 10,
  },
  sectionContainer: {
    paddingHorizontal: theme.padding.medium,
    marginTop: theme.margins.medium,
  },
  sectionHeading: {
    fontSize: theme.fontSizes.xl,
    color: theme.colors.primaryText,
    fontWeight: '700',
  },
  sectionDescription: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.secondaryText,
    fontWeight: '500',
    marginVertical: theme.margins.small,
  },
  errormessage: {
    fontSize: 14,
    color: theme.colors.error,
  },
});
export default OnBoarding;
