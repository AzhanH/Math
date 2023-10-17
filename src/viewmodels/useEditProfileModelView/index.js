import useAuth from '../../hooks/useAuth';
import {useCallback, useState} from 'react';
import {useRef} from 'react';
import {Toast, getMessage} from '../../api/APIHelpers';
import {useDispatch, useSelector} from 'react-redux';
import {GetCityViaState, GetStateViaCountry} from '../../state/general';
import moment from 'moment/moment';
import {
  GetProfile,
  GetStudentProfile,
  UpdateProfile,
  UpdateStudentProfile,
} from '../../state/profile';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const useEditProfileModelView = ({route}) => {
  const id = route?.params?.id;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [roleId, setRoleId] = useState(null);
  const {general} = useSelector(state => state.general);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const loadData = async () => {
    try {
      setGetLoading(true);
      const res = await dispatch(
        id ? GetStudentProfile(id) : GetProfile(),
      ).unwrap();
      setterFunction(res?.data);
      return res;
    } catch (e) {
      Toast.error(getMessage(e));
      console.log('Error', e);
    } finally {
      setGetLoading(false);
    }
  };
  const modalRef = useRef(null);
  const lastNameRef = useRef(null);
  const userNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const setterFunction = data => {
    setFirstName(data?.first_name);
    setLastName(data?.last_name);
    setUserName(data?.user_name);
    setPhone(data?.phone_number);
    setEmail(data?.email);
    setState({id: data?.state?.id, name: data?.state?.name});
    setClassGrade({id: data?.class_grade?.id, name: data?.class_grade?.name});
    setDob(data?.date_of_birth);
    setGender(data?.gender);
    setZipCode(data?.zip_code);
    setCountry({id: data?.country?.id, name: data?.country?.name});
    setSchool({
      id: data?.school?.id,
      name: data?.school?.name,
    });
    setCity({
      id: data?.city?.id,
      name: data?.city?.name,
    });
    setRoleId(data?.role_id);
  };

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [dob, setDob] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dropDownFor, setDropDownFor] = useState(null);
  const [classGrade, setClassGrade] = useState(null);
  const [country, setCountry] = useState(null);
  const [school, setSchool] = useState(null);
  const [city, setCity] = useState(null);
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [gender, setGender] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [anotherSchool, setAnotherSchool] = useState('');
  const [updateLoading, setUpdateLoading] = useState(false);
  const [getLoading, setGetLoading] = useState(false);

  const onPressValuePicker = async type => {
    try {
      if (type !== 'State' && type !== 'City') {
        setShowDropDown(true);
      }
      if (type === 'State' && !country?.name) {
        throw new Error('Please Select Country First');
      }
      if (type === 'City' && !state?.name) {
        throw new Error('Please Select State First');
      }
      if (type === 'State') {
        setLoading(true);
        const res = await dispatch(
          GetStateViaCountry({
            country_id: country?.id,
          }),
        ).unwrap();
        setAllStates(res?.data);
        setShowDropDown(true);
      }

      if (type === 'City') {
        setLoading(true);
        const res = await dispatch(
          GetCityViaState({
            state_id: state?.id,
          }),
        ).unwrap();
        setAllCities(res?.data);
        setShowDropDown(true);
      }
      setDropDownFor(type);
    } catch (e) {
      setAllStates([]);
      Toast.error(getMessage(e));
    } finally {
      setLoading(false);
    }
  };

  const onChangeFirstName = text => setFirstName(text);
  const onChangeLastName = text => setLastName(text);
  const onChangeUserName = text => setUserName(text);
  const onChangePhone = text => setPhone(text);
  const onChangeZip = text => setZipCode(text);
  const onChangeEmail = text => setEmail(text);
  const onChangeAnotherSchool = text => setAnotherSchool(text);

  const onSubmitFirstName = () => lastNameRef.current.focus();

  const onPressConfirmDate = date => {
    setDob(moment(date).format('YYYY-MM-DD'));
  };

  const onSubmitLastName = () => {
    if (roleId == 4) {
      userNameRef.current.focus();
    } else {
      phoneRef.current.focus();
    }
  };

  const onSubmitUserName = () => phoneRef.current.focus();

  const onPressDropDownItem = item => {
    let valueObject = {name: item?.name, id: item?.value};
    if (dropDownFor === 'Country') {
      setCountry(valueObject);
    }
    if (dropDownFor === 'State') {
      setState(valueObject);
    }
    if (dropDownFor === 'City') {
      setCity(valueObject);
    }
    if (dropDownFor === 'Schools') {
      setSchool(valueObject);
    }
    if (dropDownFor == 'Grade') {
      setClassGrade(valueObject);
    }
    if (dropDownFor === 'Gender') {
      setGender(item?.value);
    }
    closeDropDown();
  };

  const closeDropDown = () => setShowDropDown(false);

  const onPressUpdate = async () => {
    try {
      setUpdateLoading(true);
      let apiData = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
        zip_code: zipCode,
        gender,
        date_of_birth: dob,
        country_id: country?.id,
        state_id: state?.id,
        city_id: city?.id,
        class_grade_id: classGrade?.id,
        school_id: school?.id,
        school_name: anotherSchool,
      };
      if (id) {
        apiData = {...apiData, id};
        await dispatch(UpdateStudentProfile(apiData)).unwrap();
      } else {
        await dispatch(UpdateProfile(apiData)).unwrap();
      }
      showSuccessModal();
    } catch (e) {
      Toast.error(getMessage(e));
    } finally {
      setUpdateLoading(false);
    }
  };

  const showSuccessModal = () => {
    modalRef.current.show();
  };

  const onPressOk = () => navigation.goBack();

  return {
    functions: {
      onChangeFirstName,
      onChangeLastName,
      onChangeUserName,
      onChangePhone,
      onChangeEmail,
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
      showSuccessModal,
      onPressOk,
    },
    states: {
      getLoading,
      email,
      classGrade,
      school,
      gender,
      firstName,
      lastName,
      userName,
      phone,
      dob,
      zipCode,
      country,
      state,
      loading,
      city,
      updateLoading,
      anotherSchool,
      isStudent: roleId == 4,
      dropDownValue:
        dropDownFor === 'Country'
          ? country?.id
          : dropDownFor === 'State'
          ? state?.id
          : dropDownFor === 'City'
          ? city?.id
          : dropDownFor === 'Schools'
          ? school?.id
          : dropDownFor === 'Grade'
          ? classGrade?.id
          : dropDownFor === 'Gender'
          ? gender
          : null,
      dropDownList:
        dropDownFor === 'Country'
          ? general?.countries?.map(v => ({name: v?.name, value: v?.id}))
          : dropDownFor === 'State'
          ? allStates?.length > 0
            ? allStates?.map(v => ({name: v?.name, value: v?.id}))
            : []
          : dropDownFor === 'City'
          ? allCities?.length > 0
            ? allCities?.map(v => ({name: v?.name, value: v?.id}))
            : []
          : dropDownFor == 'Grade'
          ? general?.classes?.length > 0
            ? general?.classes?.map(v => ({name: v?.name, value: v?.id}))
            : []
          : dropDownFor === 'Schools'
          ? general?.schools?.length > 0
            ? general?.schools?.map(v => ({name: v?.name, value: v?.id}))
            : []
          : dropDownFor === 'Gender'
          ? [
              {name: 'Male', value: 'male'},
              {name: 'Female', value: 'female'},
            ]
          : [],
      dropDownFor,
      showDropDown,
    },
    refs: {
      modalRef,
      lastNameRef,
      userNameRef,
      phoneRef,
      emailRef,
    },
  };
};
export default useEditProfileModelView;
