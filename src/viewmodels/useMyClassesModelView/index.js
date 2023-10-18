import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {CreateClass, GetAllClasses} from '../../state/classes';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {Toast, getMessage} from '../../api/APIHelpers';
import {colors} from '../../utils/theme';
import images from '../../assets/images';

const useMyClassesModelView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showAddClassModal, setShowAddClassModal] = useState(false);
  const [lastPage, setLastPage] = useState(null);
  const [className, setClassName] = useState(null);
  const [createLoading, setCreateLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      loadData();
      return () => {
        setPage(1);
        setLastPage(null);
      };
    }, []),
  );

  const onEndReached = () => {
    if (page < lastPage && !loading) {
      loadData(page + 1);
      setPage(page + 1);
    }
  };

  const onPressViewDetail = item =>
    navigation.navigate('ClassDetails', {id: item?.id});

  const loadData = async (page = 1) => {
    try {
      setLoading(true);
      let res = await dispatch(GetAllClasses({page})).unwrap();
      setLastPage(res?.last_page);
      if (page > 1 && res?.last_page <= page) {
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

  const onChangeClassName = text => setClassName(text);
  const onPressCreateClass = async () => {
    try {
      if (!className) {
        throw new Error('Please Enter Class Name');
      }
      setCreateLoading(true);
      const res = await dispatch(CreateClass({title: className})).unwrap();
      Toast.success(res?.message);
      setCreateLoading(false);
      onCloseClassModal();
    } catch (e) {
      setCreateLoading(false);
      console.log('Error', e);
      Toast.error(getMessage(e));
      setClassName('');
    }
  };
  const onPressAddClass = () => setShowAddClassModal(true);

  const onCloseClassModal = () => {
    setShowAddClassModal(false);
    setClassName('');
  };

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
      onPressAddClass,
      onPressCreateClass,
      onChangeClassName,
      onCloseClassModal,
      onPressViewDetail,
    },
    states: {
      page,
      data,
      className,
      backgroundColor,
      avatarImage,
      createLoading,
      showAddClassModal,
      loading,
    },
  };
};

export default useMyClassesModelView;
