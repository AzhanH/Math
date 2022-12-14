import {Image, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import {Text} from '../../components';
import {fontSizes} from '../../utils/units';
import styles from './styles';

const titles = {
  Contest: 'Contests',
  ContestDetail: 'Contest Detail',
  InviteParents: 'Invite Parent(s)/Teacher(s)',
  CreateAndEditContest: 'Create Contest',
};

const backBtnRoutes = {
  ContestDetail: true,
  InviteParents: true,
  CreateAndEditContest: true,
};
const getHeaderLeft = props => (
  <TouchableOpacity
    onPress={() =>
      backBtnRoutes[props?.route?.name]
        ? props?.navigation?.goBack()
        : console.log('HELLO')
    }>
    <Image
      style={styles.headerImage}
      source={
        props?.route?.name === 'Home'
          ? images.drawerWhite
          : backBtnRoutes[props?.route?.name]
          ? images.backArrow
          : images.drawer
      }
    />
  </TouchableOpacity>
);

const getHeaderRight = props => {
  if (!backBtnRoutes[props?.route?.name]) {
    return (
      <TouchableOpacity>
        <Image
          style={styles.headerImage}
          source={
            props?.route?.name === 'Home'
              ? images.notificationWhite
              : images.notification
          }
        />
        <View style={styles.count}>
          <Text style={styles.textWhite} text={'2'} />
        </View>
      </TouchableOpacity>
    );
  }
  return '';
};

const getTitle = props => {
  if (titles[props?.route?.name]) {
    if (
      props?.route?.name === 'CreateAndEditContest' &&
      props?.route?.params !== undefined
    ) {
      return 'EDIT CONTEST';
    }
    return titles[props?.route?.name]?.toUpperCase();
  }
  return '';
};

const NavigationOptions = props => {
  return {
    headerTransparent: props?.route?.name === 'Home' ? true : false,
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    headerTitleStyle: styles.headerText,
    title: getTitle(props),
    headerLeft: () => getHeaderLeft(props),
    headerRight: () => getHeaderRight(props),
  };
};
export default NavigationOptions;
