import useAuth from '../../hooks/useAuth';
import {useState} from 'react';
import {useRef} from 'react';
import useGeneral from '../../hooks/useGeneral';

const useEditProfileModelView = () => {
  const {user} = useAuth();
  const {general} = useGeneral();

  const modalRef = useRef(null);
  const lastNameRef = useRef(null);
  const userNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const anotherRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);

  const [firstName, setFirstName] = useState(user?.first_name);
  const [lastName, setLastName] = useState(user?.last_name);
  const [userName, setUserName] = useState(user?.user_name);
  const [phone, setPhone] = useState(user?.phone_no);
  const [email, setEmail] = useState(user?.email);
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDownFor, setDropDownFor] = useState(null);
  const [classGrade, setClassGrade] = useState({
    id: user?.class_grade?.id,
    name: user?.class_grade?.name,
  });
  const [country, setCountry] = useState({
    id: user?.country?.id,
    name: user?.country?.name,
  });
  const [school, setSchool] = useState({
    id: user?.school?.id,
    name: user?.school?.name,
  });
  const [city, setCity] = useState({
    id: user?.city?.id,
    name: user?.city?.name,
  });
  const [state, setState] = useState({
    id: user?.state?.id,
    name: user?.state?.name,
  });
  const [anotherSchool, setAnotherSchool] = useState(null);
  const [gradeModal, setGradeModal] = useState(false);
  const [schoolModal, setSchoolModal] = useState(false);

  const onPressValuePicker = type => {
    if (type !== 'State' && type !== 'City') {
      setShowDropDown(true);
    }
    setDropDownFor(type);
  };

  const onChangeFirstName = text => setFirstName(text);
  const onChangeLastName = text => setLastName(text);
  const onChangeUserName = text => setUserName(text);
  const onChangePhone = text => setPhone(text);
  const onChangeEmail = text => setEmail(text);

  const closeDropDown = () => setShowDropDown(false);

  return {
    functions: {
      onChangeFirstName,
      onChangeLastName,
      onChangeUserName,
      onChangePhone,
      onChangeEmail,
      onPressValuePicker,
      closeDropDown,
    },
    states: {
      email,
      classGrade,
      school,
      firstName,
      lastName,
      userName,
      phone,
      country,
      city,
      dropDownList:
        dropDownFor === 'Country'
          ? general?.countries?.map(v => ({name: v?.name, value: v?.id}))
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
      anotherRef,
      cityRef,
      stateRef,
    },
  };
};
export default useEditProfileModelView;
