import React from 'react';
import LoginView from '../../views/LoginView';
import useLoginViewModel from '../../viewmodels/useLoginViewModel';

const LoginScreen = () => {
  const {states, functions, refs} = useLoginViewModel();
  const {loading, validationSchema, initialValues} = states;
  const {passwordRef} = refs;
  const {onPressForgotPassword, onPressSignup, onSubmitEmail, onPressLogin} =
    functions;
  return (
    <LoginView
      loading={loading}
      passwordRef={passwordRef}
      onPressSignup={onPressSignup}
      onSubmitEmail={onSubmitEmail}
      onPressForgotPassword={onPressForgotPassword}
      onPressLogin={onPressLogin}
      validationSchema={validationSchema}
      initialValues={initialValues}
    />
  );
};

export default LoginScreen;
