import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight || vh * 6,
    paddingHorizontal: vw * 3,
  },
  tableContainer: {
    paddingHorizontal: vw * 4,
  },
  levelContainer: {
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
  outerCircle: {
    height: vh * 6,
    width: vh * 6,
    borderRadius: (vh * 6) / 2,
    backgroundColor: colors.white,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    height: vh * 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: vh * 4,
    borderRadius: (vh * 4) / 2,
    backgroundColor: colors.white,
    elevation: 1,
  },
  contentContainer: {
    paddingBottom: vh * 2,
  },
});
export default styles;
