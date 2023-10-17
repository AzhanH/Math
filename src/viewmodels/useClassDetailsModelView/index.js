import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {ClassDetails} from '../../state/classes';
import {colors} from '../../utils/theme';

const useClassDetailsModelView = ({route}) => {
  const navigation = useNavigation();
  const id = route?.params?.id;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await dispatch(ClassDetails(id)).unwrap();
      setData(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('Error', e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const backgroundColor = {
    0: colors.darkPeach,
    1: colors.yellow,
    2: colors.green,
  };

  const onPressViewDetail = id => {
    navigation.navigate('Profile', {id});
  };
  const onPressEditClass = () => navigation.navigate('EditClass', {id});

  return {
    functions: {
      onPressEditClass,
      onPressViewDetail,
    },
    states: {
      loading,
      data,
      backgroundColor,
    },
  };
};

export default useClassDetailsModelView;
