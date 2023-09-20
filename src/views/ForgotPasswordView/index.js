import React from 'react';
import {
  BackgroundWrapper,
  InputField,
  Loader,
  Text,
  Button,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {View, TouchableOpacity} from 'react-native';
const ForgotPasswordView = ({
  onChangeEmail,
  email,
  loading,
  onChangeToken,
  token,
  password,
  onChangePassword,
  handleSteps,
  confirmPassRef,
  confirmPassword,
  onChangeConfirmPassword,
  onSubmitNewPassword,
  resendOtp,
  step,
  onPressLogin,
}) => {
  const step1 = (
    <InputField
      onChangeText={onChangeEmail}
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
        maxLength={6}
        keyboardType="phone-pad"
        returnKeyType="next"
        onChangeText={onChangeToken}
        value={token}
        onSubmitEditing={handleSteps}
        viewStyle={styles.input}
        placeholder={'Verification Code'}
      />

      <TouchableOpacity onPress={resendOtp} style={styles.resendCont}>
        <Text style={styles.resendText} text={'Resend Code'} />
      </TouchableOpacity>
    </View>
  );

  const step3 = (
    <View>
      <InputField
        maxLength={16}
        value={password}
        onChangeText={onChangePassword}
        editable={!loading}
        viewStyle={styles.input}
        secureTextEntry={true}
        returnKeyType="next"
        placeholder={'New Password'}
        onSubmitEditing={onSubmitNewPassword}
      />
      <InputField
        ref={confirmPassRef}
        maxLength={16}
        value={confirmPassword}
        onChangeText={onChangeConfirmPassword}
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
          onPress={onPressLogin}
          style={styles.centeredView}>
          <Text style={styles.signUpText} text={'Back To Login'} />
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default ForgotPasswordView;
