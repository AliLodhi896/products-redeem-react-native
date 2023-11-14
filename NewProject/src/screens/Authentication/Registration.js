import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import theme from '../../constants/theme';
import {useForm} from 'react-hook-form';
import {InputField, PrimaryButton, SecondaryHeader} from '../../components';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {registration} from '../../apis';
import Toast from 'react-native-toast-message';

const Registration = ({route}) => {
  const navigation = useNavigation();
  const {otp} = route.params;
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async data => {
    setIsLoading(true);
    const responseData = await registration(data, otp);
    if (responseData?.status == 'success') {
      Toast.show({
        type: 'success',
        text1: responseData?.message,
        visibilityTime: 2000,
      });
      navigation.navigate('OnBoarding');
    } else {
      Toast.show({
        type: 'error',
        text1: responseData?.message,
        visibilityTime: 2000,
      });
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.mainContainer}>
      <SecondaryHeader onPress={() => navigation.goBack()} />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginVertical: theme.margins.large,
          }}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeading}>Register</Text>
          <Text style={styles.sectionDescription}>
            Enter Your Personal Information
          </Text>
          <InputField
            name="username"
            control={control}
            lable={'Username'}
            rules={{
              required: 'Username is required',
            }}
            placeholder="Enter your username..."
          />
          {errors.username && (
            <Text style={styles.errormessage}>* {errors.username.message}</Text>
          )}
          <InputField
            name="email"
            control={control}
            lable={'Email'}
            rules={{
              required: 'email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid Email Address',
              },
            }}
            placeholder="Enter your email..."
          />
          {errors.email && (
            <Text style={styles.errormessage}>* {errors.email.message}</Text>
          )}
          <InputField
            name="mobile_no"
            control={control}
            lable={'Mobile Number'}
            rules={{
              required: 'Mobile number is required',
            }}
            placeholder="Enter your mobile number..."
          />
          {errors.mobile_no && (
            <Text style={styles.errormessage}>
              * {errors.mobile_no.message}
            </Text>
          )}

          <InputField
            name="address_1"
            control={control}
            lable={'Address One'}
            rules={{
              required: 'Address One is required',
            }}
            placeholder="Enter youraddress one..."
          />
          {errors.address_1 && (
            <Text style={styles.errormessage}>
              * {errors.address_1.message}
            </Text>
          )}
          <InputField
            name="address_2"
            control={control}
            lable={'Address Two'}
            rules={{
              required: 'Address Two is required',
            }}
            placeholder="Enter your address two..."
          />
          {errors.address_2 && (
            <Text style={styles.errormessage}>
              * {errors.address_2.message}
            </Text>
          )}
          <InputField
            name="city"
            control={control}
            lable={'City'}
            rules={{
              required: 'City is required',
            }}
            placeholder="Enter your city..."
          />
          {errors.city && (
            <Text style={styles.errormessage}>* {errors.city.message}</Text>
          )}
          <InputField
            name="state"
            control={control}
            lable={'State'}
            rules={{
              required: 'State is required',
            }}
            placeholder="Enter your state..."
          />
          {errors.state && (
            <Text style={styles.errormessage}>* {errors.state.message}</Text>
          )}
          <InputField
            name="docs_no"
            control={control}
            lable={'Docs Number'}
            rules={{
              required: 'Docs Number is required',
            }}
            placeholder="Enter your docs number..."
          />
          {errors.docs_no && (
            <Text style={styles.errormessage}>* {errors.docs_no.message}</Text>
          )}
          <InputField
            name="docs_name"
            control={control}
            lable={'Docs Name'}
            rules={{
              required: 'Docs Name is required',
            }}
            placeholder="Enter your docs name..."
          />
          {errors.docs_name && (
            <Text style={styles.errormessage}>
              * {errors.docs_name.message}
            </Text>
          )}
          <PrimaryButton loader={isLoading}  onPress={handleSubmit(signIn)} title="Register" />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: theme.colors.disbaled,
                fontWeight: 'bold',
              }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('OnBoarding')}>
              <Text
                style={{
                  fontSize: 14,
                  color: theme.colors.primary,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
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
export default Registration;
