import {useDispatch, useSelector} from 'react-redux';
import {getMessage, Toast} from '../../api/APIHelpers';
import {AuthenticateTeacher, setToken, setUser, Logout} from '../../state/auth';
import {validateEmptyInputs} from '../../utils/helperFunctions';
const useAuth = () => {
  const {user, token} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const authenticateTeacher = async data => {
    try {
      let apiData = validateEmptyInputs(data);
      const res = await dispatch(AuthenticateTeacher(apiData)).unwrap();

      dispatch(setUser(res?.data));
      dispatch(setToken(res?.token));
      return res;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };

  const logoutUser = async () => {
    try {
      const res = await dispatch(Logout()).unwrap();

      dispatch(setUser(null));
      dispatch(setToken(null));
      return res;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  return {
    user,
    token,
    logoutUser,
    authenticateTeacher,
  };
};
export default useAuth;
