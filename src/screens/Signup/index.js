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

const Signup = () => {
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
      <Header heading={'SIGN UP'} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid>
        <View style={styles.mainView}>
          <InputField placeholder="First Name" />
          <InputField placeholder="Last Name" />
          <InputField placeholder="Email Address" />
          <InputField placeholder="Select" />
          <InputField placeholder="Password" />
          <InputField placeholder="Confirm Password" />
          <TouchableOpacity style={styles.buttonView} onPress={() => {}}>
            <Icons name={buttonRed({})} />
            <Text style={styles.buttonText} text={'REGISTER'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.backText} text={'Back To Login'} />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default Signup;
