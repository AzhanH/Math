import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import {Image, View, ImageBackground} from 'react-native';
import Animated from 'react-native-reanimated';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import images from '../../../assets/images';
import Text from '../../Text';
import Button from '../../Button';
import CustomModal from '../../CustomModal';
import useAuth from '../../../hooks/useAuth';

const drawerRoutes = [
  {
    label: 'Home',
    icon: images.home,
    to: 'Tabs',
  },
  {
    label: 'My Profile',
    icon: images.profile,
    to: 'ProfileStack',
  },
  {
    label: 'Registered Students',
    icon: images.baseball,
    to: 'RegisteredStudents',
  },
  {
    label: 'Privacy Policy',
    to: 'PrivacyPolicy',
    icon: images.policy,
  },
  {
    label: 'Terms & Condition',
    icon: images.terms,
    to: 'TermsAndCondition',
  },
  {
    label: 'Contact Us',
    icon: images.contact,
    to: 'ContactUs',
  },
];

const DrawerContent = props => {
  const modalRef = useRef();
  let isCollapsed = true;
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

  const {logoutUser} = useAuth();
  const [loading, setLoading] = useState(false);
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
              onPress={() =>
                props?.navigation?.navigate(
                  v?.to,
                  (v?.to === 'ProfileStack' || v?.to === 'Tabs') && {
                    screen: v?.to === 'ProfileStack' ? 'Profile' : 'HOME',
                  },
                )
              }
            />
          ))}
        </View>
        <Button onPress={() => modalRef.current.show()} btnText={'SIGNOUT'} />
      </DrawerContentScrollView>
      <CustomModal
        loading={loading}
        onPressOk={async () => {
          try {
            setLoading(true);
            await logoutUser();

            setLoading(false);
          } catch (e) {
            setLoading(false);
          }
        }}
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
