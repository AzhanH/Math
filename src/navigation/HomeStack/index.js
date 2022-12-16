import * as React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import InviteStudent from '../../screens/InviteStudent';

import Home from '../../screens/Home';
import NavigationOptions from '../NavigationOptions';
const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={NavigationOptions} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="InviteStudent" component={InviteStudent} />
    </Stack.Navigator>
  );
};
export default HomeStack;
