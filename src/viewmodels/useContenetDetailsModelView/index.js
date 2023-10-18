import {useDispatch} from 'react-redux';
import {Toast, getMessage} from '../../api/APIHelpers';
import {GetContestDetail, UpdateContestInviteStatus} from '../../state/contest';
import {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const useContestDetailsModelView = ({route}) => {
  const navigation = useNavigation();
  const id = route?.params?.id;
  const isInvited = route?.params?.isInvited;
  const dispatch = useDispatch();

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inviteStatusLoading, setInviteStatusLoading] = useState(false);
  const loadData = async () => {
    try {
      setLoading(true);
      const res = await dispatch(GetContestDetail(id)).unwrap();
      setLoading(false);
      setDetails(res);
    } catch (e) {
      setLoading(false);
      Toast.error(getMessage(e));
    }
  };

  const options = [
    {label: 'Level of play:', value: details?.competition_level?.name},
    {label: 'Mode:', value: details?.mode?.name},
    {label: 'Grade:', value: details?.class_grade?.name},
    {label: 'State:', value: details?.state?.name},
    {label: 'Country:', value: details?.country?.name},
  ];

  const updateContestInviteStatus = async status => {
    try {
      setInviteStatusLoading(true);
      const apiData = {
        contest_id: id,
        status,
      };
      const res = await dispatch(UpdateContestInviteStatus(apiData)).unwrap();
      Toast.success(res?.message);
      navigation.goBack();
    } catch (e) {
      Toast.error(getMessage(e));
    } finally {
      setInviteStatusLoading(false);
    }
  };
  const onPressEdit = () =>
    navigation.navigate('CreateAndEditContest', {details});

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );
  return {
    functions: {
      loadData,
      onPressEdit,
      updateContestInviteStatus,
    },
    states: {
      details,
      isInvited,
      loading,
      options,
      inviteStatusLoading,
    },
  };
};
export default useContestDetailsModelView;
