import React from 'react';
import { Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { icons, sideIcons } from '../../../assets/images';
import RubikRegular from '../../../components/TextWrappers/OswaldRegular';


import styles from './styles';

const drawerRoutes = {
  HomeStack: {
    label: 'Home',
    icon: icons.Home,
  },
  PaymentLogStack: {
    label: 'Payment',
    icon: icons.payment
  },
  BankDetailStack:{
    label: 'Bank Detail',
    icon: icons.bankDetailsIcon 
  },
  JobStack:{
    label:'Job',
    icon: icons.booking
  },
  ProfileStack: {
    label: 'Profile',
    icon: icons.userIcon,

  },
  AboutUs: {
    label: 'AboutUs',
    icon: icons.AboutUs,
  },
  ContactUs: {
    label: 'ContactUs',
    icon: icons.ContactUs,
  }

};



const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DrawerButton = props => {

  const routeConfigs = drawerRoutes[props?.routeName]

  return (
    <Pressable
      onPress={() => props.onPress(props.routeName)}
      style={[styles.container]}>
      <Image style={styles.icon} source={routeConfigs?.icon} />
      <RubikRegular style={styles.label}>{routeConfigs?.label}</RubikRegular>
    </Pressable>
  );
};

export default DrawerButton;
