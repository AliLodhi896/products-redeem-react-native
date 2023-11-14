import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import theme from '../../constants/theme';
import {useForm} from 'react-hook-form';
import {PrimaryButton, SecondaryHeader} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthContext';
import {verify_otp} from '../../apis';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

const Verification = ({route}) => {
  const {mobile_no} = route.params;
  const navigation = useNavigation();
  const {setIsSignin, setUserToken, setUserDetails, appInfo} =
    useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [isLoading, setIsLoading] = useState(false);

  const verifyOtp = async data => {
    setIsLoading(true);
    const responseData = await verify_otp(mobile_no, value);
    if (responseData?.status == 'success') {
      setUserDetails(responseData?.data);
      setUserToken(responseData?.token);
      setIsSignin(true);
    } else {
      navigation.navigate('Registration', {otp: responseData?.OTP});
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.mainContainer}>
      <SecondaryHeader onPress={() => navigation.goBack()} />
      <View
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginVertical: theme.margins.large,
        }}>
        <View style={styles.logoContainer}>
          <Image
            source={{uri: appInfo?.Logo}}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Otp Verification</Text>
        <Text style={styles.sectionDescription}>
          Verify otp to continue using the app
        </Text>

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <PrimaryButton
          loader={isLoading}
          title="Verify"
          onPress={handleSubmit(verifyOtp)}
        />

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
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text
              style={{
                fontSize: 14,
                color: theme.colors.primary,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Register Now
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
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginVertical: 20},
  cell: {
    width: 60,
    height: 60,
    lineHeight: 58,
    fontSize: 24,
    borderWidth: 2,
    borderColor: theme.colors.lightprimary,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  focusCell: {
    borderColor: theme.colors.primary,
  },
});
export default Verification;
