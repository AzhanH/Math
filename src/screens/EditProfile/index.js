import React from 'react';
import EditProfileView from '../../views/EditProfileView';
import useEditProfileModelView from '../../viewmodels/useEditProfileModelView';

const EditProfile = ({route}) => {
  const {states, functions, refs} = useEditProfileModelView({route});
  const {
    firstName,
    lastName,
    phone,
    userName,
    email,
    city,
    classGrade,
    country,
    state,
    gender,
    school,
    dropDownFor,
    showDropDown,
    dropDownList,
    dropDownValue,
    loading,
    isStudent,
    zipCode,
    dob,
    anotherSchool,
    updateLoading,
    getLoading,
  } = states;
  const {emailRef, lastNameRef, modalRef, phoneRef, userNameRef} = refs;
  const {
    onChangeEmail,
    onChangeFirstName,
    onChangeLastName,
    onChangePhone,
    onChangeUserName,
    onPressValuePicker,
    closeDropDown,
    onPressDropDownItem,
    onSubmitFirstName,
    onSubmitLastName,
    onSubmitUserName,
    onChangeZip,
    onChangeAnotherSchool,
    onPressConfirmDate,
    onPressUpdate,
    onPressOk,
  } = functions;

  return (
    <EditProfileView
      onChangeLastName={onChangeLastName}
      onChangePhone={onChangePhone}
      onChangeUserName={onChangeUserName}
      onChangeFirstName={onChangeFirstName}
      onChangeEmail={onChangeEmail}
      email={email}
      emailRef={emailRef}
      lastNameRef={lastNameRef}
      modalRef={modalRef}
      phoneRef={phoneRef}
      state={state}
      userNameRef={userNameRef}
      firstName={firstName}
      lastName={lastName}
      phone={phone}
      userName={userName}
      city={city}
      gender={gender}
      onPressValuePicker={onPressValuePicker}
      classGrade={classGrade}
      country={country}
      isStudent={isStudent}
      school={school}
      dropDownFor={dropDownFor}
      showDropDown={showDropDown}
      closeDropDown={closeDropDown}
      dropDownList={dropDownList}
      onPressDropDownItem={onPressDropDownItem}
      loading={loading}
      onSubmitFirstName={onSubmitFirstName}
      onSubmitLastName={onSubmitLastName}
      onSubmitUserName={onSubmitUserName}
      dropDownValue={dropDownValue}
      zipCode={zipCode}
      onChangeZip={onChangeZip}
      dob={dob}
      onChangeAnotherSchool={onChangeAnotherSchool}
      anotherSchool={anotherSchool}
      onPressConfirmDate={onPressConfirmDate}
      onPressUpdate={onPressUpdate}
      updateLoading={updateLoading}
      onPressOk={onPressOk}
      getLoading={getLoading}
    />
  );
};
export default EditProfile;
