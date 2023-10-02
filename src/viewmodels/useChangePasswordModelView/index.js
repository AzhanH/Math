import {useRef} from 'react';
import * as yup from 'yup';
import {Toast, getMessage} from '../../api/APIHelpers';
import {useNavigation} from '@react-navigation/native';
import {UpdatePassword} from '../../state/profile';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const useChangePasswordModelView = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const newPassworRef = useRef(null);
  const confimrPasswordRef = useRef(null);

  const onSubmitCurrentPasswrod = () => newPassworRef.current.focus();
  const onSubmitNewPassword = () => confimrPasswordRef.current.focus();

  const goBack = () => navigation.goBack();

  const onPressUpdate = async apiData => {
    try {
      setLoading(true);
      const res = await dispatch(UpdatePassword(apiData)).unwrap();
      if (res?.message) {
        Toast.success(res?.message);
      }
      setLoading(false);
      goBack();
    } catch (e) {
      setLoading(false);
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
      loading,
      initialValues,
      validationSchema,
    },
  };
};
export default useChangePasswordModelView;
