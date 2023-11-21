import React, {useContext, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import theme from '../constants/theme';
import {useForm} from 'react-hook-form';
import PrimaryHeader from '../components/Headers/PrimaryHeader';
import {AuthContext} from '../context/AuthContext';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {add_rewards, get_redeem_history, get_rewards_scheme} from '../apis';
import {
  AddRedeemRequest,
  PrimaryButton,
  SecondaryHeader,
  SkeletonLoader,
} from '../components';
import Toast from 'react-native-toast-message';

const SchemeDetail = ({route}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const {details} = route.params;
  const navigation = useNavigation();
  const {userToken} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const addReward = async () => {
    setIsLoading(true);
    const responseData = await add_rewards(details?.SchemeCode, userToken);
    if (responseData?.status == 'success') {
      Toast.show({
        type: 'success',
        text1: responseData?.message,
        visibilityTime: 2000,
      });
      navigation.navigate('RedeemSchemes')
    } else {
      Toast.show({
        type: 'error',
        text1: responseData?.message,
        visibilityTime: 2000,
      });
      navigation.navigate('RedeemSchemes')
      setIsLoading(false);
    }
  };


  return isLoading == true ? (
    <SkeletonLoader />
  ) : (
    <View style={styles.mainContainer}>
      <SecondaryHeader onPress={() => navigation.goBack()} />
      <ScrollView style={styles.sectionContainer}>
        <TouchableOpacity style={[styles.container]}>
          <Image
            source={{uri: details?.SchemeImage}}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: theme.fontSizes.large,
            color: theme.colors.primaryText,
            fontWeight: 'bold',
            textAlign:"center"
          }}>
          Plus Points {details?.Point}
        </Text>
        <Text
          style={{
            fontSize: theme.fontSizes.medium,
            color: theme.colors.primaryText,
            fontWeight: 'bold',
            marginTop:30
          }}>
         Remarks
        </Text>
        <Text
          style={{
            fontSize: theme.fontSizes.medium,
            color: theme.colors.primaryText,
            marginTop:10
          }}>
         {details?.Remark1} | {details?.Remark2}
        </Text>

        <Text
          style={{
            fontSize: theme.fontSizes.medium,
            color: theme.colors.primaryText,
            fontWeight: 'bold',
            marginTop:30
          }}>
         Specifications
        </Text>
        <Text
          style={{
            fontSize: theme.fontSizes.medium,
            color: theme.colors.primaryText,
            marginTop:10
          }}>
         {details?.Specification}
        </Text>
        <PrimaryButton onPress={()=>addReward()} title={'Add request'} />
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
    height: 100,
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
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
export default SchemeDetail;
