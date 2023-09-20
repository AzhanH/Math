import {useDispatch, useSelector} from 'react-redux';
import {getMessage, Toast} from '../../api/APIHelpers';
import {
  ForgotPassword,
  AuthenticateTeacher,
  setToken,
  setUser,
  Logout,
  VerifyOtp,
  ResetPassword,
  RegisterUser,
} from '../../state/auth';
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

  const forgotPassword = async data => {
    try {
      let apiData = validateEmptyInputs(data);
      let res = await dispatch(ForgotPassword(apiData)).unwrap();
      return res?.message;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };

  const verifyOtp = async data => {
    try {
      let apiData = validateEmptyInputs(data);
      let res = await dispatch(VerifyOtp(apiData)).unwrap();
      return res?.message;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };

  const resetPassword = async data => {
    try {
      let apiData = validateEmptyInputs(data);
      if (apiData?.password !== apiData?.password_confirmation) {
        throw new Error('Passowrd & Confirm Password Should be Same');
      }
      let res = await dispatch(ResetPassword(apiData)).unwrap();
      return res?.message;
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

  const registerUser = async data => {
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
      if (apiData?.password !== apiData?.password_confirmation) {
        throw new Error('Passowrd & Confirm Password Should be Same');
      }
      const res = await dispatch(RegisterUser(apiData)).unwrap();
      return res;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  return {
    verifyOtp,
    forgotPassword,
    resetPassword,
    user,
    token,
    logoutUser,
    authenticateTeacher,
    registerUser,
  };
};
export default useAuth;
