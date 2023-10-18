import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyTeams from '../../screens/MyTeams';
import TeamDetail from '../../screens/TeamDetail';
import CreateAndEditTeam from '../../screens/CreateAndEditTeam';
import NavigationOptions from '../NavigationOptions';
import AddMoreStudents from '../../screens/AddMoreStudents';
import Profile from '../../screens/Profile';
import EditProfile from '../../screens/EditProfile';

const TeamStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={NavigationOptions}
      initialRouteName="MyTeams">
      <Stack.Screen name="MyTeams" component={MyTeams} />
      <Stack.Screen name="TeamDetail" component={TeamDetail} />
      <Stack.Screen name="CreateAndEditTeam" component={CreateAndEditTeam} />
      <Stack.Screen name="AddMoreStudents" component={AddMoreStudents} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};
export default TeamStack;
