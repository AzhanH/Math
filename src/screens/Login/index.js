import React from 'react';
import LoginView from '../../views/LoginView';
import useAuthViewModel from '../../viewmodels/useAuthModelView';

const LoginScreen = () => {
  const {states, functions, refs} = useAuthViewModel();
  const {email, password, loading} = states;
  const {passwordRef} = refs;
  const {
    onChangeEmail,
    onChangePassword,
    onPressForgotPassword,
    onPressSignup,
    onSubmitEmail,
    onPressLogin,
  } = functions;
  return (
    <LoginView
      email={email}
      password={password}
      loading={loading}
      passwordRef={passwordRef}
      onPressSignup={onPressSignup}
      onSubmitEmail={onSubmitEmail}
      onPressForgotPassword={onPressForgotPassword}
      onChangePassword={onChangePassword}
      onChangeEmail={onChangeEmail}
      onPressLogin={onPressLogin}
    />
  );
};

export default LoginScreen;
