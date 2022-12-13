import {StatusBar, StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight || vh * 6,
    paddingHorizontal: vw * 3,
  },
});
export default styles;
