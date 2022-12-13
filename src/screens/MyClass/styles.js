import {StyleSheet, StatusBar} from 'react-native';
import {fontSizes, vh} from '../../utils/units';

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
});
export default styles;
