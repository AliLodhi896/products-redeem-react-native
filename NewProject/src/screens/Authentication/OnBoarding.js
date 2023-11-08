import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animations from '../../constants/Animations';
import theme from '../../constants/theme';

const OnBoarding = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{alignContent:'center',justifyContent:'center',flexDirection:'row',marginVertical:theme.margins.medium}}>
        <View style={styles.logoContainer}></View>
      </View>
      <View style={styles.sectionContainer}> 
        <Text style={styles.sectionHeading}>
            Login
        </Text>
        <Text style={styles.sectionDescription}>
            Login to continue using the app
        </Text>
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
    padding: 10,
    backgroundColor: theme.colors.secondary,
  },
  sectionContainer:{
    paddingHorizontal:theme.padding.medium,
    marginTop:theme.margins.medium
  },
  sectionHeading:{
    fontSize:theme.fontSizes.xl,
    color:theme.colors.primaryText,
    fontWeight:'700'
  },
  sectionDescription:{
    fontSize:theme.fontSizes.medium,
    color:theme.colors.secondaryText,
    fontWeight:'500',
    marginTop:theme.margins.small
  }
});
export default OnBoarding;
