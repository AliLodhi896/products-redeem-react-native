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
import { OnBoarding } from './src/screens';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView  style={{flex: 1}}>
        <OnBoarding />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
