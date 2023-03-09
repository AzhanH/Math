import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vw} from '../../utils/units';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: colors.lightBlack,
    fontFamily: 'Renner-it-Book',
    fontSize: fontSizes.f15,
  },
  mainView: {
    paddingHorizontal: vw * 4,
  },
});
export default styles;
