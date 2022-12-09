import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  cont: {
    alignSelf: 'center',
    width: vw * 40,
    marginTop: vh * 4,
  },
  mainView: {
    height: vh * 7,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: fontSizes.f16,
    color: colors.white,
    fontFamily: 'Oswald-Regular',
    bottom: vh * 5.3,
  },
});
export default styles;
