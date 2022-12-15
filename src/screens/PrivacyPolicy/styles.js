import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vw} from '../../utils/units';

const styles = StyleSheet.create({
  text: {
    color: colors.lightBlack,
    fontFamily: 'Renner-it-Book',
    fontSize: fontSizes.f15,
  },
  mainView: {
    marginTop: StatusBar.currentHeight,
    // marginTop: 40,
    paddingHorizontal: vw * 3,
  },
});
export default styles;
