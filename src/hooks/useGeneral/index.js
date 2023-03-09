import {useDispatch} from 'react-redux';
import {getMessage, Toast} from '../../api/APIHelpers';
import {GetPrivacyPolicy, GetTerms} from '../../state/general';

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
  return {
    getTerms,
    getPrivacyPolicy,
  };
};
export default useGeneral;
