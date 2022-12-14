import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {fontSizes, vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vh * 5,
  },
  icon: {
    height: 4 * vh,
    width: 4 * vh,
    resizeMode: 'contain',
  },
  label: {
    fontFamily: 'Oswald-Light',
    fontSize: fontSizes.f16,
    marginLeft: vw * 2,
    color: colors.white,
  },
});

export default styles;
