import {useDispatch} from 'react-redux';
import {ReadPlans} from '../../state/plans';
import {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import images from '../../assets/images';

const useSubscriptionPlansModelView = ({route}) => {
  const token = route?.params?.token;
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await dispatch(ReadPlans(token)).unwrap();
      setSelectedPlan(res?.data[0]);
      setData(res?.data);
    } catch (e) {
      console.log('Error', e);
    } finally {
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const onPressSelectedPlan = (item, index) => {
    setSelectedPlan(item);
    setSelectedIndex(index);
  };

  const planImages = {
    0: images.standardPlan,
    1: images.standardPlan2,
    2: images.standardPlan3,
  };

  return {
    functions: {
      onPressSelectedPlan,
    },
    states: {
      selectedIndex,
      data,
      selectedPlan,
      loading,
      planImages,
    },
  };
};

export default useSubscriptionPlansModelView;
