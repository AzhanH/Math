import React from 'react';
import SignupView from '../../views/SignupView';
import useSignupModelView from '../../viewmodels/useSignupModelView';
const Signup = () => {
  const {functions, states, ref} = useSignupModelView();
  const {
    onChangeFirstName,
    onChangeLastName,
    onChangePassword,
    onSubmitPassword,
    onSubmitLastName,
    onPressRole,
    onSelectRole,
    onChangeEmail,
    onChangeConfirmPassword,
    onPressRegister,
    onSubmitFirstName,
    closeModal,
    onPressLogin,
  } = functions;

  const {
    firstName,
    lastName,
    email,
    role,
    password,
    confirmPassword,
    showModal,
    roleOptions,
    loading,
  } = states;

  const {lastNameRef, emailRef, passwordRef, confirmPasswordRef} = ref;
  return (
    <SignupView
      firstName={firstName}
      lastName={lastName}
      email={email}
      emailRef={emailRef}
      role={role}
      password={password}
      onSubmitFirstName={onSubmitFirstName}
      onSubmitPassword={onSubmitPassword}
      onSelectRole={onSelectRole}
      onChangePassword={onChangePassword}
      onChangeLastName={onChangeLastName}
      onChangeFirstName={onChangeFirstName}
      onSubmitLastName={onSubmitLastName}
      passwordRef={passwordRef}
      lastNameRef={lastNameRef}
      onChangeEmail={onChangeEmail}
      onPressRole={onPressRole}
      confirmPassword={confirmPassword}
      onChangeConfirmPassword={onChangeConfirmPassword}
      onPressRegister={onPressRegister}
      showModal={showModal}
      closeModal={closeModal}
      roleOptions={roleOptions}
      confirmPasswordRef={confirmPasswordRef}
      loading={loading}
      onPressLogin={onPressLogin}
    />
  );
};
export default Signup;
