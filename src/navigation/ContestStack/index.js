import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Contest from '../../screens/Contest';
import InviteParent from '../../screens/InviteParents';
import ContestDetail from '../../screens/ContestDetail';
import CreateAndEditContest from '../../screens/CreateAndEditContest';

const ContestStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Contest">
      <Stack.Screen name="Contest" component={Contest} />
      <Stack.Screen name="InviteParents" component={InviteParent} />
      <Stack.Screen name="ContestDetail" component={ContestDetail} />
      <Stack.Screen
        name="CreateAndEditContest"
        component={CreateAndEditContest}
      />
    </Stack.Navigator>
  );
};
export default ContestStack;
