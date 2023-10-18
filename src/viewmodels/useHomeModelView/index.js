import {useNavigation} from '@react-navigation/native';

const useHomeModelView = () => {
  const navigation = useNavigation();

  const onPressRegister = () => navigation.navigate('InviteStudent');

  return {
    functions: {
      onPressRegister,
    },
  };
};

export default useHomeModelView;
