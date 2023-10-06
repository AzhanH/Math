import {useDispatch} from 'react-redux';
import {Toast, getMessage} from '../../api/APIHelpers';
import {GetContestDetail} from '../../state/contest';
import {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const useContestDetailsModelView = ({route}) => {
  const navigation = useNavigation();
  const id = route?.params?.id;
  const dispatch = useDispatch();

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
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
    },
    states: {
      details,
      loading,
      options,
    },
  };
};
export default useContestDetailsModelView;
