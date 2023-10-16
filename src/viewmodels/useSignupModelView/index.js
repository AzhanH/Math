import {useEffect, useRef, useState} from 'react';
import {Platform} from 'react-native';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import {Toast, getMessage} from '../../api/APIHelpers';
import {useNavigation} from '@react-navigation/core';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {RegisterUser} from '../../state/auth';

const useSignupModelView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (Platform.OS == 'android') {
      AndroidKeyboardAdjust.setAdjustPan();
    }
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const roleOptions = [
    {name: 'Parent', value: 3},
    {name: 'Teacher', value: 2},
  ];
  const onSubmitFirstName = () => lastNameRef.current.focus();
  const onSubmitLastName = () => emailRef.current.focus();
  const onPressRole = () => setShowModal(true);
  const onSubmitPassword = () => confirmPasswordRef.current.focus();
  const onSelectRole = (form, item) => {
    form.handleChange('role')(JSON.stringify(item));
    setTimeout(() => {
      passwordRef.current.focus();
    }, 100);
  };
  const closeModal = () => setShowModal(false);
  const onPressLogin = () => navigation.navigate('Login');
  const validationSchema = yup.object().shape({
    first_name: yup.string().required('First Name is required').trim(),
    last_name: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid Email').required('Email is required'),
    role: yup.string().required('Role is required'),
    password: yup.string().required('Passowrd is required'),
    confirm_password: yup.string().required('Confirm Password is required'),
  });

  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    password: '',
    confirm_password: '',
  };

  const onPressRegister = async data => {
    try {
      setLoading(true);
      let apiData = {...data};
      apiData.role_id = JSON.parse(apiData.role)?.value;
      if (apiData?.password !== apiData?.confirm_password) {
        throw new Error('Password & Confirm Password should be same');
      }
      const res = await dispatch(RegisterUser(apiData)).unwrap();
      navigation.replace('ProfileCreation', {
        email: res?.data?.email,
        token: res?.data?.api_token,
      });
    } catch (e) {
      Toast.error(getMessage(e));
    } finally {
      setLoading(false);
    }
  };

  return {
    functions: {
      onSubmitFirstName,
      onSubmitLastName,
      onPressRole,
      onSubmitPassword,
      onSelectRole,
      onPressRegister,
      closeModal,
      onPressLogin,
    },
    states: {
      showModal,
      roleOptions,
      loading,
      validationSchema,
      initialValues,
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
