import {useRef} from 'react';
import * as yup from 'yup';
import {useUpdatePasswordMutation} from '../../api/profileApis';
import {Toast, getMessage} from '../../api/APIHelpers';
import {useNavigation} from '@react-navigation/native';

const useChangePasswordModelView = () => {
  const navigation = useNavigation();
  const [updatePassword, {isLoading}] = useUpdatePasswordMutation();
  const newPassworRef = useRef(null);
  const confimrPasswordRef = useRef(null);

  const onSubmitCurrentPasswrod = () => newPassworRef.current.focus();
  const onSubmitNewPassword = () => confimrPasswordRef.current.focus();

  const goBack = () => navigation.goBack();

  const onPressUpdate = async apiData => {
    try {
      const res = await updatePassword(apiData).unwrap();
      if (res?.message) {
        Toast.success(res?.message);
      }
      goBack();
    } catch (e) {
      Toast.error(getMessage(e));
      console.log('Error', e);
    }
  };

  const validationSchema = () =>
    yup.object().shape({
      current_password: yup.string().required('Current Password is Required'),
      new_password: yup
        .string()
        .min(8, 'New Password should be of altleast 8 Characters')
        .required('New Password is required'),
      confirm_password: yup
        .string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('new_password'), null], 'Passwords must match'),
    });

  const initialValues = {
    current_password: '',
    new_password: '',
    confirm_password: '',
  };

  return {
    functions: {
      onSubmitCurrentPasswrod,
      onSubmitNewPassword,
      onPressUpdate,
      goBack,
    },
    refs: {
      newPassworRef,
      confimrPasswordRef,
    },
    states: {
      isLoading,
      initialValues,
      validationSchema,
    },
  };
};
export default useChangePasswordModelView;
