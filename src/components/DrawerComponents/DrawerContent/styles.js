import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/theme';
import { vh, vw } from '../../../utils/units';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    },
  drawercontainer:{
    height: vh * 100,
    width: vw * 40,
    marginTop: vh * 1,
    marginLeft: vw * 4,
  },
  nameStyle: {
   
    color: colors.themeColor,
    fontSize: 2 * vh,
    marginTop: 1 * vh,
    marginBottom: 1 * vh,
  },
  
  usernameTextStyle: {
    color: colors.white,
    opacity: 0.6,

    fontSize: 1.8 * vh,
  },
  routeContainer: {
    marginTop: 3 * vh,
  },
  name: {
    fontSize: 2.4 * vh,
    color: 'white',
    marginLeft: 5 * vw,
  },
  profileImage: {
    height: vh * 8,
    width: vh * 8,
    borderRadius: (vh * 10) / 2,
    backgroundColor: 'green',
  },
  header: {
    marginBottom: vh * 5,
    marginLeft: 5 * vw,
    marginTop: vh * 5,
    alignItems:'center'
  },

  crossButtonView: {
    marginTop: 10 * vh,
    alignItems: 'flex-end',
    marginRight: 6 * vw,
    backgroundColor:'red'
  },

  crossIconStyle: {
    resizeMode: 'contain',
    height: 3 * vh,
    width: 3 * vw,
  },

  icon: {
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain',
    marginHorizontal: 5 * vw,
  },

  label: {
    fontSize: 2 * vh,
    color: colors.black,
  },

  logoutButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3 * vh,
  },
  blurViewStyle: {
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
    backgroundColor: colors.white,
    opacity: 0.7,
  },

  crossIconStyle: {
    resizeMode: 'contain',
    height: 5 * vw,
    width: 5 * vw,
  },

  alertMainView: {
    backgroundColor: '#ffffff',
    width: 90 * vw,
    alignSelf: 'center',
    marginTop: 20 * vh,
    padding: 3 * vw,
    borderRadius: 6 * vw,
    height: 45 * vh,
  },

  crossIconView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  checkIconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkIconStyle: {
    resizeMode: 'contain',
    height: 14 * vh,
    width: 14 * vw,
  },

  customAlertHeadingTextStyle: {

    fontSize: 2.5 * vh,
    textAlign: 'center',
    marginBottom: 2 * vh,
    width: 50 * vw,
  },

  customAlertDescriptionTextStyle: {
    color: '#666666',

    fontSize: 2 * vh,
    color: colors.babyPink,
  },

  submitButtonView: {
    width: 50 * vw,
    height: 7 * vh,
    marginTop: 2 * vh,
    backgroundColor: colors.babyPink,
  },

  yesButtonView: {
    width: 35 * vw,
    height: 7 * vh,
    marginTop: 2 * vh,
    backgroundColor: colors.white,
    borderColor: colors.themeColor,
    borderWidth: 0.5 * vw,
  },

  noButtonView: {
    width: 35 * vw,
    height: 7 * vh,
    marginTop: 2 * vh,
    backgroundColor: colors.black,
  },

  textStyle: {
    fontSize: 2.2 * vh,
  },

  yesTextStyle: {
    fontSize: 2.2 * vh,

    color: colors.babyPink,
  },

  choiceButtonView: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-around',
  },
});
export default styles;
