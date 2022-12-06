import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack';
import AnimatedSplash from 'react-native-animated-splash';
import BottomNavigation from './src/navigation/Tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const App = () => {
  useEffect(() => {
    AnimatedSplash.hide();
  }, []);

  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="AuthStack" component={AuthStack} />
        <RootStack.Screen name="BottomTabs" component={BottomNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
