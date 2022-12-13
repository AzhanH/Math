import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  headerImage: {height: vh * 4, width: vh * 4, resizeMode: 'contain'},
  count: {
    justifyContent: 'center',
    alignItems: 'center',
    left: vw * 3,
    bottom: vh * 2,
    backgroundColor: colors.darkRed,
    height: vh * 3,
    width: vh * 3,
    borderRadius: (vh * 3) / 2,
    position: 'absolute',
  },
  textWhite: {
    color: colors.white,
  },
});
export default styles;
