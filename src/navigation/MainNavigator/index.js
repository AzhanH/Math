import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useAuth} from '../../hooks';
import AuthStack from '../AuthStack';
import DrawerNavigator from '../DrawerNavigator';

const MainNavigation = () => {
  const {user, token} = useAuth();
  const MainNavigator = createNativeStackNavigator();

  useEffect(() => {}, []);
  return (
    <MainNavigator.Navigator screenOptions={{headerShown: false}}>
      {user && token ? (
        <MainNavigator.Screen
          name="MainNavigator"
          component={DrawerNavigator}
        />
      ) : (
        <MainNavigator.Screen name="AuthStack" component={AuthStack} />
      )}
    </MainNavigator.Navigator>
  );
};
export default MainNavigation;
