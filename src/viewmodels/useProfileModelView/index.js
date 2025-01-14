import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {GetProfile, GetStudentProfile} from '../../state/profile';
import {Toast, getMessage} from '../../api/APIHelpers';
const useProfileModelView = ({route}) => {
  const id = route?.params?.id;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [id]),
  );
  const loadData = async () => {
    try {
      setLoading(true);
      const res = await dispatch(
        id ? GetStudentProfile(id) : GetProfile(),
      ).unwrap();
      setData(res?.data);
      setLoading(false);
      return res;
    } catch (e) {
      Toast.error(getMessage(e));
      setLoading(false);
      console.log('Error', e);
    }
  };

  const navigation = useNavigation();
  const dataArray = [
    {
      title: 'First Name:',
      value: data?.first_name,
    },
    {
      title: 'Last Name:',
      value: data?.last_name,
    },
    {
      title: 'Phone Number:',
      value: data?.phone_number,
    },
    {
      title: 'Email:',
      value: data?.email,
    },
    {
      title: 'Class Grade:',
      value: data?.class_grade?.name,
    },
    {
      title: 'DOB:',
      value: data?.date_of_birth,
    },
    {
      title: 'School Name:',
      value: data?.school?.name,
    },
    {
      title: 'City:',
      value: data?.city?.name,
    },
    {
      title: 'State:',
      value: data?.state?.name,
    },
    {
      title: 'Gender:',
      value: data?.gender,
    },
  ];

  const onPressChangePassword = () => navigation.navigate('ChangePassword');
  const onPressEditProfile = () => navigation.navigate('EditProfile', {id});
  return {
    states: {
      data,
      isStudent: id ? true : false,
      loading,
      dataArray,
    },
    functions: {
      onPressChangePassword,
      onPressEditProfile,
    },
  };
};
export default useProfileModelView;
