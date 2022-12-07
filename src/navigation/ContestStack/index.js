import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Contest from '../../screens/Contest';
import InviteParent from '../../screens/InviteParents';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Contest">
      <Stack.Screen name="Contest" component={Contest} />
      <Stack.Screen name="InviteParents" component={InviteParent} />
    </Stack.Navigator>
  );
};
export default AuthStack;
