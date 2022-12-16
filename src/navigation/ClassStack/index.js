import * as React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

import MyClass from '../../screens/MyClass';
import NavigationOptions from '../NavigationOptions';
const ClassStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={NavigationOptions}
      initialRouteName="MyClass">
      <Stack.Screen name="MyClass" component={MyClass} />
    </Stack.Navigator>
  );
};
export default ClassStack;
