import {Image, TouchableOpacity} from 'react-native';
import images from '../../assets/images';
import styles from './styles';
const titles = {
  Login: 'Login',
  Signup: 'Signup',
  ProfileCreation: 'Profile Creation',
  SubscriptionPlans: 'SubscriptionPlans',
  Payment: 'Payment Screen',
};
const backBtnRoutes = {
  ProfileCreation: true,
  SubscriptionPlans: true,
  Payment: true,
  ForgotPassword: true,
};

const getHeaderLeft = props => {
  if (backBtnRoutes[props?.route?.name]) {
    return (
      <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
        <Image style={styles.headerImage} source={images.backArrow} />
      </TouchableOpacity>
    );
  }
};

const getTitle = props => {
  if (titles[props?.route?.name]) {
    return titles[props?.route?.name]?.toUpperCase();
  }
  return '';
};

const AuthNavigationOptions = props => {
  return {
    headerBackVisible: false,
    headerTransparent: false,
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    headerTitleStyle: styles.headerText,
    title: getTitle(props),
    headerLeft: () => getHeaderLeft(props),
  };
};
export default AuthNavigationOptions;
