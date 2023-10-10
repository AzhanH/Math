import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {ClassDetails, RemoveStudent} from '../../state/classes';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {colors} from '../../utils/theme';
import {Toast, getMessage} from '../../api/APIHelpers';

const useEditClassModelView = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const id = route?.params?.id;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [selectedIndex, setSelecetdIndex] = useState(null);
  const [removeLoading, setRemoveLoading] = useState(false);

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

  const removeStudent = async (id, index) => {
    try {
      if (data?.classhasstudents?.length > 1) {
        setSelecetdIndex(index);
        setRemoveLoading(true);
        const res = await dispatch(RemoveStudent(id)).unwrap();
        setRemoveLoading(false);
        loadData();
      } else {
        throw new Error('Atleast 1 Player is required');
      }
    } catch (e) {
      setRemoveLoading(false);
      Toast.error(getMessage(e));
    }
  };

  const onPressAddStudents = () => {
    navigation.navigate('AddStudentsToClass', {
      id: id,
      players: data?.classhasstudents,
    });
  };
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const backgroundColors = {
    0: colors.darkPeach,
    1: colors.yellow,
    2: colors.green,
    3: colors.sky,
  };
  return {
    functions: {
      removeStudent,
      onPressAddStudents,
    },
    states: {
      data,
      selectedIndex,
      removeLoading,
      backgroundColors,
      loading,
    },
  };
};

export default useEditClassModelView;
