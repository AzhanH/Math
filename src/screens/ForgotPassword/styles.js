import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  contentContainer: {
    padding: vh * 2,
  },
  mainView: {
    marginTop: vh * 10,
    paddingHorizontal: vw * 2,
  },
  forgotView: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontFamily: 'Oswald-Bold',
    fontSize: fontSizes.f24,
    textAlign: 'center',
  },
  recoverText: {
    textAlign: 'center',
    marginTop: vh,
    fontFamily: 'Renner-it-Book',
    fontSize: fontSizes.f15,
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh * 3,
  },
  buttonText: {
    fontSize: fontSizes.f20,
    color: colors.white,
    fontFamily: 'Oswald-Regular',
    bottom: vh * 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dontText: {
    fontSize: fontSizes.f15,
    fontFamily: 'Renner-it-Book',
  },
  signUpText: {
    fontSize: fontSizes.f15,
    fontFamily: 'Renner-it-Book',
    color: colors.purple,
    textDecorationLine: 'underline',
  },
  marginLeft: {
    marginLeft: vw,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
