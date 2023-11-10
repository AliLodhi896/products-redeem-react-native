import React, {useState} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import LottieView  from 'lottie-react-native';

const Animations = ({type}) => {
  return (
    <View style={[{height:'100%',width:'100%',alignContent:'center',alignItems:"center",justifyContent:'center'}]}>
        <LottieView source={require('../assets/animations/welcome.json')} autoPlay loop />
    </View>
  );
};
export default Animations;
