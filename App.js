import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import AnimatedSplash from 'react-native-animated-splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './src/navigation/DrawerNavigator';
const App = () => {
  useEffect(() => {
    AnimatedSplash.hide();
  }, []);

  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="AuthStack" component={AuthStack} />
        <RootStack.Screen name="MainNavigator" component={DrawerNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
