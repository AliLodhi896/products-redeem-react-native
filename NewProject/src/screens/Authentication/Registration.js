import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet,Image  ,TouchableOpacity} from 'react-native';
import theme from '../../constants/theme';
import {useForm} from 'react-hook-form';
import {InputField, PrimaryButton, SecondaryHeader} from '../../components';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

const Registration = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  return (
    <View style={styles.mainContainer}>
      <SecondaryHeader />
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
            style={{width:"100%", height:"100%"}}
            resizeMode='contain'
          />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Register</Text>
        <Text style={styles.sectionDescription}>
          Enter Your Personal Information
        </Text>
        <InputField
          name="Username"
          control={control}
          lable={'Username'}
          rules={{
            required: 'Username is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid Username address',
            },
          }}
          placeholder="Enter your Username..."
        />
        <InputField
          name="email"
          control={control}
          lable={'Email'}
          rules={{
            required: 'email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          placeholder="Enter your email..."
        />
        <InputField
          name="password"
          control={control}
          lable={'Password'}
          rules={{
            required: 'Password is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid Password address',
            },
          }}
          placeholder="Enter your password..."
        />
        <InputField
          name="Confirm Password"
          control={control}
          lable={'Confirm Password'}
          rules={{
            required: 'Confirm Password is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid Confirm Password address',
            },
          }}
          placeholder="Enter your Confirm Password..."
        />
        <PrimaryButton title="Register" />

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:14,color:theme.colors.disbaled,fontWeight:'bold'}}>
             Already have an account?
            </Text>  
            <TouchableOpacity onPress={() =>navigation.navigate('Registration')}>
            <Text style={{fontSize:14,color:theme.colors.primary,fontWeight:'bold',marginLeft:10}}>
           Sign In
            </Text>  
              </TouchableOpacity> 
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
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: theme.colors.secondary,
    padding:10
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
});
export default Registration;
