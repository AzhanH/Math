import React from 'react';
import InviteStudentView from '../../views/InviteStudentView';
import useInviteStudentModalView from '../../viewmodels/useInviteStudentModelView';

const InviteStudent = () => {
  const {states, functions, refs} = useInviteStudentModalView();
  const {
    validationSchema,
    initialValues,
    showDropDown,
    schools,
    classes,
    dropDownFor,
    gender,
    loading,
  } = states;
  const {emailRef, lastNameRef, schoolNameRef, userNameRef, modalRef} = refs;
  const {
    onPressSendInvite,
    onSubmitFirstName,
    onSubmitLastName,
    onSubmitUserName,
    onPressSchool,
    onPressGender,
    onPressGrade,
    onSelectItem,
    closeModal,
    onSelectDate,
    onPressOk,
  } = functions;
  return (
    <InviteStudentView
      initialValues={initialValues}
      validationSchema={validationSchema}
      modalRef={modalRef}
      emailRef={emailRef}
      lastNameRef={lastNameRef}
      schoolNameRef={schoolNameRef}
      userNameRef={userNameRef}
      schools={schools}
      classes={classes}
      gender={gender}
      closeModal={closeModal}
      onPressSendInvite={onPressSendInvite}
      onSubmitFirstName={onSubmitFirstName}
      onSubmitLastName={onSubmitLastName}
      onSubmitUserName={onSubmitUserName}
      onPressSchool={onPressSchool}
      onSelectItem={onSelectItem}
      onPressGender={onPressGender}
      onPressGrade={onPressGrade}
      showDropDown={showDropDown}
      dropDownFor={dropDownFor}
      onSelectDate={onSelectDate}
      loading={loading}
      onPressOk={onPressOk}
    />
  );
};

export default InviteStudent;
