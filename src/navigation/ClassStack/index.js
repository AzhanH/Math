import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyClass from '../../screens/MyClass';
import EditStudentProfile from '../../screens/EditStudentProfile';
const ClassStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="MyClass">
      <Stack.Screen name="MyClass" component={MyClass} />
      <Stack.Screen name="EditStudentProfile" component={EditStudentProfile} />
    </Stack.Navigator>
  );
};
export default ClassStack;
