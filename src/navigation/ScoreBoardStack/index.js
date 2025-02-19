import * as React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import ScoreBoardList from '../../screens/ScoreBoardList';
import Levels from '../../screens/Level';
import LevelDetail from '../../screens/LevelDetail';
import NavigationOptions from '../NavigationOptions';

const TeamStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={NavigationOptions}
      initialRouteName="ScoreBoardList">
      <Stack.Screen name="ScoreBoardList" component={ScoreBoardList} />
      <Stack.Screen name="Levels" component={Levels} />
      <Stack.Screen name="LevelDetail" component={LevelDetail} />
    </Stack.Navigator>
  );
};
export default TeamStack;
