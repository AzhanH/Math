import {useEffect, useRef, useState} from 'react';
import {Platform} from 'react-native';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import {Toast, getMessage} from '../../api/APIHelpers';
import {validateEmptyInputs} from '../../utils/helperFunctions';
import {useNavigation} from '@react-navigation/core';
import {useRegisterUserMutation} from '../../api/authApis';

const useSignupModelView = () => {
  const [registerUser, {isLoading: loading}] = useRegisterUserMutation();
  const navigation = useNavigation();
  useEffect(() => {
    if (Platform.OS == 'android') {
      AndroidKeyboardAdjust.setAdjustPan();
    }
  }, []);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [role, setRole] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const roleOptions = [
    {name: 'Parent', value: 3},
    {name: 'Teacher', value: 2},
  ];
  const onChangeEmail = text => setEmail(text);
  const onChangeFirstName = text => setFirstName(text);
  const onChangeLastName = text => setLastName(text);
  const onChangePassword = text => setPassword(text);
  const onChangeConfirmPassword = text => setConfirmPassword(text);
  const onSubmitFirstName = () => lastNameRef.current.focus();
  const onSubmitLastName = () => emailRef.current.focus();
  const onPressRole = () => setShowModal(true);
  const onSubmitPassword = () => confirmPasswordRef.current.focus();

  const onSelectRole = item => {
    setRole({
      name: item?.name,
      value: item?.value,
    });
    setTimeout(() => {
      passwordRef.current.focus();
    }, 100);
  };

  const closeModal = () => setShowModal(false);

  const onPressLogin = () => navigation.navigate('Login');

  const onPressRegister = async () => {
    try {
      const apiData = validateEmptyInputs([
        {label: 'Email Address', email},
        {label: 'First Name', first_name: firstName},
        {label: 'Last Name', last_name: lastName},
        {label: 'Password', password},
        {label: 'Confirm Password', confirm_password: confirmPassword},
        {label: 'Role', role},
        {label: 'Role', role_id: role?.value},
      ]);
      if (apiData?.password !== apiData?.confirm_password) {
        throw new Error('Password & Confirm Password Should be Same');
      }
      const res = await registerUser(apiData).unwrap();
      console.log('RESSSSSSSSS', res);
      // navigation.replace('ProfileCreation', {token: res?.token});
    } catch (e) {
      Toast.error(getMessage(e));
      console.log('Error', e);
    }
  };

  return {
    functions: {
      onSubmitFirstName,
      onSubmitLastName,
      onPressRole,
      onSubmitPassword,
      onChangeEmail,
      onChangeConfirmPassword,
      onChangeFirstName,
      onChangeLastName,
      onChangePassword,
      onSelectRole,
      onPressRegister,
      closeModal,
      onPressLogin,
    },
    states: {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      role: role,
      showModal,
      roleOptions,
      loading,
    },
    ref: {
      lastNameRef,
      passwordRef,
      confirmPasswordRef,
      emailRef,
    },
  };
};

export default useSignupModelView;
