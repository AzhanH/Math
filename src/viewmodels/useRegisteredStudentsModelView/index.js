import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useGetMyStudentsQuery} from '../../api/teacherApis';
import {colors} from '../../utils/theme';
import {useCallback} from 'react';

const useRegisteredStudentsModelView = () => {
  const navigation = useNavigation();
  const {isLoading, data, refetch} = useGetMyStudentsQuery();

  useFocusEffect(
    useCallback(() => {
      console.log('CHAKA', isLoading);
      refetch();
    }, []),
  );
  const backgroundColors = {
    0: colors.darkPeach,
    1: colors.yellow,
    2: colors.green,
    3: colors.sky,
  };

  const onPressViewDetail = id => {
    navigation.navigate('ProfileStack', {
      screen: 'Profile',
      params: {id},
    });
  };

  return {
    functions: {
      onPressViewDetail,
    },
    states: {
      isLoading,
      data,
      backgroundColors,
    },
  };
};

export default useRegisteredStudentsModelView;
