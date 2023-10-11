import {useDispatch} from 'react-redux';
import {GetPrivacyPolicy} from '../../state/general';
import {useState} from 'react';
import {Toast, getMessage} from '../../api/APIHelpers';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

const usePrivacyPoliyModelView = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );
  const loadData = async () => {
    try {
      setLoading(true);
      const res = await dispatch(GetPrivacyPolicy()).unwrap();
      setData(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      Toast.error(getMessage(e));
    }
  };

  return {
    states: {
      loading,
      data,
    },
  };
};
export default usePrivacyPoliyModelView;
