import {Image, TouchableOpacity, TurboModuleRegistry, View} from 'react-native';
import images from '../../assets/images';
import {Text} from '../../components';
import {colors} from '../../utils/theme';
import styles from './styles';

const titles = {
  //ContestStack
  Contest: 'Contests',
  ContestDetail: 'Contest Detail',
  InviteParents: 'Invite Parent(s)/Teacher(s)',
  CreateAndEditContest: 'Create Contest',
  PrivacyPolicy: 'Privacy Policy',
  TermsAndCondition: 'Terms & Conditions',
  //My Class
  MyClass: 'My Class',
  //My Teams
  MyTeams: 'My Teams',
  TeamDetail: 'Team Detail',
  CreateAndEditTeam: 'Create Team',
  //ScoreBoard
  ScoreBoardList: 'ScoreBoard List',
  ScoreBoardList: 'ScoreBoard List',
  Levels: 'Team ScoreBoards',
  LevelDetail: 'Team ScoreBoards',

  //DrawerScreen
  Profile: 'My Profile',
  Privacy: 'Privacy Policy',
  ContactUs: 'Contact Us ',
  Terms: 'Terms & Conditions',
  RegisteredStd: 'Registered Students',
  Contact: 'Contact Us',
  Notify: 'Notifications',
  EditProfile: 'Edit Profile',
};

const backBtnRoutes = {
  ContestDetail: true,
  InviteParents: true,
  CreateAndEditContest: true,
  TeamDetail: true,
  CreateAndEditTeam: true,
  Levels: true,
  LevelDetail: true,
  EditProfile: true,
  Profile: true,
  ChangePassword: true,
};
const getHeaderLeft = props => {
  if (backBtnRoutes[props?.route?.name]) {
    if (
      (props?.route?.name === 'Profile' && props?.route?.params == undefined) ||
      (props?.route?.name === 'EditProfile' &&
        props?.route?.params === undefined)
    ) {
      return (
        <TouchableOpacity onPress={() => props?.navigation?.openDrawer()}>
          <Image style={styles.headerImage} source={images.drawer} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
        <Image style={styles.headerImage} source={images.backArrow} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={() =>
        backBtnRoutes[props?.route?.name]
          ? props?.navigation?.goBack()
          : props?.navigation?.openDrawer()
      }>
      <Image
        style={styles.headerImage}
        source={
          props?.route?.name === 'Home' ||
          props?.route?.name === 'ScoreBoardList'
            ? images.drawerWhite
            : backBtnRoutes[props?.route?.name]
            ? images.backArrow
            : images.drawer
        }
      />
    </TouchableOpacity>
  );
};

const getHeaderRight = props => {
  return (
    <TouchableOpacity
      onPress={() => props?.navigation?.navigate('Notifications')}>
      <Image
        style={styles.headerImage}
        source={
          props?.route?.name === 'Home' ||
          props?.route?.name === 'ScoreBoardList'
            ? images.notificationWhite
            : images.notification
        }
      />
      <View style={styles.count}>
        <Text style={styles.textWhite} text={'2'} />
      </View>
    </TouchableOpacity>
  );
};

const getTitle = props => {
  if (titles[props?.route?.name]) {
    if (
      props?.route?.name === 'CreateAndEditContest' &&
      props?.route?.params !== undefined
    ) {
      return 'EDIT CONTEST';
    }
    if (
      props?.route?.name === 'CreateAndEditTeam' &&
      props?.route?.params !== undefined
    ) {
      return 'EDIT MY TEAM';
    }
    if (
      props?.route?.name === 'Profile' &&
      props?.route?.params !== undefined
    ) {
      return 'STUDENT PROFILE';
    }
    if (
      props?.route?.name === 'EditProfile' &&
      props?.route?.params !== undefined
    ) {
      return 'EDIT STUDENT PROFILE';
    }
    return titles[props?.route?.name]?.toUpperCase();
  }
  return '';
};

const NavigationOptions = props => {
  return {
    headerShown: true,
    headerTransparent:
      props?.route?.name === 'Home' || props?.route?.name === 'ScoreBoardList'
        ? true
        : false,
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    headerTitleStyle: [
      styles.headerText,
      props?.route?.name === 'ScoreBoardList' && {color: colors.white},
    ],
    title: getTitle(props),
    headerLeft: () => getHeaderLeft(props),
    headerRight: () => getHeaderRight(props),
  };
};
export default NavigationOptions;
