import {useDispatch} from 'react-redux';
import {Toast, getMessage} from '../../api/APIHelpers';
import {GetAllTeachers} from '../../state/general';
import {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

const useInviteParentModelView = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);
  const loadData = async (page = 1) => {
    try {
      setLoading(true);
      const res = await dispatch(GetAllTeachers({page})).unwrap();
      setLastPage(res?.lastPage);
      if (page > 1 && res?.lastPage <= page) {
        setData([...data, ...res?.data]);
      } else {
        setData(res?.data);
      }
      setLoading(false);
    } catch (e) {
      Toast.error(getMessage(e));
      setLoading(false);
      console.log('Error', e);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadData(1);
    }, []),
  );
  const onEndReached = () => {
    if (page < lastPage && !loading) {
      loadData(page + 1);
      setPage(page + 1);
    }
  };
  const backgroundColor = {
    0: 'darkOrange',
    1: 'yellow',
    2: 'green',
    3: 'darkBlue',
  };
  return {
    functions: {
      onEndReached,
      loadData,
    },
    states: {data, loading, backgroundColor},
  };
};

export default useInviteParentModelView;
