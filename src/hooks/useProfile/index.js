import {useDispatch} from 'react-redux';
import {
  getMessage,
  handleResponse,
  jsonToFormdata,
  performNetworkRequest,
  Toast,
} from '../../api/APIHelpers';
import {base_url, endpoints} from '../../api/configs';
import {GetProfile, GetStudentProfile} from '../../state/profile';
import {validateEmptyInputs} from '../../utils/helperFunctions';

const useProfile = () => {
  const dispatch = useDispatch();
  const createProfile = async data => {
    try {
      let apiData = validateEmptyInputs(data);
      if (!apiData?.first_name?.match(/^[a-z ,.'-]+$/i)) {
        throw new Error('Please Enter A Valid First Name');
      }
      if (!apiData?.last_name?.match(/^[a-z ,.'-]+$/i)) {
        throw new Error('Please Enter A Valid Last Name');
      }
      if (apiData?.city?.length < 5) {
        throw new Error('City Should be atleast 5 Characters longs');
      }
      if (apiData?.state?.length < 5) {
        throw new Error('State Should be atleast 5 Characters longs');
      }
      let headers = {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data',
        redirect: 'follow',
        Authorization: `Bearer ${apiData?.authToken}`,
      };
      let configs = {
        method: 'POST',
        headers: headers,
        body: jsonToFormdata(apiData),
      };
      const networkResult = await performNetworkRequest(
        base_url + endpoints.profile.createProfile,
        configs,
      );
      const result = await handleResponse(networkResult);
      return result;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };

  const getProfile = async () => {
    try {
      let res = await dispatch(GetProfile()).unwrap();
      return res;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  const getStudentProfile = async id => {
    try {
      let res = await dispatch(GetStudentProfile(id)).unwrap();
      return res?.data;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  return {
    getProfile,
    createProfile,
    getStudentProfile,
  };
};

export default useProfile;
