import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';
import DrawerScreenWrapper from '../../components/DrawerComponents/DrawerScreenWrapper';
import HomeStack from '../HomeStack';
import ContestStack from '../ContestStack';
import {vw} from '../../utils/units';
import {colors} from '../../utils/theme';
import BottomNavigation from '../Tabs';
import PrivacyAndPolicy from '../../screens/PrivacyPolicy';
import NavigationOptions from '../NavigationOptions';
import TermsAndCondition from '../../screens/TermsAndCondition';
import RegisteredStudents from '../../screens/RegisteredStudents';
import ContactUs from '../../screens/ContactUs';
import Notifiaction from '../../screens/Notification';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AnimatedHomeStack = () => {
  return (
    <DrawerScreenWrapper>
      <BottomNavigation />
    </DrawerScreenWrapper>
  );
};
const AnimatedPrivayStack = () => {
  return (
    <DrawerScreenWrapper>
      <PrivacyAndPolicy />
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
          width: vw * 55,
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
      <Drawer.Screen name="PrivacyPolicy" component={AnimatedPrivayStack} />
      <Drawer.Screen name="RegisteredStudents" component={RegisteredStudents} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="TermsAndCondition" component={TermsAndCondition} />
      <Drawer.Screen name="Notifications" component={Notifiaction} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
