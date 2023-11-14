import React, {useContext,useCallback} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DottedSlider, PrimaryButton} from '../../components';
import theme from '../../constants/theme';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import { get_app_info } from '../../apis/Authentication';

const Welcome = () => {
  const navigation = useNavigation();
  const {setAppInfo,appInfo} = useContext(AuthContext);
console.log('appInfo',appInfo)
  const getAppInfo = async () => {
    const responseData = await get_app_info();
    if (responseData?.status == 'success') {
      setAppInfo(responseData?.data);
    }
  };
  useFocusEffect(
    useCallback(() => {
      getAppInfo();
    }, []),
  );

  const slides = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  ];
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          width: '100%',
          height: 400,
          alignItems:'center',
          justifyContent:'center'
        }}>
        <Image
          source={require('../../assets/images/logowithtext.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.internalContainer}>
        <Text style={styles.txt}>
          Let's start{' '}
          <Text style={{fontWeight: '900', color: theme.colors.primary}}>
            Scanning
          </Text>{' '}
          your{' '}
          <Text style={{fontWeight: '900', color: theme.colors.primary}}>Products</Text>
        </Text>
        <DottedSlider slides={slides} />
          <PrimaryButton
            title={'Get Started'}
            style={{width: '50%'}}
            onPress={() =>navigation.navigate('OnBoarding')}
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
  internalContainer: {
    height:'40%',
    marginTop:40
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  txt: {
    fontSize: 32,
    color: theme.colors.primaryText,
    textAlign: 'center',
    marginHorizontal: 8,
    fontWeight: '500',
  },
});

export default Welcome;
