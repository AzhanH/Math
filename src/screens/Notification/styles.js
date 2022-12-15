import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight || vh * 6,
    paddingHorizontal: vw * 3,
  },
  notificationView: {
    paddingHorizontal: vw * 3,
    paddingVertical: vh * 3,
    marginBottom: vh * 2,
    backgroundColor: colors.red + '11',
  },
  descText: {
    color: colors.darkRed,
    fontFamily: 'Renner-it-Book',
    fontSize: fontSizes.f12,
  },
  row: {
    marginTop: vh * 2,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: 'Renner-it-Book',
    fontSize: fontSizes.f10,
  },
  dateTime: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  checked: {
    resizeMode: 'contain',
    width: '10%',
    height: vh * 3,
  },
});
export default styles;
