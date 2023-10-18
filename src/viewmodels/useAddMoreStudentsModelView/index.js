import {useFocusEffect} from '@react-navigation/native';
import {colors} from '../../utils/theme';
import {useCallback, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {GetAllRegisteredStudents} from '../../state/teacher';
import {Toast, getMessage} from '../../api/APIHelpers';
import {AddStudentsToTeam} from '../../state/teams';

const useAddMoreStudentsModelView = ({route}) => {
  const players = route?.params?.players;
  const teamId = route?.params?.teamId;
  const dispatch = useDispatch();
  const [count, setCount] = useState(players?.length);
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
        user_id: item?.id,
        team_id: teamId,
      };
      if (count < 4) {
        setSelectedIndex(index);
        setAddLoading(true);
        await dispatch(AddStudentsToTeam(apiData)).unwrap();
        setCount(count + 1);
        setAddLoading(false);
        setSelectedIndex(null);
        let temp = [...data];
        temp[index].added = true;
        setData(temp);
      } else {
        throw new Error('Only 4 Players can be added');
      }
    } catch (e) {
      setAddLoading(false);
      setSelectedIndex(null);
      Toast.error(getMessage(e));
    }
  };
  const onChangeSearch = text => setSearch(text);

  return {
    functions: {
      loadData,
      onEndReached,
      onPressAdd,
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

export default useAddMoreStudentsModelView;
