import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {Toast, getMessage} from '../../api/APIHelpers';
import {useState} from 'react';
import {ContactUs} from '../../state/general';
import {useNavigation} from '@react-navigation/native';

const useContactUseModelView = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const subjectRef = useRef(null);
  const commentsRef = useRef(null);

  const validationSchema = yup.object().shape({
    first_name: yup.string().required('First Name is required'),
    last_name: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid Email').required('Email is required'),
    phone: yup.string().required('Phone is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Comments are required'),
  });

  const onSubmitFirstName = () => lastNameRef.current.focus();
  const onSubmitLastName = () => emailRef.current.focus();
  const onSubmitEmail = () => phoneRef.current.focus();
  const onSubmitPhone = () => subjectRef.current.focus();
  const onSubmitSubject = () => commentsRef.current.focus();

  const onPressSendFeedback = async (data, {resetForm}) => {
    try {
      setLoading(true);
      const res = await dispatch(ContactUs(data)).unwrap();
      Toast.success(res?.message);
      navigation.goBack();
      resetForm({...initialValues});
      setLoading(false);
    } catch (e) {
      setLoading(false);
      Toast.error(getMessage(e));
    }
  };

  const initialValues = {
    first_name: user?.first_name,
    last_name: user?.last_name,
    email: user?.email,
    phone: user?.phone,
    subject: '',
    message: '',
  };

  return {
    functions: {
      onSubmitFirstName,
      onSubmitLastName,
      onSubmitEmail,
      onSubmitPhone,
      onSubmitSubject,
      onPressSendFeedback,
    },
    states: {
      loading,
      initialValues,
      validationSchema,
    },
    refs: {
      lastNameRef,
      emailRef,
      phoneRef,
      subjectRef,
      commentsRef,
    },
  };
};
export default useContactUseModelView;
