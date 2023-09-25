import {useNavigation} from '@react-navigation/native';
import {useGetProfileQuery} from '../../api/profileApis';
const useProfileModelView = () => {
  const navigation = useNavigation();
  const {data, isLoading} = useGetProfileQuery();
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
      isLoading,
      dataArray,
    },
    functions: {
      onPressChangePassword,
      onPressEditProfile,
    },
  };
};
export default useProfileModelView;
