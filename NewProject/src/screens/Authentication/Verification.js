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
import Toast from 'react-native-toast-message';

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
      Toast.show({
        type: 'success',
        text1: responseData?.message,
        visibilityTime: 2000,
      });
      setUserDetails(responseData?.data);
      setUserToken(responseData?.token);
      setIsSignin(true);
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
        Enter OTP, sent on your given WhatsApp
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
    color:theme.colors.primary
  },
  focusCell: {
    borderColor: theme.colors.primary,
  },
});
export default Verification;
