import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import theme from '../constants/theme';
import {useForm} from 'react-hook-form';
import PrimaryHeader from '../components/Headers/PrimaryHeader';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {scan_item} from '../apis';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';
import Toast from 'react-native-toast-message';

const Scanner = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const {userToken} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const scanItem = async value => {
    setIsLoading(true);
    const responseData = await scan_item(value, userToken);
    if (responseData?.status == 'success') {
      Toast.show({
        type: 'success',
        text1: responseData?.message,
        visibilityTime: 2000,
      });
      navigation.navigate('Registration', {otp: responseData?.OTP});
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
      <PrimaryHeader />
      <View style={styles.sectionContainer}>
        {isLoading == true ? (
          <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:'70%'}}>
            <ActivityIndicator
            style={{paddingVertical: 5}}
            size={40}
            color={theme.colors.primary}
          />
          </View>
        ) : (
            <QRCodeScanner
              onRead={data => scanItem(data?.data)}
              reactivate={true}
              showMarker={true}
              containerStyle={{
                backgroundColor: theme.colors.lightdisbaled,
                width: '100%',
                marginTop:80
              }}
              cameraContainerStyle={{width: '100%'}}
              cameraStyle={{width: '100%'}}
              reactivateTimeout={500}
            />
        )}
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
    marginTop: theme.margins.medium,alignItems:'center',alignContent:'center',justifyContent:'center'
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
export default Scanner;
