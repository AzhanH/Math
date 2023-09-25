import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import AuthStack from '../AuthStack';
import DrawerNavigator from '../DrawerNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {getGeneralData} from '../../api/generalApis';
import {setGeneralData} from '../../state/general';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const {user, token} = useSelector(state => state.auth);
  const MainNavigator = createNativeStackNavigator();

  useEffect(() => {
    getGeneralData().then(res => {
      dispatch(setGeneralData(res));
    });
  }, []);

  return (
    <MainNavigator.Navigator screenOptions={{headerShown: false}}>
      {user && token ? (
        <MainNavigator.Screen
          name="MainNavigator"
          component={DrawerNavigator}
        />
      ) : (
        <MainNavigator.Screen name="AuthStack" component={AuthStack} />
      )}
    </MainNavigator.Navigator>
  );
};
export default MainNavigation;
