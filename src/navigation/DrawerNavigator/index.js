import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';
import DrawerScreenWrapper from '../../components/DrawerComponents/DrawerScreenWrapper';
import BottomNavigation from '../Tabs';
import PrivacyAndPolicy from '../../screens/PrivacyPolicy';
import NavigationOptions from '../NavigationOptions';
import TermsAndCondition from '../../screens/TermsAndCondition';
import RegisteredStudents from '../../screens/RegisteredStudents';
import ContactUs from '../../screens/ContactUs';
import Notifications from '../../screens/Notification';
import {createStackNavigator} from '@react-navigation/stack';
import styles from './styles';
import EditProfile from '../../screens/EditProfile';
import Profile from '../../screens/Profile';
import ChangePassword from '../../screens/ChangePassword';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

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
      <Stack.Navigator screenOptions={NavigationOptions}>
        <Stack.Screen
          component={PrivacyAndPolicy}
          options={NavigationOptions}
          name="Privacy"
        />
      </Stack.Navigator>
    </DrawerScreenWrapper>
  );
};
const AnimatedTermsStack = () => {
  return (
    <DrawerScreenWrapper>
      <Stack.Navigator screenOptions={NavigationOptions}>
        <Stack.Screen
          component={TermsAndCondition}
          options={NavigationOptions}
          name="Terms"
        />
      </Stack.Navigator>
    </DrawerScreenWrapper>
  );
};
const AnimatedRegisteredStack = () => {
  return (
    <DrawerScreenWrapper>
      <Stack.Navigator screenOptions={NavigationOptions}>
        <Stack.Screen
          component={RegisteredStudents}
          options={NavigationOptions}
          name="RegisteredStd"
        />
        <Stack.Screen
          component={Profile}
          options={NavigationOptions}
          name="Profile"
        />
        <Stack.Screen
          component={EditProfile}
          options={NavigationOptions}
          name="EditProfile"
        />
      </Stack.Navigator>
    </DrawerScreenWrapper>
  );
};
const AnimatedContactStack = () => {
  return (
    <DrawerScreenWrapper>
      <Stack.Navigator screenOptions={NavigationOptions}>
        <Stack.Screen
          component={ContactUs}
          options={NavigationOptions}
          name="Contact"
        />
      </Stack.Navigator>
    </DrawerScreenWrapper>
  );
};
const AnimatedNotificationStack = () => {
  return (
    <DrawerScreenWrapper>
      <Stack.Navigator screenOptions={NavigationOptions}>
        <Stack.Screen
          component={Notifications}
          options={NavigationOptions}
          name="Notify"
        />
      </Stack.Navigator>
    </DrawerScreenWrapper>
  );
};
const AnimatedProfileStack = () => {
  return (
    <DrawerScreenWrapper>
      <Stack.Navigator screenOptions={NavigationOptions}>
        <Stack.Screen
          component={EditProfile}
          options={NavigationOptions}
          name="EditProfile"
        />
        <Stack.Screen
          component={Profile}
          options={NavigationOptions}
          name="Profile"
        />
        <Stack.Screen
          component={ChangePassword}
          options={NavigationOptions}
          name="ChangePassword"
        />
      </Stack.Navigator>
    </DrawerScreenWrapper>
  );
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: styles.drawerStyle,
        sceneContainerStyle: styles.sceneContStyle,
        drawerType: 'back',
      }}>
      <Drawer.Screen name="Tabs" component={AnimatedHomeStack} />
      <Drawer.Screen name="PrivacyPolicy" component={AnimatedPrivayStack} />
      <Drawer.Screen
        name="RegisteredStudents"
        component={AnimatedRegisteredStack}
      />
      <Drawer.Screen name="TermsAndCondition" component={AnimatedTermsStack} />
      <Drawer.Screen name="ContactUs" component={AnimatedContactStack} />
      <Drawer.Screen
        name="Notifications"
        component={AnimatedNotificationStack}
      />
      <Drawer.Screen name="ProfileStack" component={AnimatedProfileStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
