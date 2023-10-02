import {useState} from 'react';
import images from '../../assets/images';
import {colors} from '../../utils/theme';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {GetAllTeams} from '../../state/teams';

const useMyTeamModelView = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

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

  const loadData = async page => {
    try {
      setLoading(true);
      let res = await dispatch(GetAllTeams({page})).unwrap();
      setLastPage(res?.lastPage);
      if (page > 1 && res?.lastPage <= page) {
        setData([...data, ...res?.data]);
      } else {
        setData(res?.data);
      }
      setLoading(false);
    } catch (e) {
      setData([]);
      setLoading(false);
      console.log('Error', e);
    }
  };

  const onRefresh = () => {
    setPage(1);
    loadData(1);
  };
  const onPressCreateTeam = () =>
    navigation.navigate('CreateAndEditTeam', {type: 'Add'});

  const onPressTeamDetail = item =>
    navigation.navigate('TeamDetail', {id: item?.id});

  const backgroundColor = {
    0: colors.darkPeach,
    1: colors.yellow,
    2: colors.green,
  };

  const avatarImage = {
    0: images.childImage1,
    1: images.childImage2,
    2: images.childImage3,
  };

  return {
    functions: {
      loadData,
      onEndReached,
      onPressCreateTeam,
      onPressTeamDetail,
      onRefresh,
    },
    states: {
      data,
      page,
      loading,
      backgroundColor,
      avatarImage,
    },
  };
};
export default useMyTeamModelView;
