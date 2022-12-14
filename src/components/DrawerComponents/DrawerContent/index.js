import React, {useState, useEffect, useRef} from 'react';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import {Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import images from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';
import Text from '../../Text';
import Button from '../../Button';
import CustomModal from '../../CustomModal';

const drawerRoutes = [
  {
    label: 'My Profile',
    icon: images.profile,
  },
  {
    label: 'Registered Students',
    icon: images.baseball,
  },
  {
    label: 'Privacy Policy',
    icon: images.policy,
  },
  {
    label: 'Terms & Condition',
    icon: images.terms,
  },
  {
    label: 'Contact Us',
    icon: images.contact,
  },
];

const DrawerContent = props => {
  const navigation = useNavigation();
  const modalRef = useRef();

  const [visibility, setVisibility] = useState(false);
  const [isCollapsed, setisCollapsed] = useState(true);
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

  const handleOnDrawerItemPress = routeName => {
    if (drawerRoutes[routeName]) {
      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName);
      }
    }
  };

  return (
    <ImageBackground
      style={[styles.container]}
      source={images.scoreboardBackground}>
      <DrawerContentScrollView style={styles.drawercontainer} bounces={false}>
        <View style={styles.userInfo}>
          <Image style={styles.image} source={images.childImage1} />
          <Text style={styles.hello} text={'HELLO'} />
          <Text style={styles.userNameText} text={'ALEX JOHN'} />
        </View>

        <View style={styles.listContainer}>
          {drawerRoutes?.map((v, i) => (
            <DrawerButton
              key={i}
              label={v?.label}
              icon={v?.icon}
              index={i}
              onPress={handleOnDrawerItemPress}
            />
          ))}
        </View>
        <Button onPress={() => modalRef.current.show()} btnText={'SIGNOUT'} />
      </DrawerContentScrollView>
      <CustomModal
        heading="Alert"
        subHeading="Are you sure you want to logout?"
        multipleButtons
        ref={modalRef}
        btn1Text="YES"
        btn2Text="NO"
        image={images.logout}
      />
    </ImageBackground>
  );
};
export default DrawerContent;
