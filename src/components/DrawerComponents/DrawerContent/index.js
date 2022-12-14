import React, { useState, useEffect, useRef } from 'react';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import { Image, View, Modal} from 'react-native';
import Animated from 'react-native-reanimated';
import { useDrawerProgress, DrawerContentScrollView } from '@react-navigation/drawer';
import TextWrapper from '../../../Component/Texts/RubikRegular';
import { generalImages, icons, sideIcons } from '../../../assets/images';


import { TouchableOpacity } from 'react-native-gesture-handler';

import { DrawerActions, useNavigation } from '@react-navigation/native';
import RubikRegular from '../../../Component/Texts/RubikRegular';
import GeneralModal from '../../GeneralModal';



const routeOrders = [
  'HomeStack',
  'PaymentLogStack',
  'BankDetailStack',
  'JobStack',
  'ProfileStack',
  'AboutUs',
  'ContactUs',
];

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
    label:'Bank Detail',
    icon: icons.bankDetailsIcon
 },
 JobStack:{
  label:'Job',
  icon: icons.booking
},
    ProfileStack:{
      label: 'Profile',
      icon: icons.userIcon,
    
    },
    AboutUs:{
      label: 'AboutUs',
      icon: icons.AboutUs,
      },
      ContactUs:{
        label: 'ContactUs',
        icon: icons.ContactUs,
        }
   
};




const DrawerContent = props => {


  const modalRef = useRef();


  const [visibility, setVisibility] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [isCollapsed, setisCollapsed] = useState(true);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const rotateAnim = new Animated.Value(0);
 
  useEffect(() => {
    if (isCollapsed) {
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 800,
      }).start();
    } else {
      Animated.timing(rotateAnim, {
        toValue: 0,
        duration: 800,
      }).start();
    }
  }, [isCollapsed]);
  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  const navigation = useNavigation();

  // console.log("user ===>", user);
  const handleOnDrawerItemPress = routeName => {

    if (drawerRoutes[routeName]) {
      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName);
      }
    }
  };
  



  return (
    <View style={[styles.container]}>
      <DrawerContentScrollView style={styles.drawercontainer} bounces={false}>
      <View >
        {/* <TouchableOpacity
          // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.crossButtonView}>
          <Image style={styles.crossIconStyle} source={icons.whitecross} />
        </TouchableOpacity> */}
        <View style={styles.header}>
          <Image
            source={generalImages.profileImage}
            style={styles.profileImage}
          />
         
          <RubikRegular style={styles.nameStyle}>
          James Anderson
        </RubikRegular>
        </View>
      </View>
      <View style={styles.routeContainer}>
{    
      routeOrders.map((item, index) => {
          return (
            <DrawerButton
              index={index}
              onPress={handleOnDrawerItemPress}
              routeName={item}
            />
          );
        })}
      
       

<View>
  <TouchableOpacity
          onPress={() => modalRef.current.show()}
          style={[styles.logoutButtonStyle]}>
          <Image style={styles.icon} source={icons.Logout} />
          <RubikRegular style={styles.label}>Sign out</RubikRegular>
        </TouchableOpacity>
        </View>
      
      </View>

       
</DrawerContentScrollView>
<GeneralModal reference={modalRef} text = "Are You Sure You Want To Logout ?" btntextone="Yes" btntexttwo="No" onButton1Press={() =>props.navigation.navigate('SignInScreen')}/>
    </View>
  );
};
export default DrawerContent;
