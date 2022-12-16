import * as React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

import Contest from '../../screens/Contest';
import InviteParent from '../../screens/InviteParents';
import ContestDetail from '../../screens/ContestDetail';
import CreateAndEditContest from '../../screens/CreateAndEditContest';
import NavigationOptions from '../NavigationOptions';

const ContestStack = ({route}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={NavigationOptions}
      initialRouteName="Contest">
      <Stack.Screen name="Contest" component={Contest} />
      <Stack.Screen name="ContestDetail" component={ContestDetail} />
      <Stack.Screen name="InviteParents" component={InviteParent} />
      <Stack.Screen
        name="CreateAndEditContest"
        component={CreateAndEditContest}
      />
    </Stack.Navigator>
  );
};
export default ContestStack;
