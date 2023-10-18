import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 3,
  },
  contentContainer: {
    paddingBottom: vh,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchView: {
    width: vw * 94,
  },
  inputView: {
    width: '100%',
  },
});
export default styles;
