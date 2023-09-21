import {useNavigation} from '@react-navigation/core';
import {useRef} from 'react';
import {Toast, getMessage} from '../../api/APIHelpers';
import {useAuthenticateUserMutation} from '../../api/authApis';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {setToken, setUser} from '../../state/auth';

const useLoginViewModel = () => {
  const dispatch = useDispatch();
  const [authenticateUser, {isLoading}] = useAuthenticateUserMutation();
  const navigation = useNavigation();
  const passwordRef = useRef(null);

  const onPressForgotPassword = () => navigation.navigate('ForgotPassword');
  const onSubmitEmail = () => passwordRef.current.focus();

  const onPressSignup = () => navigation.navigate('Signup');

  const onPressLogin = async apiData => {
    try {
      const res = await authenticateUser(apiData).unwrap();
      dispatch(setToken(res?.api_token));
      dispatch(setUser(res));
    } catch (e) {
      console.log('Error', e);
      Toast.error(getMessage(e));
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email is required'),
    password: yup.string().required('Passowrd is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  return {
    functions: {
      onSubmitEmail,
      onPressForgotPassword,
      onPressSignup,
      onPressLogin,
    },
    states: {
      validationSchema,
      initialValues,
      loading: isLoading,
    },
    refs: {
      passwordRef,
    },
  };
};

export default useLoginViewModel;
