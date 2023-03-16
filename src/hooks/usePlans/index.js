import {useDispatch} from 'react-redux';
import {
  getMessage,
  handleResponse,
  jsonToFormdata,
  performNetworkRequest,
  Toast,
} from '../../api/APIHelpers';
import {base_url, endpoints} from '../../api/configs';
import {ReadPlans} from '../../state/plans';
import {validateEmptyInputs} from '../../utils/helperFunctions';

const usePlans = () => {
  const dispatch = useDispatch();
  const readPlans = async token => {
    try {
      let res = await dispatch(ReadPlans(token)).unwrap();
      return res?.data?.data;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  const subscribePackage = async data => {
    try {
      let apiData = validateEmptyInputs(data);
      if (!apiData?.holder_name?.match(/^[a-z ,.'-]+$/i)) {
        throw new Error('Please Enter A Valid CardHolder Name');
      }
      if (apiData?.holder_name?.length < 3) {
        throw new Error('CardHolder Name should contain minimum 3 characters');
      }
      if (apiData?.card_number?.length < 16) {
        throw new Error('CardNumber should contain 16 digits');
      }
      if (apiData?.cvv?.length < 3) {
        throw new Error('Cvv should be atleast 3 digits long');
      }
      if (apiData?.token) {
        let headers = {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'multipart/form-data',
          redirect: 'follow',
          Authorization: `Bearer ${apiData?.token} `,
        };
        let configs = {
          method: 'POST',
          headers: headers,
          body: jsonToFormdata(apiData),
        };
        const networkResult = await performNetworkRequest(
          base_url + endpoints.plans.subscribePlan(apiData?.planId),
          configs,
        );
        const result = await handleResponse(networkResult);
        return result;
      }
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  return {
    readPlans,
    subscribePackage,
  };
};
export default usePlans;
