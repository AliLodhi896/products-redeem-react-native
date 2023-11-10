import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import  {AppBottomTab}  from './AppNavigation';
import { AuthContext } from '../context/AuthContext';
import { AuthNavigator } from './AuthNavigator';

const AppNavigationContainer = () => {
  const {isSignin} = useContext(AuthContext);
  const MyTheme = {
    colors: {
      background: 'transparent',
    },
  };
  return (
    <NavigationContainer  theme={MyTheme}>
      {isSignin == true ? <AppBottomTab /> : <AuthNavigator />}
      {/* <AppBottomTab /> */}
    </NavigationContainer>
  );
};
export default AppNavigationContainer;