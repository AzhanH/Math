import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MyClass from '../../screens/MyClass';
import NavigationOptions from '../NavigationOptions';
import ClassDetails from '../../screens/ClassDetails';
import EditClass from '../../screens/EditClass';
import AddStudentsToClass from '../../screens/AddStudentsToClass';
const ClassStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={NavigationOptions}
      initialRouteName="MyClass">
      <Stack.Screen name="MyClass" component={MyClass} />
      <Stack.Screen name="ClassDetails" component={ClassDetails} />
      <Stack.Screen name="EditClass" component={EditClass} />
      <Stack.Screen name="AddStudentsToClass" component={AddStudentsToClass} />
    </Stack.Navigator>
  );
};
export default ClassStack;
