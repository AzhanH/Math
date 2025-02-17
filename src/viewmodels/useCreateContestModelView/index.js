import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {GetAllContests} from '../../state/contest';

const useCreateContestModelView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);

  useFocusEffect(
    useCallback(() => {
      loadData(1);
      return () => {
        setPage(1);
        setLastPage(null);
      };
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
      const res = await dispatch(GetAllContests(apiData)).unwrap();
      setLastPage(res?.last_page);
      if (page > 1 && res?.last_page <= page) {
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

  const onPressContestDetail = item =>
    navigation.navigate('ContestDetail', {
      id: item?.id,
      isInvited: item?.is_invited,
    });

  const onPressSendInvite = item =>
    navigation.navigate('InviteParents', {id: item?.id});

  const onPressCreateContest = () =>
    navigation.navigate('CreateAndEditContest');

  const onEndReached = () => {
    if (page < lastPage && !loading) {
      loadData(page + 1);
      setPage(page + 1);
    }
  };

  const onChangeSearch = text => setSearch(text);

  const backgroundColor = {
    0: 'orange',
    1: 'red',
    2: 'blue',
    3: 'green',
  };

  return {
    functions: {
      loadData,
      onEndReached,
      onPressSendInvite,
      onPressContestDetail,
      onPressCreateContest,
      onChangeSearch,
    },
    states: {
      page,
      loading,
      backgroundColor,
      data,
    },
  };
};

export default useCreateContestModelView;
