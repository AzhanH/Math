import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
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

const Login = () => {
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
      <Header heading={'LOGIN'} />
      <KeyboardAwareScrollView style={styles.contentContainer}>
        <View style={styles.mainView}>
          <InputField placeholder="Email Address" />
          <InputField secureTextEntry={true} placeholder="Password" />
          <TouchableOpacity style={styles.forgotView}>
            <Text style={styles.forgotText} text="Forgot Password?" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonView} onPress={() => {}}>
            <Icons name={buttonRed({})} />
            <Text style={styles.buttonText} text={'LOGIN'} />
          </TouchableOpacity>
          <View style={styles.row}>
            <Text style={styles.dontText} text={"Don't Have An Account"} />
            <TouchableOpacity style={styles.marginLeft}>
              <Text style={styles.signUpText} text={'Sign Up!'} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default Login;
