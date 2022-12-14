import {Image, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import {Text} from '../../components';
import {colors} from '../../utils/theme';
import {fontSizes} from '../../utils/units';
import styles from './styles';

const titles = {
  //ContestStack
  Contest: 'Contests',
  ContestDetail: 'Contest Detail',
  InviteParents: 'Invite Parent(s)/Teacher(s)',
  CreateAndEditContest: 'Create Contest',
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
};

const backBtnRoutes = {
  ContestDetail: true,
  InviteParents: true,
  CreateAndEditContest: true,
  TeamDetail: true,
  CreateAndEditTeam: true,
  Levels: true,
  LevelDetail: true,
};
const getHeaderLeft = props => (
  <TouchableOpacity
    onPress={() =>
      backBtnRoutes[props?.route?.name]
        ? props?.navigation?.goBack()
        : props?.navigation?.openDrawer()
    }>
    <Image
      style={styles.headerImage}
      source={
        props?.route?.name === 'Home' || props?.route?.name === 'ScoreBoardList'
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
    if (
      props?.route?.name === 'CreateAndEditTeam' &&
      props?.route?.params !== undefined
    ) {
      return 'EDIT MY TEAM';
    }
    return titles[props?.route?.name]?.toUpperCase();
  }
  return '';
};

const NavigationOptions = props => {
  return {
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
