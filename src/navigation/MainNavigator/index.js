import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AuthStack from '../AuthStack';
import DrawerNavigator from '../DrawerNavigator';

const MainNavigation = () => {
  const MainNavigator = createNativeStackNavigator();
  return (
    <MainNavigator.Navigator screenOptions={{headerShown: false}}>
      <MainNavigator.Screen name="AuthStack" component={AuthStack} />
      <MainNavigator.Screen name="MainNavigator" component={DrawerNavigator} />
    </MainNavigator.Navigator>
  );
};
export default MainNavigation;
