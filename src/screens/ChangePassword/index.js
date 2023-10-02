import React from 'react';
import ChangePasswordView from '../../views/ChangePassowordView';
import useChangePasswordModelView from '../../viewmodels/useChangePasswordModelView';

const ChangePassword = () => {
  const {functions, refs, states} = useChangePasswordModelView();
  const {onSubmitCurrentPasswrod, onSubmitNewPassword, onPressUpdate} =
    functions;
  const {confimrPasswordRef, newPassworRef} = refs;

  const {initialValues, validationSchema, loading} = states;

  return (
    <ChangePasswordView
      updatePassword={onPressUpdate}
      initialValues={initialValues}
      validationSchema={validationSchema}
      confimrPasswordRef={confimrPasswordRef}
      newPassworRef={newPassworRef}
      onSubmitCurrentPasswrod={onSubmitCurrentPasswrod}
      onSubmitNewPassword={onSubmitNewPassword}
      isLoading={loading}
    />
  );
};
export default ChangePassword;
