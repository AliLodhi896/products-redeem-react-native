import React, {useContext, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import theme from '../constants/theme';
import {useForm} from 'react-hook-form';
import {PrimaryButton} from '../components';
import PrimaryHeader from '../components/Headers/PrimaryHeader';
import Icon from '../constants/Icon';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';

const Home = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const navigation = useNavigation();
  const {setIsSignin,appInfo} = useContext(AuthContext);


  return (
    <View style={styles.mainContainer}>
      <PrimaryHeader />
      <ScrollView style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Welcome</Text>
        <Text style={styles.sectionHeading}>To {appInfo?.CName}</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 20,
            marginHorizontal:10
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ScanRequest')}
            style={{
              height: 150,
              width: '48%',
              backgroundColor: theme.colors.backgroundSecondary,
              shadowColor: '#000',
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 10,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 20,
            }}>
            <View style={styles.container}>
              <Icon
                icon_type={'FontAwesome5'}
                name={'history'}
                size={20}
                color={theme.colors.background}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: theme.colors.primaryText,
                fontWeight: 'bold',
                marginTop: 20,
              }}>
              Scan History
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Scanner')}
            style={{
              height: 150,
              width: '48%',
              backgroundColor: theme.colors.backgroundSecondary,
              shadowColor: '#000',
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 10,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.container2}>
              <Icon
                icon_type={'Ionicons'}
                name={'scan'}
                size={20}
                color={theme.colors.background}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: theme.colors.primaryText,
                fontWeight: 'bold',
                marginTop: 20,
              }}>
              Scan QR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RedeemRequests')}
            style={{
              height: 150,
              width: '48%',
              backgroundColor: theme.colors.backgroundSecondary,
              shadowColor: '#000',
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 10,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 20,
            }}>
            <View style={styles.container3}>
              <Icon
                icon_type={'MaterialCommunityIcons'}
                name={'email'}
                size={20}
                color={theme.colors.background}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: theme.colors.primaryText,
                fontWeight: 'bold',
                marginTop: 20,
              }}>
              Redeem Request
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsSignin(false)}
            style={{
              height: 150,
              width: '48%',
              backgroundColor: theme.colors.backgroundSecondary,
              shadowColor: '#000',
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 10,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.container4}>
              <Icon
                icon_type={'AntDesign'}
                name={'logout'}
                size={20}
                color={theme.colors.background}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: theme.colors.primaryText,
                fontWeight: 'bold',
                marginTop: 20,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 12,
            color: theme.colors.disbaled,
            textAlign: 'center',
            marginTop: 10,
          }}>
          2023 @ {appInfo?.CName}. All rights reserved
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: theme.colors.disbaled,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Terms & Condtions
        </Text>
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
export default Home;
