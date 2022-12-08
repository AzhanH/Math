import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  tableView: {
    borderRadius: vw * 5,
    borderWidth: 2,
    borderColor: colors.blueBorder,
    width: '100%',
    backgroundColor: colors.navyBlue,
  },
  tableRow: {
    marginTop: vh * 2,
    paddingHorizontal: vw * 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.green,
  },
  rowText: {
    fontFamily: 'Oswald-Regular',
    fontSize: fontSizes.f10,
    color: colors.white,
  },
});
export default styles;
