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
      value: data?.class_grade,
    },
    {
      title: 'DOB:',
      value: data?.date_of_birth,
    },
    {
      title: 'School Name:',
      value: data?.school,
    },
    {
      title: 'City:',
      value: data?.city,
    },
    {
      title: 'State:',
      value: data?.state,
    },
    {
      title: 'Gender:',
      value: data?.gender,
    },
  ];

  const onPressChangePassword = () => navigation.navigate('ChangePassword');
  const onPressEditProfile = () => navigation.navigate('EditProfile');
  return {
    states: {
      data,
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
