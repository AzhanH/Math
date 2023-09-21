import React from 'react';
import SignupView from '../../views/SignupView';
import useSignupModelView from '../../viewmodels/useSignupModelView';
const Signup = () => {
  const {functions, states, ref} = useSignupModelView();
  const {
    onSubmitPassword,
    onSubmitLastName,
    onPressRole,
    onSelectRole,
    onPressRegister,
    onSubmitFirstName,
    closeModal,
    onPressLogin,
  } = functions;

  const {
    role,
    showModal,
    roleOptions,
    loading,
    initialValues,
    validationSchema,
  } = states;

  const {lastNameRef, emailRef, passwordRef, confirmPasswordRef} = ref;
  return (
    <SignupView
      emailRef={emailRef}
      role={role}
      onSubmitFirstName={onSubmitFirstName}
      onSubmitPassword={onSubmitPassword}
      onSelectRole={onSelectRole}
      onSubmitLastName={onSubmitLastName}
      passwordRef={passwordRef}
      lastNameRef={lastNameRef}
      onPressRole={onPressRole}
      onPressRegister={onPressRegister}
      showModal={showModal}
      closeModal={closeModal}
      roleOptions={roleOptions}
      confirmPasswordRef={confirmPasswordRef}
      loading={loading}
      validationSchema={validationSchema}
      onPressLogin={onPressLogin}
      initialValues={initialValues}
    />
  );
};
export default Signup;
