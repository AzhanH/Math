import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 3,
  },
  contentContainer: {
    paddingBottom: vh,
  },
  searchView: {
    marginHorizontal: vw * 3,
    width: '94%',
  },
});
export default styles;
