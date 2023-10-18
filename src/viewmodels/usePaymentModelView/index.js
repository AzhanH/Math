import {useStripe} from '@stripe/stripe-react-native';
import {useState} from 'react';
import {Toast, getMessage} from '../../api/APIHelpers';
import {useDispatch} from 'react-redux';
import {PayForPlan} from '../../state/plans';
import {useNavigation} from '@react-navigation/native';
import {useRef} from 'react';
const usePaymentModelView = ({route}) => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token = route?.params?.token;
  const plan = route?.params?.plan;
  const [cardHolderName, setCardHolderName] = useState(null);
  const [loading, setLoading] = useState(false);
  const {createToken} = useStripe();
  const handleCreatePaymentMethod = async () => {
    try {
      setLoading(true);
      if (!cardHolderName) {
        throw new Error('Please Enter Card Holder Name');
      }
      const paymentToken = await createToken({
        type: 'Card',
        name: 'James Anderson',
      });
      if (paymentToken?.error) {
        throw new Error(paymentToken?.error?.message);
      }
      let apiData = {
        token,
        planId: plan?.id,
        card_token: paymentToken?.token?.id,
      };
      await dispatch(PayForPlan(apiData)).unwrap();
      modalRef.current.show();
    } catch (error) {
      Toast.error(getMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const onPressOk = () => navigation.navigate('Login');

  const onChangeCardHolderName = text => setCardHolderName(text);

  return {
    states: {
      plan,
      loading,
    },
    refs: {
      modalRef,
    },
    functions: {
      onPressOk,
      onChangeCardHolderName,
      handleCreatePaymentMethod,
    },
  };
};

export default usePaymentModelView;
