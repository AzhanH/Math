import {useDispatch} from 'react-redux';
import {getMessage, Toast} from '../../api/APIHelpers';
import {CreateContest, GetAllContests} from '../../state/contest';
import {validateEmptyInputs} from '../../utils/helperFunctions';

const useContest = () => {
  const dispatch = useDispatch();

  const getAllContests = async () => {
    try {
      let res = await dispatch(GetAllContests()).unwrap();
      return res?.data;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  const createContest = async data => {
    try {
      let apiData = validateEmptyInputs(data);
      let res = await dispatch(CreateContest(apiData)).unwrap();
      return res;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  return {
    getAllContests,
    createContest,
  };
};
export default useContest;
