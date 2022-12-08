import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: vw * 3,
  },
  rectangle: {
    height: vh * 19,

    width: '100%',
  },
  rectangleContent: {
    position: 'absolute',
  },
  row: {
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contestHeading: {
    fontFamily: 'Oswald-Medium',
    fontSize: fontSizes.f20,
  },
  timeView: {
    width: '60%',
    alignSelf: 'center',
  },

  dateHeading: {
    fontFamily: 'Oswald-Light',
    fontSize: fontSizes.f16,
  },
  dateValue: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: fontSizes.f14,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh * 2,
    paddingHorizontal: vw * 6,
  },
  chooseText: {
    fontFamily: 'Oswald-Bold',
    fontSize: fontSizes.f18,
  },
  status: {
    fontFamily: 'Oswald-Light',
    fontSize: fontSizes.f14,
  },
  statusActive: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: fontSizes.f14,
    color: colors.green,
  },
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
