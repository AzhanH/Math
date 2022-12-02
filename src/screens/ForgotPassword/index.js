import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, StatusBar} from 'react-native';
import {BackgroundWrapper, Button, InputField, Text} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import styles from './styles';

const ForgotPassword = ({navigation}) => {
  const [step, setStep] = useState(1);
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
      <KeyboardAwareScrollView style={styles.contentContainer}>
        <View style={styles.mainView}>
          <Text style={styles.forgotText} text={'FORGOT PASSWORD'} />
          <Text
            style={styles.recoverText}
            text={
              step === 1
                ? 'Enter your email to recover your password.'
                : step === 2
                ? 'Enter verification code sent to your email.'
                : 'Set new password for your account.'
            }
          />
          <InputField
            secureTextEntry={step == 3}
            placeholder={
              step == 1
                ? 'Email Address'
                : step == 2
                ? 'Verification Code'
                : 'New Password'
            }
          />
          {step === 3 && (
            <InputField secureTextEntry={true} placeholder="Confirm Password" />
          )}
          <Button
            onPress={() => step < 3 && setStep(step + 1)}
            btnText={step == 3 ? 'UPDATE' : 'CONTINUE'}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.centeredView}>
            <Text style={styles.signUpText} text={'Back To Login'} />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default ForgotPassword;
