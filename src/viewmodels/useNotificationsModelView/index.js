import {useState} from 'react';
import {Toast, getMessage} from '../../api/APIHelpers';
import {
  GetAllNotifications,
  MarkNotificationAsRead,
} from '../../state/notifications';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

const useNotificaitonsModelView = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [markLoading, setMarkLoading] = useState(false);
  const loadData = async (page = 1) => {
    try {
      setLoading(true);
      const res = await dispatch(GetAllNotifications({page})).unwrap();
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
      Toast.error(getMessage(e));
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadData(1);

      return () => {
        setPage(1);
        setLastPage(null);
      };
    }, []),
  );

  const readNotification = async id => {
    try {
      setMarkLoading(true);
      setSelectedId(id);
      await dispatch(MarkNotificationAsRead(id)).unwrap();
      loadData(1);
    } catch (e) {
      setSelectedId(null);
      Toast.error(getMessage(e));
    } finally {
      setMarkLoading(false);
    }
  };
  const onEndReached = () => {
    if (page < lastPage && !loading) {
      loadData(page + 1);
      setPage(page + 1);
    }
  };

  return {
    functions: {
      loadData,
      onEndReached,
      readNotification,
    },
    states: {
      page,
      selectedId,
      markLoading,
      data,
      loading,
    },
  };
};

export default useNotificaitonsModelView;
