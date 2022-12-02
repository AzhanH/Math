import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Payment from '../screens/Payment';
import SubscriptionPlans from '../screens/SubscriptionPlans';
import ForgotPassword from '../screens/ForgotPassword';
const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="SubscriptionPlans" component={SubscriptionPlans} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AuthStack;
