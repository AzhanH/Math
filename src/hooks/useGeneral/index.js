import {useDispatch} from 'react-redux';
import {getMessage, Toast} from '../../api/APIHelpers';
import {ContactUs, GetPrivacyPolicy, GetTerms} from '../../state/general';
import {validateEmptyInputs} from '../../utils/helperFunctions';

const useGeneral = () => {
  const dispatch = useDispatch();
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
  return {
    getTerms,
    contactUs,
    getPrivacyPolicy,
  };
};
export default useGeneral;
