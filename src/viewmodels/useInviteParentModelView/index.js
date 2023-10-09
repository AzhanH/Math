import {useDispatch} from 'react-redux';
import {Toast, getMessage} from '../../api/APIHelpers';
import {GetAllTeachers} from '../../state/general';
import {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {SendInviteToParents} from '../../state/contest';

const useInviteParentModelView = ({route}) => {
  const id = route?.params?.id;
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);

  useFocusEffect(
    useCallback(() => {
      loadData(1);
    }, []),
  );
  const loadData = async (page = 1) => {
    try {
      setLoading(true);
      const res = await dispatch(GetAllTeachers({page})).unwrap();
      setLastPage(res?.lastPage);
      if (page > 1 && res?.lastPage <= page) {
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
        apiData[`teacher_id[${index}]`] = item?.id;
      });
      if (!filteredData?.length > 0) {
        throw new Error('Please Select Atleast One Teacher');
      }
      await SendInviteToParents(apiData).unwrap();
    } catch (e) {
      Toast.error(getMessage(e));
    }
  };

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
      onPressSendInvite,
    },
    states: {data, loading, backgroundColor},
  };
};

export default useInviteParentModelView;
