import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../../screens/Welcome';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';
import Payment from '../../screens/Payment';
import SubscriptionPlans from '../../screens/SubscriptionPlans';
import ForgotPassword from '../../screens/ForgotPassword';
import ProfileCreation from '../../screens/ProfileCreation';
import SubsscriptionLogs from '../../screens/SubscriptionLogs';
import AuthNavigationOptions from '../AuthNavigationOptions';
const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={AuthNavigationOptions}
      initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SubscriptionLogs" component={SubsscriptionLogs} />
      <Stack.Screen name="SubscriptionPlans" component={SubscriptionPlans} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ProfileCreation" component={ProfileCreation} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
};
export default AuthStack;
