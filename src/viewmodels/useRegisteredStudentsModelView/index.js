import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/theme';
import {useCallback, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {GetAllRegisteredStudents} from '../../state/teacher';

const useRegisteredStudentsModelView = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      loadData(1);
    }, []),
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search !== null) {
        loadData(1);
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const loadData = async (page = 1) => {
    try {
      setLoading(true);
      let apiData = {
        page,
      };
      if (search) {
        apiData = {...apiData, search};
      }
      const res = await dispatch(GetAllRegisteredStudents(apiData)).unwrap();
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

  const onChangeSearch = text => setSearch(text);
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
    navigation.navigate('Profile', {id});
  };
  return {
    functions: {
      onPressViewDetail,
      loadData,
      onEndReached,
      onChangeSearch,
    },
    states: {
      loading,
      data,
      backgroundColors,
    },
  };
};

export default useRegisteredStudentsModelView;
