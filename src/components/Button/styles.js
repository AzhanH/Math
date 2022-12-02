import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh * 3,
  },
  text: {
    fontSize: fontSizes.f20,
    color: colors.white,
    fontFamily: 'Oswald-Regular',
    bottom: vh * 5,
  },
});
export default styles;
