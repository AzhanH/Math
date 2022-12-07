import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh} from '../../utils/units';

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh * 2,
  },
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fontSizes.f20,
    color: colors.white,
    fontFamily: 'Oswald-Regular',
    bottom: vh * 5,
  },
});
export default styles;
