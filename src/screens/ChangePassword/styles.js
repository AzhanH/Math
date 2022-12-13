import {StatusBar, StyleSheet} from 'react-native';
import {vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: vw * 3,
  },
});
export default styles;
