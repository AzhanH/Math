import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  contentContainer: {
    // marginTop: vh * 2,
    paddingHorizontal: vw * 3,
  },
  input: {
    width: '100%',
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
  skipText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: colors.purple,
  },
});
export default styles;
