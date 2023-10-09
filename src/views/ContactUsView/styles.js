import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: vw * 3,
    paddingBottom: vh * 2,
  },
  input: {
    width: '100%',
  },
  multiline: {
    alignItems: 'flex-start',
    height: vh * 20,
  },
});
export default styles;
