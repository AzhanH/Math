import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScoreBoardList from '../../screens/ScoreBoardList';
import Levels from '../../screens/Level';
import LevelDetail from '../../screens/LevelDetail';

const TeamStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="ScoreBoardList">
      <Stack.Screen name="ScoreBoardList" component={ScoreBoardList} />
      <Stack.Screen name="Levels" component={Levels} />
      <Stack.Screen name="LevelDetail" component={LevelDetail} />
    </Stack.Navigator>
  );
};
export default TeamStack;
