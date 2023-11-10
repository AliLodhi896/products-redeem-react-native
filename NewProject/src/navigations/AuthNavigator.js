import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
///***********Icon

//Import Navigation
import {createStackNavigator,TransitionSpecs} from '@react-navigation/stack';
import theme from '../constants/theme';
import { OnBoarding, Registration, Welcome } from '../screens';


const AuthStack = createStackNavigator();


export const AuthNavigator = () => {
  const horizontalAnimation = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };
  const defaultStackNavOptions = {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitleStyle: {
      fontSize: 18,
    },
    headerTintColor: 'white',
    gestureEnabled: true,
    ...horizontalAnimation,
  };
    return (
      <AuthStack.Navigator screenOptions={defaultStackNavOptions}
       
        
         >
        <AuthStack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    );
  };