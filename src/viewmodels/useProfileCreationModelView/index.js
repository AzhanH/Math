import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {GetCityViaState, GetStateViaCountry} from '../../state/general';
import {
  Toast,
  getMessage,
  handleResponse,
  jsonToFormdata,
  performNetworkRequest,
} from '../../api/APIHelpers';
import moment from 'moment/moment';
import {base_url, endpoints} from '../../api/configs';
import {useNavigation} from '@react-navigation/native';

const useProfileCreationModelView = ({route}) => {
  const token = route?.params?.token;
  const navigation = useNavigation();
  const email = route?.params?.email;
  const {general} = useSelector(state => state.general);
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDownFor, setDropDownFor] = useState(null);

  const [allStates, setAllStates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allCities, setAllCities] = useState([]);
  const [createLoading, setCreateLoading] = useState(false);

  const validationSchema = yup.object().shape({
    first_name: yup.string().required('First Name is required').trim(),
    last_name: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid Email').required('Email is required'),
    class_grade_id: yup.string().required('Class Grade is Required'),
    country_id: yup.string().required('Country is Required'),
    state_id: yup.string().required('State is Required'),
    city_id: yup.string().required('City is Required'),
    school_name: yup.string().optional(),
    school_id: yup.string().required('School is Required'),
    zip_code: yup.string().required('Zip Code is required'),
    gender: yup.string().required('Gender is required'),
    date_of_birth: yup.string().required('Date of Birth is required'),
  });
  const initialValues = {
    first_name: '',
    last_name: '',
    email: email,
    class_grade_id: '',
    school_id: '',
    country_id: '',
    state_id: '',
    city_id: '',
    gender: '',
    school_name: '',
    zip_code: '',
    gender: '',
    date_of_birth: '',
  };

  const onPressDropDown = async (type, obj) => {
    if (obj && typeof obj === 'string') {
      obj = JSON.parse(obj);
    }
    try {
      if (type !== 'States' && type !== 'Cities') {
        setShowDropDown(true);
      }
      if (type === 'States' && !obj?.name) {
        throw new Error('Please Select Country First');
      }
      if (type === 'Cities' && !obj?.name) {
        throw new Error('Please Select State First');
      }
      if (type === 'States') {
        setLoading(true);
        const res = await dispatch(
          GetStateViaCountry({
            country_id: obj?.value,
          }),
        ).unwrap();
        setAllStates(res?.data);
        setShowDropDown(true);
      }

      if (type === 'Cities') {
        setLoading(true);
        const res = await dispatch(
          GetCityViaState({
            state_id: obj?.value,
          }),
        ).unwrap();
        setAllCities(res?.data);
        setShowDropDown(true);
      }
      setDropDownFor(type);
    } catch (e) {
      setAllStates([]);
      setAllCities([]);
      Toast.error(getMessage(e));
    } finally {
      setLoading(false);
    }
  };

  const returnFieldName = () => {
    if (dropDownFor === 'Countries') {
      return 'country_id';
    }
    if (dropDownFor === 'Cities') {
      return 'city_id';
    }
    if (dropDownFor === 'States') {
      return 'state_id';
    }
    if (dropDownFor === 'Grades') {
      return 'class_grade_id';
    }
    if (dropDownFor === 'Schools') {
      return 'school_id';
    }
    if (dropDownFor === 'Genders') {
      return 'gender';
    }
  };

  const onPressDropDownItem = (item, form) => {
    const fieldName = returnFieldName();
    form.handleChange(fieldName)(JSON.stringify(item));
    closeDropDown();
  };
  const closeDropDown = () => setShowDropDown(false);

  const onPressConfirmDate = (date, form) => {
    date = moment(date).format('YYYY-MM-DD');
    form.handleChange('date_of_birth')(date);
  };

  const onPressCreate = async data => {
    try {
      setCreateLoading(true);
      let apiData = {...data};
      apiData.country_id = JSON.parse(apiData.country_id)?.value;
      apiData.state_id = JSON.parse(apiData.state_id)?.value;
      apiData.city_id = JSON.parse(apiData.city_id)?.value;
      apiData.class_grade_id = JSON.parse(apiData.class_grade_id)?.value;
      apiData.school_id = JSON.parse(apiData.school_id)?.value;
      apiData.gender = JSON.parse(apiData.gender)?.value;
      let headers = {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data',
        redirect: 'follow',
        Authorization: `Bearer ${token}`,
      };
      let configs = {
        method: 'POST',
        headers: headers,
        body: jsonToFormdata(apiData),
      };
      const networkResult = await performNetworkRequest(
        base_url + endpoints.profile.updateProfile,
        configs,
      );
      await handleResponse(networkResult);
      goToPlans();
    } catch (e) {
      console.log('Error', e);
    } finally {
      setCreateLoading(false);
    }
  };

  const goToPlans = () => navigation.replace('SubscriptionPlans', {token});

  return {
    functions: {
      onPressDropDown,
      closeDropDown,
      onPressConfirmDate,
      onPressDropDownItem,
      onPressCreate,
      goToPlans,
    },
    states: {
      loading,
      createLoading,
      fieldName: returnFieldName(),
      dropDownArray:
        dropDownFor === 'Countries'
          ? general?.countries?.map(v => ({name: v?.name, value: v?.id}))
          : dropDownFor === 'States'
          ? allStates?.length > 0
            ? allStates?.map(v => ({name: v?.name, value: v?.id}))
            : []
          : dropDownFor === 'Cities'
          ? allCities?.length > 0
            ? allCities?.map(v => ({name: v?.name, value: v?.id}))
            : []
          : dropDownFor == 'Grades'
          ? general?.classes?.length > 0
            ? general?.classes?.map(v => ({name: v?.name, value: v?.id}))
            : []
          : dropDownFor === 'Schools'
          ? general?.schools?.length > 0
            ? general?.schools?.map(v => ({name: v?.name, value: v?.id}))
            : []
          : dropDownFor === 'Genders'
          ? [
              {name: 'Male', value: 'male'},
              {name: 'Female', value: 'female'},
            ]
          : [],
      showDropDown,
      dropDownFor,
      validationSchema,
      initialValues,
    },
    refs: {},
  };
};

export default useProfileCreationModelView;
