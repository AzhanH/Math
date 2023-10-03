import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {GetAllRegisteredStudents} from '../../state/teacher';
import {useCallback, useEffect, useState} from 'react';
import {colors} from '../../utils/theme';
import {useDispatch} from 'react-redux';
import {useRef} from 'react';
import {Toast, getMessage} from '../../api/APIHelpers';
import {CreateTeam, DeleteStudent, GetTeamDetail} from '../../state/teams';

const useCreateEditTeam = ({route}) => {
  const type = route?.params?.type;
  const teamTitle = route?.params?.teamTitle;
  const id = route?.params?.id;
  const navigation = useNavigation();
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addEditLoading, setAddEditLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [teamName, setTeamName] = useState(teamTitle ? teamTitle : null);
  const [selectedDeleteIndex, setSelectedDeleteIndex] = useState(null);
  const [page, setPage] = useState(1);

  useFocusEffect(
    useCallback(() => {
      if (id) {
        loadTeamDetails();
      } else {
        loadData();
      }
    }, [id]),
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

  const loadTeamDetails = async () => {
    try {
      setLoading(true);
      const res = await dispatch(GetTeamDetail(id)).unwrap();
      setData(res?.students);
      setLoading(false);
    } catch (e) {
      Toast.error(getMessage(e));
      setLoading(false);
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
      teamId: id,
      players: data,
    });

  const onPressRemove = async (item, index) => {
    try {
      if (data?.length > 1) {
        setDeleteLoading(true);
        setSelectedDeleteIndex(index);
        await dispatch(DeleteStudent(item?.id)).unwrap();
        setDeleteLoading(false);
        setSelectedDeleteIndex(null);
        loadTeamDetails();
      } else {
        Toast.error('Cannot Delete All Players');
      }
    } catch (e) {
      setSelectedDeleteIndex(null);
      setDeleteLoading(false);
      Toast.error(getMessage(e));
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
      loading,
      data: type === 'Edit' ? data : data?.data,
      page,
      addEditLoading,
      backgroundColors,
      addEditLoading,
      deleteLoading,
      selectedDeleteIndex,
    },
    refs: {
      modalRef,
    },
  };
};

export default useCreateEditTeam;
