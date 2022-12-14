import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack';
import AnimatedSplash from 'react-native-animated-splash';
import BottomNavigation from './src/navigation/Tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentProfile from './src/screens/StudentProfile';
import EditStudentProfile from './src/screens/EditStudentProfile';
import ChangePassword from './src/screens/ChangePassword';
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
        <RootStack.Screen name="BottomTabs" component={DrawerNavigator} />
        <RootStack.Screen name="StudentProfile" component={StudentProfile} />
        <RootStack.Screen
          name="EditStudentProfile"
          component={EditStudentProfile}
        />
        <RootStack.Screen name="ChangePassword" component={ChangePassword} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
