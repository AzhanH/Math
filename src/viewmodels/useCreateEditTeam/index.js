import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {GetAllRegisteredStudents} from '../../state/teacher';
import {useCallback, useState} from 'react';
import {colors} from '../../utils/theme';
import {useDispatch} from 'react-redux';
import {useRef} from 'react';
import {Toast, getMessage} from '../../api/APIHelpers';
import {CreateTeam} from '../../state/teams';

const useCreateEditTeam = ({route}) => {
  const type = route?.params?.type;
  const teamTitle = route?.params?.teamTitle;
  const navigation = useNavigation();
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [players, setPlayers] = useState(route?.params?.players);
  const [loading, setLoading] = useState(false);
  const [addEditLoading, setAddEditLoading] = useState(false);
  const [deletedIds, setDeletedIds] = useState([]);
  const [lastPage, setLastPage] = useState(null);
  const [teamName, setTeamName] = useState(teamTitle ? teamTitle : null);
  const [page, setPage] = useState(1);

  useFocusEffect(
    useCallback(() => {
      if (!players) {
        loadData(1);
      }
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

  const onPressAdd = index => {
    let temp = {...data};
    temp.data[index].added = !temp?.data[index]?.added;
    setData(temp);
  };

  const onPressAddMore = () =>
    navigation.navigate('AddMoreStudents', {
      players,
    });

  const onPressRemove = index => {
    let temp = [...players];
    if (temp?.length > 1) {
      setDeletedIds([...deletedIds, temp[index].user.id]);
      temp.splice(index, 1);
      setPlayers(temp);
    } else {
      Toast.error('Cannot Delete All Players');
    }
  };

  const onChangeTeamName = text => setTeamName(text);

  const onPressCreateTeam = async () => {
    try {
      let apiData = {
        title: teamName,
      };
      let userIds = [];
      if (data?.data?.length > 0) {
        data?.data?.forEach(v => {
          if (v?.added) {
            userIds.push(v?.id);
          }
        });
      }
      userIds?.forEach((v, i) => {
        apiData[`user_ids[${i}]`] = v;
      });
      if (!userIds?.length > 0) {
        throw new Error('No Player is selected');
      }
      if (userIds?.length > 4) {
        throw new Error('Maximum 4 Players can be added');
      }
      if (!apiData.title) {
        throw new Error('Team Title is required');
      }
      setAddEditLoading(true);
      await dispatch(CreateTeam(apiData)).unwrap();
      setAddEditLoading(false);
      modalRef.current.show();
    } catch (e) {
      setAddEditLoading(false);
      Toast.error(getMessage(e));
    }
  };

  const onPressOk = () => {
    navigation.goBack();
  };

  const backgroundColors = {
    0: colors.darkPeach,
    1: colors.yellow,
    2: colors.green,
    3: colors.sky,
  };
  return {
    functions: {
      loadData,
      onChangeTeamName,
      onEndReached,
      onPressOk,
      onPressRemove,
      onPressAdd,
      onPressAddMore,
      onPressCreateTeam,
    },
    states: {
      teamName,
      type,
      players,
      loading,
      data,
      page,
      addEditLoading,
      backgroundColors,
      addEditLoading,
    },
    refs: {
      modalRef,
    },
  };
};

export default useCreateEditTeam;
