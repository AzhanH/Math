import {useState} from 'react';
import {Toast, getMessage} from '../../api/APIHelpers';
import {useDispatch} from 'react-redux';
import {GetTeamDetail} from '../../state/teams';
import {useRef} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {colors} from '../../utils/theme';

const useTeamDetailView = ({route}) => {
  const id = route?.params?.id;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [id]),
  );

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await dispatch(GetTeamDetail(id)).unwrap();
      setData(res);
      setLoading(false);
    } catch (e) {
      Toast.error(getMessage(e));
      setLoading(false);
    }
  };

  const onPressViewDetail = item => {
    navigation.navigate('Profile', {id: item?.user?.id});
  };

  const onPressEdit = () => {
    navigation.navigate('CreateAndEditTeam', {
      type: 'Edit',
      teamTitle: data?.title,
      players: data?.students,
    });
  };

  const backgroundColor = {
    0: colors.darkPeach,
    1: colors.yellow,
    2: colors.green,
  };

  return {
    functions: {
      loadData,
      onPressEdit,
      onPressViewDetail,
    },
    states: {
      loading,
      data,
      backgroundColor,
    },
    ref: {
      modalRef,
    },
  };
};

export default useTeamDetailView;
