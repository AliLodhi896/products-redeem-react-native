import React, {useContext,useCallback} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DottedSlider, PrimaryButton} from '../../components';
import theme from '../../constants/theme';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import { get_app_info } from '../../apis/Authentication';

const SignOut = () => {
  const navigation = useNavigation();
  const {setAppInfo,setIsSignin} = useContext(AuthContext);


  return (
    <View style={styles.mainContainer}>
      <View style={styles.internalContainer}>
        <Text style={styles.txt}>
          Logout ?
        </Text>
        <Text style={styles.description}>
          Are you sure you want to logout ?
        </Text>
          <PrimaryButton

            title={'Logout'}
            style={{width: '50%'}}
            onPress={() =>setIsSignin(false)}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems:'center',
    justifyContent:'center'
  },
  internalContainer: {
    height:'40%',
    marginTop:40,
    backgroundColor:theme.colors.background,
    shadowColor: '#000',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
    alignItems:"center",
    justifyContent:'center',
    borderRadius:20,
    width:'90%'
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  txt: {
    fontSize: 24,
    color: theme.colors.primaryText,
    marginHorizontal: 8,
    fontWeight: '500',
  },
  description: {
    fontSize: 18,
    color: theme.colors.primaryText,
    marginHorizontal: 8,
    fontWeight: '500',
    marginTop:40,
    marginBottom:20
  },
});

export default SignOut;
