import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ballImage: {
    height: vh * 40,
    width: vw * 70,
    resizeMode: 'contain',
  },
  heading: {
    textAlign: 'center',
    fontSize: fontSizes.f36,
    fontFamily: 'Oswald-Regular',
    color: colors.white,
  },
  btnText: {
    fontSize: fontSizes.f16,
  },
  btn: {
    marginTop: vh * 6,
  },
});
export default styles;
