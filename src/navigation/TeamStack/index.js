import * as React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import MyTeams from '../../screens/MyTeams';
import TeamDetail from '../../screens/TeamDetail';
import CreateAndEditTeam from '../../screens/CreateAndEditTeam';
import RegisteredStudents from '../../screens/RegisteredStudents';
import NavigationOptions from '../NavigationOptions';

const TeamStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={NavigationOptions}
      initialRouteName="MyTeams">
      <Stack.Screen name="MyTeams" component={MyTeams} />
      <Stack.Screen name="TeamDetail" component={TeamDetail} />
      <Stack.Screen name="CreateAndEditTeam" component={CreateAndEditTeam} />
      <Stack.Screen name="RegisteredStudents" component={RegisteredStudents} />
    </Stack.Navigator>
  );
};
export default TeamStack;
