import React, {useEffect} from 'react';
import {View, TouchableOpacity, StatusBar} from 'react-native';
import buttonRed from '../../assets/svgs/buttonRed';
import {
  BackgroundWrapper,
  Header,
  Icons,
  InputField,
  Text,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import styles from './styles';
import {vh} from '../../utils/units';

const ProfileCreation = () => {
  useEffect(() => {
    AndroidKeyboardAdjust.setAdjustPan();
  }, []);
  return (
    <BackgroundWrapper>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <Header heading={'PROFILE CREATION'} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid
        style={styles.mainView}>
        <InputField placeholder="First Name" />
        <InputField placeholder="Last Name" />
        <InputField placeholder="Email Address" />
        <InputField placeholder="Chosose Class Grade" />
        <InputField placeholder="Add Another School" />
        <InputField placeholder="City" />
        <InputField placeholder="State" />
        <InputField placeholder="Zip Code" />
        <InputField placeholder="Choose your gender" />
        <InputField placeholder="mm/dd/yyyy" />
        <TouchableOpacity style={styles.buttonView} onPress={() => {}}>
          <Icons name={buttonRed({})} />
          <Text style={styles.buttonText} text={'CREATE PROFILE'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skipText} text={'Skip Now'} />
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default ProfileCreation;
