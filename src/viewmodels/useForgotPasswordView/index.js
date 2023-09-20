import {useCallback, useRef, useState} from 'react';
import {Toast, getMessage} from '../../api/APIHelpers';
import {useFocusEffect, useNavigation} from '@react-navigation/core';
import {Platform} from 'react-native';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useVerifyCodeMutation,
} from '../../api/authApis';
import {validateEmptyInputs} from '../../utils/helperFunctions';
const useForgotPasswordView = () => {
  const [forgotPassword, {isLoading: forgotLoading}] =
    useForgotPasswordMutation();
  const [verifyCode, {isLoading: verifyLoading}] = useVerifyCodeMutation();
  const [resetPassword, {isLoading: resetLoading}] = useResetPasswordMutation();
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [password, setPassword] = useState(null);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const confirmPassRef = useRef(null);

  const clearState = () => {
    setStep(1);
    setEmail(null);
    setToken(null);
    setPassword(null);
    setConfirmPassword(null);
  };

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        AndroidKeyboardAdjust.setAdjustPan();
      }
      return clearState;
    }, []),
  );

  const onChangeEmail = text => setEmail(text);
  const onChangePassword = text => setPassword(text);
  const onChangeConfirmPassword = text => setConfirmPassword(text);
  const onSubmitNewPassword = () => confirmPassRef.current.focus();
  const onChangeToken = text => setToken(text);
  const onPressLogin = () => navigation.navigate('Login');

  const handleSteps = async () => {
    try {
      if (step === 1) {
        let apiData = validateEmptyInputs([{label: 'Email', email}]);
        let res = await forgotPassword(apiData).unwrap();
        Toast.success(res?.message);
        setStep(2);
      } else if (step == 2) {
        let apiData = validateEmptyInputs([
          {label: 'Email Address', email},
          {label: 'OTP', code: token},
        ]);
        let res = await verifyCode(apiData).unwrap();
        Toast.success(res?.message);
        setStep(3);
      } else {
        let apiData = validateEmptyInputs([
          {label: 'Email', email},
          {label: 'Password', password},
          {label: 'Confirm Password', confirm_password: confirmPassword},
        ]);
        let res = await resetPassword(apiData).unwrap();
        Toast.success(res?.message);
        navigation.navigate('Login');
        setStep(1);
      }
    } catch (e) {
      Toast.error(getMessage(e));
      console.log('Error', e);
    }
  };
  const resendOtp = async () => {
    try {
      let apiData = [{label: 'Email Address', email}];
      let res = await forgotPassword(apiData);
      Toast.success(res?.message);
    } catch (e) {
      console.log('Error', e);
    }
  };

  return {
    functions: {
      onChangeEmail,
      onChangePassword,
      onChangeConfirmPassword,
      handleSteps,
      onChangeToken,
      resendOtp,
      onPressLogin,
      onSubmitNewPassword,
    },
    states: {
      step,
      password,
      email,
      token,
      confirmPassword,
      forgotLoading,
      verifyLoading,
      resetLoading,
    },
    ref: {
      confirmPassRef,
    },
  };
};

export default useForgotPasswordView;
