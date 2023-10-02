import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    marginTop: vh,
    backgroundColor: colors.gray + '55',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw * 3,
    height: vh * 15,
    width: '100%',
  },
  noDataText: {
    fontFamily: 'Oswald-Regular',
    fontSize: fontSizes.f16,
  },
});
export default styles;
