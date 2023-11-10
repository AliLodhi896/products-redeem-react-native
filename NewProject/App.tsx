/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { OnBoarding,Registration,Home,RedeemRequests,ScanRequest,Welcome } from './src/screens';
import theme from './src/constants/theme';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigationContainer from './src/navigations/NavigationContainer';

function App(): JSX.Element {
  return (
    // <SafeAreaView style={{flex: 1}}>
    //   <ScrollView  style={{flex: 1,backgroundColor:theme.colors.background}}>
    //     <Welcome />
    //   </ScrollView>
    // </SafeAreaView>
    <AuthProvider>
    <AppNavigationContainer/>

    </AuthProvider>
  );
}

export default App;
