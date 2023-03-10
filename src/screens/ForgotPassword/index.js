import React, {useCallback, useRef, useState} from 'react';
import {TouchableOpacity, Platform, View} from 'react-native';
import {
  BackgroundWrapper,
  Button,
  InputField,
  Loader,
  Text,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import styles from './styles';
import useAuth from '../../hooks/useAuth';
import {Toast} from '../../api/APIHelpers';
import {useFocusEffect} from '@react-navigation/native';

const ForgotPassword = ({navigation}) => {
  const {forgotPassword, resetPassword, verifyOtp} = useAuth();
  const [step, setStep] = useState(1);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [password, setPassword] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const [resendLoading, setResendLoading] = useState(false);

  //refs
  const confirmPassRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        AndroidKeyboardAdjust.setAdjustPan();
      }
      return clearState;
    }, []),
  );

  const clearState = () => {
    setStep(1);
    setEmail(null);
    setToken(null);
    setPassword(null);
    setConfirmPassword(null);
  };
  const handleSteps = async () => {
    try {
      setLoading(true);
      if (step === 1) {
        let apiData = [{label: 'Email Address', email}];
        let msg = await forgotPassword(apiData);
        Toast.success(msg);
        setStep(2);
      } else if (step == 2) {
        let apiData = [
          {label: 'Email Address', email},
          {label: 'OTP', token},
        ];
        let msg = await verifyOtp(apiData);
        Toast.success(msg);
        setStep(3);
      } else {
        setLoading(true);
        let apiData = [
          {label: 'Email', email},
          {label: 'Password', password},
          {label: 'Confirm Password', password_confirmation: confirmPassword},
        ];
        let res = await resetPassword(apiData);
        Toast.success(res);
        setLoading(false);
        navigation.navigate('Login');
        setStep(1);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('Error', e);
    }
  };

  const resendOtp = async () => {
    try {
      setResendLoading(true);
      let apiData = [{label: 'Email Address', email}];
      let msg = await forgotPassword(apiData);
      Toast.success(msg);
      setResendLoading(false);
    } catch (e) {
      setResendLoading(false);
      console.log('Error', e);
    }
  };

  const step1 = (
    <InputField
      onChangeText={setEmail}
      editable={!loading}
      returnKeyType="next"
      maxLength={35}
      value={email}
      onSubmitEditing={handleSteps}
      viewStyle={styles.input}
      placeholder={'Email Address'}
    />
  );

  const step2 = (
    <View>
      <InputField
        editable={!loading}
        maxLength={4}
        keyboardType="phone-pad"
        returnKeyType="next"
        onChangeText={setToken}
        value={token}
        onSubmitEditing={handleSteps}
        viewStyle={styles.input}
        placeholder={'Verification Code'}
      />

      <TouchableOpacity onPress={resendOtp} style={styles.resendCont}>
        {resendLoading ? (
          <Loader size={'small'} />
        ) : (
          <Text style={styles.resendText} text={'Resend Code'} />
        )}
      </TouchableOpacity>
    </View>
  );

  const step3 = (
    <View>
      <InputField
        maxLength={16}
        value={password}
        onChangeText={setPassword}
        editable={!loading}
        viewStyle={styles.input}
        secureTextEntry={true}
        returnKeyType="next"
        placeholder={'New Password'}
        onSubmitEditing={() => confirmPassRef.current.focus()}
      />
      <InputField
        ref={confirmPassRef}
        maxLength={16}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        editable={!loading}
        viewStyle={styles.input}
        secureTextEntry={true}
        returnKeyType="send"
        placeholder="Confirm Password"
        onSubmitEditing={handleSteps}
      />
    </View>
  );

  let stepsObj = {
    1: step1,
    2: step2,
    3: step3,
  };
  let textObj = {
    1: 'Enter your email to recover your password.',
    2: 'Enter verification code sent to your email.',
    3: 'Set new password for your account.',
  };
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView style={styles.contentContainer}>
        <Text style={styles.forgotText} text={'FORGOT PASSWORD'} />
        <Text style={styles.recoverText} text={textObj[step]} />

        {stepsObj[step]}

        {loading ? (
          <Loader />
        ) : (
          <Button
            onPress={handleSteps}
            btnText={step == 3 ? 'UPDATE' : 'CONTINUE'}
          />
        )}

        <TouchableOpacity
          disabled={loading}
          onPress={() => navigation.navigate('Login')}
          style={styles.centeredView}>
          <Text style={styles.signUpText} text={'Back To Login'} />
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default ForgotPassword;
