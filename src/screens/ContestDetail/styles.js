import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    // marginTop: StatusBar.currentHeight || vh * 6,
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
  contestDetailView: {
    justifyContent: 'flex-start',
    paddingVertical: vh * 3,
  },
  textView: {right: vw * 4},
  contestHeading: {
    fontFamily: 'Oswald-Medium',
    fontSize: fontSizes.f20,
  },
  timeView: {
    width: '60%',
    alignSelf: 'center',
    marginTop: vh * 2,
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
    marginTop: vh * 3,
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
    textTransform: 'uppercase',
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
  contestName: {
    fontFamily: 'Oswald-Medium',
    color: colors.white,
    fontSize: fontSizes.f20,
  },
  contestDesc: {
    marginTop: vh,
    fontSize: fontSizes.f15,
    fontFamily: 'Renner-it-Book',
    color: colors.white,
  },
  dateText: {
    marginLeft: vw,
    fontFamily: 'Oswald-Light',
    fontSize: fontSizes.f12,
    color: colors.white,
  },
  icons: {
    height: vh * 2.2,
    width: vh * 2.2,
    resizeMode: 'contain',
  },
  rightSide: {
    width: '25%',
  },
  midView: {
    width: '60%',
  },
});
export default styles;
