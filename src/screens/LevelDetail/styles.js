import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight || vh * 6,
    paddingHorizontal: vw * 3,
  },
  levelContainer: {
    elevation: 1,
    borderRadius: vw * 3,
    marginTop: vh,
    backgroundColor: colors.white,
    padding: 0.1,
  },
  levelSubContainer: {
    justifyContent: 'space-evenly',
    paddingVertical: vh * 2,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: vw * 3,
    borderColor: colors.borderLight + '66',
    borderStyle: 'dashed',
    borderWidth: 2,
  },
  positionText: {
    fontFamily: 'Oswald-Medium',
    fontSize: fontSizes.f14,
  },
  playerType: {
    fontSize: fontSizes.f10,
    fontFamily: 'Oswald-Medium',
    color: colors.darkRed,
  },
  scoreText: {
    fontFamily: 'Oswald-Medium',
    fontSize: fontSizes.f12,
    color: colors.lightBrown,
  },
  tableContainer: {
    marginTop: vh * 4,
    paddingHorizontal: vw * 4,
  },
  schoolText: {
    textAlign: 'center',
    fontFamily: 'Oswald-Medium',
    fontSize: fontSizes.f24,
  },
  schoolName: {
    color: colors.lightBrown,
    textAlign: 'center',
    fontFamily: 'Oswald-Medium',
    fontSize: fontSizes.f12,
    marginBottom: vh * 2,
  },
});
export default styles;
