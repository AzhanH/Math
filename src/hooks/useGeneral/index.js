import {useDispatch, useSelector} from 'react-redux';
import {getMessage, Toast} from '../../api/APIHelpers';
import {
  ContactUs,
  GetAllStudents,
  GetAllTeachers,
  GetGeneralData,
  GetPrivacyPolicy,
  GetTerms,
  setGeneralData,
} from '../../state/general';
import {validateEmptyInputs} from '../../utils/helperFunctions';

const useGeneral = () => {
  const dispatch = useDispatch();
  const {general} = useSelector(state => state.general);
  const getPrivacyPolicy = async () => {
    try {
      const res = await dispatch(GetPrivacyPolicy()).unwrap();
      return res?.description;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  const getTerms = async () => {
    try {
      const res = await dispatch(GetTerms()).unwrap();
      return res?.description;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  const contactUs = async data => {
    try {
      let apiData = validateEmptyInputs(data);
      if (!apiData?.first_name?.match(/^[a-z ,.'-]+$/i)) {
        throw new Error('Please Enter A Valid First Name');
      }
      if (!apiData?.last_name?.match(/^[a-z ,.'-]+$/i)) {
        throw new Error('Please Enter A Valid Last Name');
      }
      if (apiData?.first_name?.length < 3) {
        throw new Error('First Name should contain minimum 3 characters');
      }
      if (apiData?.last_name?.length < 3) {
        throw new Error('Last Name should contain minimum 3 characters');
      }
      const res = await dispatch(ContactUs(apiData)).unwrap();
      return res;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };

  const getAllStudents = async () => {
    try {
      let res = await dispatch(GetAllStudents()).unwrap();
      return {
        perPage: res?.data?.per_page,
        students: res?.data?.data,
      };
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  const getAllTeachers = async () => {
    try {
      let res = await dispatch(GetAllTeachers()).unwrap();
      return res?.data;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };

  const getGeneralData = async () => {
    try {
      let res = await dispatch(GetGeneralData()).unwrap();
      dispatch(setGeneralData(res?.general));
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  return {
    getTerms,
    contactUs,
    getPrivacyPolicy,
    getAllTeachers,
    getAllStudents,
    getGeneralData,
    general,
  };
};
export default useGeneral;
