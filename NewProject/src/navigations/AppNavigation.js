import React, {useContext} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import theme from '../constants/theme';
import Icon from '../constants/Icon';
import { Home, RedeemRequests, ScanRequest, Scanner, Welcome } from '../screens';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();


export const AppBottomTab = ({navigation}) => {
  const defaultTabNavOptions = {
    tabBarStyle: {
      backgroundColor: theme.colors.background,
      height: 80,
      paddingBottom: 8,
      borderColor: theme.colors.background
    },
    tabBarActiveTintColor: theme.colors.primary,
  };

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{...defaultTabNavOptions}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: true, // Enable label
          tabBarLabel: 'Home', // Custom label text
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.notFocusedIcon}>
              <Icon
                icon_type={'AntDesign'}
                name={'home'}
                size={25}
                color={focused ? theme.colors.primary : theme.colors.disbaled}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="RedeemRequests"
        component={RedeemRequests}
        options={{
          headerShown: false,
          tabBarShowLabel: true, // Enable label
          tabBarLabel: 'Redeen Req', // Custom label text
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.notFocusedIcon}>
              <Icon
                icon_type={'MaterialIcons'}
                name={'redeem'}
                size={25}
                color={focused ? theme.colors.primary : theme.colors.disbaled}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          headerShown: false,
          tabBarShowLabel: true, // Enable label
          tabBarLabel: '', // Custom label text
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={[
                styles.main_Tab
              ]}>
              <Icon
                icon_type={'Ionicons'}
                name={'scan'}
                size={25}
                color={theme.colors.secondary}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ScanRequest"
        component={ScanRequest}
        options={{
          headerShown: false,
          tabBarShowLabel: true, // Enable label
          tabBarLabel: 'Scan History', // Custom label text
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.notFocusedIcon}>
              <Icon
                icon_type={'MaterialIcons'}
                name={'document-scanner'}
                size={25}
                color={focused ? theme.colors.primary : theme.colors.disbaled}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchList"
        component={Welcome}
        options={{
          headerShown: false,
          tabBarShowLabel: true, // Enable label
          tabBarLabel: 'Search', // Custom label text
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.notFocusedIcon}>
              <Icon
                icon_type={'Entypo'}
                name={'plus'}
                size={25}
                color={focused ? theme.colors.primary : theme.colors.disbaled}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  main_Tab: {
    backgroundColor: theme.colors.primary,
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 10,
    backgroundColor: theme.colors.primary,
    width: '60%',
    height: '80%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFocusedIcon: {
    height: '60%',
    width: 41,
    padding: 2,
    alignContent: 'center',
    alignItems: 'center',
  },
});
