import {useDispatch} from 'react-redux';
import {Toast, getMessage} from '../../api/APIHelpers';
import {GetAllTeachers} from '../../state/general';
import {useRef, useState, useEffect} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {SendInviteToParents} from '../../state/contest';

const useInviteParentModelView = ({route}) => {
  const navigation = useNavigation();
  const id = route?.params?.id;
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(null);
  const [createContestLoading, setCreateContestLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);

  const modalRef = useRef(null);

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
      let apiData = {
        page,
      };
      if (search) {
        apiData = {...apiData, search};
      }
      setLoading(true);
      const res = await dispatch(GetAllTeachers(apiData)).unwrap();
      setLastPage(res?.last_page);
      if (page > 1 && res?.last_page <= page) {
        setData([...data, ...res?.data]);
      } else {
        setData(res?.data);
      }
      setLoading(false);
    } catch (e) {
      Toast.error(getMessage(e));
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
  const onPressIcon = index => {
    let temp = [...data];
    temp[index].added = !temp[index].added;
    setData(temp);
  };

  const onPressSendInvite = async () => {
    try {
      let apiData = {
        contest_id: id,
      };
      const filteredData = data?.filter(v => v?.added);
      filteredData?.forEach((item, index) => {
        apiData[`teacher_ids[${index}]`] = item?.id;
      });
      if (!filteredData?.length > 0) {
        throw new Error('Please Select Atleast One Teacher');
      }
      setCreateContestLoading(true);
      await dispatch(SendInviteToParents(apiData)).unwrap();
      showModal();
    } catch (e) {
      Toast.error(getMessage(e));
    } finally {
      setCreateContestLoading(false);
    }
  };

  const onChangeSearch = text => setSearch(text);
  const onPressOk = () => navigation.goBack();
  const showModal = () => modalRef.current.show();
  const backgroundColor = {
    0: 'darkOrange',
    1: 'yellow',
    2: 'green',
    3: 'darkBlue',
  };
  return {
    functions: {
      onEndReached,
      onPressIcon,
      loadData,
      onPressOk,
      onChangeSearch,
      onPressSendInvite,
    },
    states: {page, createContestLoading, data, loading, backgroundColor},

    ref: {
      modalRef,
    },
  };
};

export default useInviteParentModelView;
