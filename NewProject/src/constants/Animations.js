import React, {useState} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import Lottie from 'lottie-react-native';

const Animations = ({type}) => {
  return (
    <View style={[{height:200,width:'100%',alignContent:'center',alignItems:"center",justifyContent:'center',marginTop:'30%'}]}>
        <Lottie source={require('../assets/animations/welcome.json')} autoPlay loop   />
    </View>
  );
};
export default Animations;
