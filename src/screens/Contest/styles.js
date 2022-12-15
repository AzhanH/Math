import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  contanier: {
    // marginTop: StatusBar.currentHeight || vh * 6,
    paddingHorizontal: vw * 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sortView: {
    elevation: 1,
    backgroundColor: colors.lightGray,
    width: vw * 14,
    height: vh * 7,
    marginTop: vh * 2,
    borderRadius: vw * 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    resizeMode: 'contain',
    height: vh * 4,
    width: vw * 5,
  },
  contentView: {
    position: 'absolute',
    left: vh * 2,
  },
  contestContainer: {
    width: '48%',
    height: vh * 32,
    marginTop: vh * 2,
  },
  playerImage: {
    height: vh * 12,
    width: vw * 25,
    resizeMode: 'contain',
    borderWidth: 1.3,
    borderColor: colors.white,
    borderRadius: vw * 6,
  },
  marginTop: {
    marginTop: vh * 2,
  },
  contestHeading: {
    fontFamily: 'Oswald-Medium',
    fontSize: fontSizes.f20,
    color: colors.white,
  },
  icons: {
    height: vh * 1.8,
    width: vh * 1.8,
    resizeMode: 'contain',
  },
  dateText: {
    marginLeft: vw,
    fontFamily: 'Oswald-Light',
    fontSize: fontSizes.f12,
    color: colors.white,
  },
  inviteText: {
    textDecorationLine: 'underline',
    top: vw * 7.5,
    left: vh * 6,
    color: colors.white,
    fontFamily: 'Oswald-Light',
    fontSize: fontSizes.f14,
  },
});
export default styles;
