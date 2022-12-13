import {StyleSheet, StatusBar} from 'react-native';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || vh * 6,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: fontSizes.f16,
  },
  noMargin: {
    marginTop: 0,
  },
  btnContainer: {
    width: vw * 50,
    marginTop: vh * 2,
  },
});
export default styles;
