import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';
import DrawerScreenWrapper from '../../components/DrawerComponents/DrawerScreenWrapper';
import HomeStack from '../HomeStack';
import ContestStack from '../ContestStack';
import {vw} from '../../utils/units';
import {colors} from '../../utils/theme';
import BottomNavigation from '../Tabs';

const Drawer = createDrawerNavigator();

const AnimatedHomeStack = props => {
  return (
    <DrawerScreenWrapper>
      <BottomNavigation />
    </DrawerScreenWrapper>
  );
};

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: {
          width: vw * 50,
          backgroundColor: 'transparent',
        },
        sceneContainerStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        drawerType: 'back',
      }}>
      <Drawer.Screen name="Tabs" component={AnimatedHomeStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
