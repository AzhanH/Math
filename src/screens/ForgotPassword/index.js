import React from 'react';
import ForgotPasswordView from '../../views/ForgotPasswordView';
import useForgotPasswordView from '../../viewmodels/useForgotPasswordView';

const ForgotPassword = () => {
  const {functions, states, ref} = useForgotPasswordView();
  const {
    handleSteps,
    onChangeEmail,
    onChangePassword,
    onSubmitNewPassword,
    onChangeToken,
    resendOtp,
    onPressLogin,
    onChangeConfirmPassword,
  } = functions;
  const {
    email,
    password,
    confirmPassword,
    token,
    resetLoading,
    verifyLoading,
    forgotLoading,
    step,
  } = states;

  const {confirmPassRef} = ref;
  return (
    <ForgotPasswordView
      step={step}
      email={email}
      onChangeEmail={onChangeEmail}
      password={password}
      token={token}
      onChangePassword={onChangePassword}
      confirmPassword={confirmPassword}
      onChangeConfirmPassword={onChangeConfirmPassword}
      onSubmitNewPassword={onSubmitNewPassword}
      onChangeToken={onChangeToken}
      handleSteps={handleSteps}
      resendOtp={resendOtp}
      onPressLogin={onPressLogin}
      confirmPassRef={confirmPassRef}
      loading={resetLoading || verifyLoading || forgotLoading}
    />
  );
};

export default ForgotPassword;
