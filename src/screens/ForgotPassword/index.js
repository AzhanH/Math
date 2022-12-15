import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import {BackgroundWrapper, Button, InputField, Text} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import styles from './styles';

const ForgotPassword = ({navigation}) => {
  const [step, setStep] = useState(1);
  useEffect(() => {
    if (Platform.OS === 'android') {
      AndroidKeyboardAdjust.setAdjustPan();
    }
  }, []);

  let textObj = {
    1: 'Enter your email to recover your password.',
    2: 'Enter verification code sent to your email.',
    3: 'Set new password for your account.',
  };
  let placeholder = {
    1: 'Email Address',
    2: 'Verification Code',
    3: 'New Password',
  };
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView style={styles.contentContainer}>
        <Text style={styles.forgotText} text={'FORGOT PASSWORD'} />
        <Text style={styles.recoverText} text={textObj[step]} />
        <InputField
          viewStyle={styles.input}
          secureTextEntry={step == 3}
          placeholder={placeholder[step]}
        />
        {step === 2 && (
          <TouchableOpacity style={styles.resendCont}>
            <Text style={styles.resendText} text={'Resend Code'} />
          </TouchableOpacity>
        )}
        {step === 3 && (
          <InputField
            viewStyle={styles.input}
            secureTextEntry={true}
            placeholder="Confirm Password"
          />
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
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default ForgotPassword;
