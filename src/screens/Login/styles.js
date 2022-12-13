import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: vh * 2,
    paddingHorizontal: vw * 3,
    paddingBottom: vh * 3,
  },
  input: {
    width: '100%',
  },

  forgotView: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    marginTop: vh,
    textDecorationLine: 'underline',
    color: colors.purple,
    fontSize: fontSizes.f12,
    fontFamily: 'Renner-it-Book',
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
    marginTop: vh,
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
});
export default styles;
