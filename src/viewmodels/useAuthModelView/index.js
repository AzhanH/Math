import {useNavigation} from '@react-navigation/core';
import {useRef, useState} from 'react';
import {Toast, getMessage} from '../../api/APIHelpers';
import {useAuthenticateUserMutation} from '../../api/authApis';
import {validateEmptyInputs} from '../../utils/helperFunctions';

const useAuthViewModel = () => {
  const [authenticateUser, {isLoading}] = useAuthenticateUserMutation();
  const navigation = useNavigation();
  const passwordRef = useRef(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onChangeEmail = text => setEmail(text);
  const onChangePassword = text => setPassword(text);
  const onPressForgotPassword = () => navigation.navigate('ForgotPassword');
  const onSubmitEmail = () => passwordRef.current.focus();
  const onPressSignup = () => navigation.navigate('Signup');

  const onPressLogin = async () => {
    try {
      const apiData = validateEmptyInputs([
        {label: 'Email', email},
        {label: 'Password', password},
      ]);
      const res = await authenticateUser(apiData).unwrap();
      console.log('RESSSSS', res);
    } catch (e) {
      console.log('Error', e);
      Toast.error(getMessage(e));
    }
  };

  return {
    functions: {
      onChangeEmail,
      onChangePassword,
      onSubmitEmail,
      onPressForgotPassword,
      onPressSignup,
      onPressLogin,
    },
    states: {
      email,
      password,
      loading: isLoading,
    },
    refs: {
      passwordRef,
    },
  };
};

export default useAuthViewModel;
