import React from 'react';
import ChangePasswordView from '../../views/ChangePassowordView';
import useChangePasswordModelView from '../../viewmodels/useChangePasswordModelView';

const ChangePassword = () => {
  const {functions, refs, states} = useChangePasswordModelView();
  const {onSubmitCurrentPasswrod, onSubmitNewPassword, onPressUpdate} =
    functions;
  const {confimrPasswordRef, newPassworRef} = refs;

  const {initialValues, validationSchema, isLoading} = states;

  return (
    <ChangePasswordView
      updatePassword={onPressUpdate}
      initialValues={initialValues}
      validationSchema={validationSchema}
      confimrPasswordRef={confimrPasswordRef}
      newPassworRef={newPassworRef}
      onSubmitCurrentPasswrod={onSubmitCurrentPasswrod}
      onSubmitNewPassword={onSubmitNewPassword}
      isLoading={isLoading}
    />
  );
};
export default ChangePassword;
