/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useContext,useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigationContainer from './src/navigations/NavigationContainer';
import Toast from 'react-native-toast-message';

function App(): JSX.Element {


  return (
    <AuthProvider>
      <SafeAreaView style={{flex: 1}}>
      <AppNavigationContainer/>
      <Toast />
      </SafeAreaView>
    </AuthProvider>
  );
}

export default App;
