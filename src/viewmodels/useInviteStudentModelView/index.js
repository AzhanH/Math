import {useNavigation} from '@react-navigation/core';
import {useRef, useState} from 'react';
import {Toast, getMessage} from '../../api/APIHelpers';
import * as yup from 'yup';
import {useSelector} from 'react-redux';
import {useSendInviteMutation} from '../../api/teacherApis';
import {useEffect} from 'react';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import moment from 'moment';

const useInviteStudentModalView = () => {
  useEffect(() => {
    AndroidKeyboardAdjust.setAdjustPan();
  }, []);
  const navigation = useNavigation();
  const [sendInvite, {isLoading}] = useSendInviteMutation();
  const [dropDownFor, setDropDownFor] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const {general} = useSelector(state => state.general);
  const lastNameRef = useRef(null);
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const schoolNameRef = useRef(null);
  const modalRef = useRef(null);

  const onSubmitFirstName = () => lastNameRef.current.focus();
  const onSubmitLastName = () => userNameRef.current.focus();
  const onSubmitUserName = () => emailRef.current.focus();

  const onPressGrade = () => {
    setShowDropDown(true);
    setDropDownFor('Grades');
  };
  const onPressSchool = () => {
    setShowDropDown(true);
    setDropDownFor('Schools');
  };
  const onPressGender = () => {
    setShowDropDown(true);
    setDropDownFor('Gender');
  };
  const closeModal = () => {
    setShowDropDown(false);
  };

  const onSelectDate = (form, date) => {
    form.handleChange('dob')(moment(date).format('MM-DD-YYYY'));
  };

  const onPressSendInvite = async data => {
    try {
      let apiData = {...data};
      apiData.class_grade_id = JSON.parse(apiData.class_grade_id)?.value;
      apiData.school_id = JSON.parse(apiData.school_id)?.value;
      apiData.gender = JSON.parse(apiData.gender)?.value;
      await sendInvite(apiData).unwrap();
      modalRef.current.show();
    } catch (e) {
      console.log('Error', e);
      Toast.error(getMessage(e));
    }
  };

  const onSelectItem = (form, item, dropDownFor) => {
    let key =
      dropDownFor === 'Schools'
        ? 'school_id'
        : dropDownFor === 'Gender'
        ? 'gender'
        : 'class_grade_id';
    form.handleChange(key)(JSON.stringify(item));
  };
  const onPressOk = () => {
    modalRef.current.hide();
    navigation.goBack();
  };
  const validationSchema = yup.object().shape({
    first_name: yup.string().required('First Name is required'),
    last_name: yup.string().required('Last Name is required'),
    user_name: yup.string().required('User Name is required'),
    email: yup.string().email('Invalid Email').required('Email is required'),
    class_grade_id: yup.string().required('Class Grade is required'),
    school_id: yup.string().required('School Name is required'),
    gender: yup.string().required('Gender is required'),
    dob: yup.string().required('Date of Birth is required'),
  });

  const initialValues = {
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
    class_grade_id: '',
    school_id: '',
    gender: '',
    dob: '',
  };

  return {
    functions: {
      onSubmitFirstName,
      onSubmitLastName,
      onSubmitUserName,
      onPressSendInvite,
      onPressGender,
      onPressSchool,
      onPressGrade,
      onSelectItem,
      closeModal,
      onSelectDate,
      onPressOk,
    },
    states: {
      schools:
        general?.schools?.length > 0
          ? general?.schools?.map(v => ({name: v?.name, value: v?.id}))
          : [],
      classes:
        general?.classes?.length > 0
          ? general?.classes?.map(v => ({name: v?.name, value: v?.id}))
          : [],
      gender: [
        {name: 'Male', value: 'male'},
        {name: 'Female', value: 'female'},
      ],
      validationSchema,
      initialValues,
      loading: isLoading,
      showDropDown,
      dropDownFor,
    },
    refs: {
      lastNameRef,
      userNameRef,
      emailRef,
      schoolNameRef,
      modalRef,
    },
  };
};

export default useInviteStudentModalView;
