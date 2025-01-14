import {useFocusEffect} from '@react-navigation/native';
import {colors} from '../../utils/theme';
import {useCallback, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {GetAllRegisteredStudents} from '../../state/teacher';
import {Toast, getMessage} from '../../api/APIHelpers';
import {AddStudentsToClass} from '../../state/classes';

const useAddMoreStudentsToClassModeView = ({route}) => {
  const classId = route?.params?.id;
  const players = route?.params?.players;
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [addLoading, setAddLoading] = useState(false);
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
      const res = await dispatch(GetAllRegisteredStudents(apiData)).unwrap();
      setLastPage(res?.last_page);
      if (page > 1 && res?.last_page <= page) {
        const _data = returnUniquePlayers([...data, ...res?.data?.data]);
        setData(_data);
      } else {
        const _data = returnUniquePlayers(res?.data?.data);
        setData(_data);
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

  const onChangeSearch = text => setSearch(text);

  const backgroundColors = {
    0: colors.darkPeach,
    1: colors.yellow,
    2: colors.green,
    3: colors.sky,
  };

  const returnUniquePlayers = data => {
    let array = [];
    if (data?.length > 0 && players?.length > 0) {
      data?.forEach(element => {
        let isUnique = players?.every(
          _element => _element?.user_id !== element?.id,
        );
        if (isUnique) {
          array.push(element);
        }
      });
      return array;
    }
    return data;
  };

  const onPressAdd = async (index, item) => {
    try {
      let apiData = {
        class_id: classId,
        'user_ids[0]': item?.id,
      };
      setSelectedIndex(index);
      setAddLoading(true);
      await dispatch(AddStudentsToClass(apiData)).unwrap();
      setAddLoading(false);
      setSelectedIndex(null);
      let temp = [...data];
      temp[index].added = true;
      setData(temp);
    } catch (e) {
      setAddLoading(false);
      setSelectedIndex(null);
      Toast.error(getMessage(e));
    }
  };

  return {
    functions: {
      loadData,
      onEndReached,
      onPressAdd,
      page,
      onChangeSearch,
    },
    states: {
      page,
      selectedIndex,
      addLoading,
      loading,
      data: data,
      backgroundColors,
    },
  };
};

export default useAddMoreStudentsToClassModeView;
