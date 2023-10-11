import React from 'react';
import EditProfileView from '../../views/EditProfileView';
import useEditProfileModelView from '../../viewmodels/useEditProfileModelView';

const EditProfile = () => {
  const {states, functions, refs} = useEditProfileModelView();
  const {
    firstName,
    lastName,
    phone,
    userName,
    email,
    city,
    classGrade,
    country,
    school,
    dropDownFor,
    showDropDown,
    dropDownList,
  } = states;
  const {
    anotherRef,
    cityRef,
    emailRef,
    lastNameRef,
    modalRef,
    phoneRef,
    stateRef,
    userNameRef,
  } = refs;
  const {
    onChangeEmail,
    onChangeFirstName,
    onChangeLastName,
    onChangePhone,
    onChangeUserName,
    onPressValuePicker,
    closeDropDown,
  } = functions;

  return (
    <EditProfileView
      onChangeLastName={onChangeLastName}
      onChangePhone={onChangePhone}
      onChangeUserName={onChangeUserName}
      onChangeFirstName={onChangeFirstName}
      onChangeEmail={onChangeEmail}
      anotherRef={anotherRef}
      cityRef={cityRef}
      email={email}
      emailRef={emailRef}
      lastNameRef={lastNameRef}
      modalRef={modalRef}
      phoneRef={phoneRef}
      stateRef={stateRef}
      userNameRef={userNameRef}
      firstName={firstName}
      lastName={lastName}
      phone={phone}
      userName={userName}
      city={city}
      onPressValuePicker={onPressValuePicker}
      classGrade={classGrade}
      country={country}
      school={school}
      dropDownFor={dropDownFor}
      showDropDown={showDropDown}
      closeDropDown={closeDropDown}
      dropDownList={dropDownList}
    />
  );
};
export default EditProfile;
