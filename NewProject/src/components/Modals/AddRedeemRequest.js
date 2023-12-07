import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import PrimaryButton from '../Buttons/PrimaryButton';
import Icon from '../../constants/Icon';
import theme from '../../constants/theme';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {get_rewards_scheme} from '../../apis';
import SkeletonLoader from '../Loaders/SkeletonLoader';

export function AddRedeemRequest({isVisible, onClose, onPress}) {
  const [redeemRewards, setRedeemRewards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('');

  const getReedemedReward = async () => {
    setIsLoading(true);
    const responseData = await get_rewards_scheme();
    setRedeemRewards(responseData?.data);
    setIsLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      getReedemedReward();
    }, []),
  );

  return (
    <Modal
      visible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.container}>
      <Animatable.View
        animation={'fadeInLeft'}
        duration={400}
        style={styles.notificationBox}>
        <View style={styles.iconBox}>
          <Icon
            icon_type={'MaterialIcons'}
            name={'redeem'}
            size={30}
            color={theme.colors.primary}
          />
        </View>

        <ScrollView style={{marginTop: 10}}>
          { isLoading == true ?
          <SkeletonLoader />
          :
          redeemRewards?.map(item => {
            return (
              <TouchableOpacity
                onPress={() => setCode(item?.SchemeCode)}
                style={{
                  padding: 10,
                  backgroundColor: theme.colors.lightprimary,
                  borderRadius: 10,
                  marginTop: 10,
                  borderWidth: 2,
                  borderColor:
                    code == item?.SchemeCode
                      ? theme.colors.primary
                      : theme.colors.lightprimary,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: theme.colors.primaryText,
                    fontWeight: '600',
                  }}>
                  {item?.SchemeName} ({item?.SchemeCode} )
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: theme.colors.success,
                    fontWeight: '600',
                  }}>
                  {item?.Point}
                </Text>
              </TouchableOpacity>
            );
          })}
          {/* <Text style={{fontSize:18,color:Colors.primaryText,textAlign:'center',fontWeight:"600"}}>{notiData?.notification?.title}</Text>
        <Text style={{fontSize:16,color:Colors.primaryText,textAlign:'center',fontWeight:"400",marginTop:20}}>{notiData?.notification?.body}</Text> */}
        </ScrollView>
        <PrimaryButton
          style={{width: '80%', marginTop: 30}}
          textStyle={{fontSize: 14}}
          onPress={()=>onPress(code)}
          title="Add Redeem Request"
        />
      </Animatable.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  notificationBox: {
    width: '95%',
    height: 'auto',
    borderRadius: 20,
    backgroundColor: theme.colors.background,
    alignSelf: 'center',
    padding: 10,
    maxHeight: '50%',
  },
  iconBox: {
    alignSelf: 'center',
    marginTop: -35,
    backgroundColor: theme.colors.background,
    padding: 10,
    borderRadius: 100,
  },
});
