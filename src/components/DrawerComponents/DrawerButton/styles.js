import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/theme';
import { vh, vw } from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3 * vh,
  },
  icon: {
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain',
    marginHorizontal: 5 * vw,
  },
  label: {
    fontSize: 2 * vh,
    color: colors.black,
  },
});

export default styles;
