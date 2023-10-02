import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/theme';
import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {GetAllRegisteredStudents} from '../../state/teacher';

const useRegisteredStudentsModelView = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);
  const [page, setPage] = useState(1);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      loadData(1);
    }, []),
  );

  const loadData = async (page = 1) => {
    try {
      setLoading(true);
      const res = await dispatch(GetAllRegisteredStudents({page})).unwrap();
      setLastPage(res?.lastPage);
      if (page > 1 && res?.lastPage <= page) {
        setData([...data, ...res?.data]);
      } else {
        setData(res?.data);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('Error', e);
    }
  };
  const onEndReached = () => {
    if (page < lastPage && !loading) {
      loadData(page + 1);
      setPage(page + 1);
    }
  };
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
      loadData,
      onEndReached,
    },
    states: {
      loading,
      data,
      backgroundColors,
    },
  };
};

export default useRegisteredStudentsModelView;
