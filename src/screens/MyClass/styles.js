import {StyleSheet, StatusBar} from 'react-native';
import {fontSizes} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
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
