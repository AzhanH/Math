import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginVertical: vh * 1.5,
    width: vw * 85,
    padding: vw * 0.2,
    borderRadius: 20,
  },
  subView: {
    paddingVertical: vh * 2,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: vh * 3,
    borderWidth: 1.3,
    borderStyle: 'dashed',
    borderColor: colors.white,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  player: {
    textAlign: 'center',
    fontFamily: 'Oswald-Regular',
    fontSize: fontSizes.f16,
  },
  grade: {
    fontSize: fontSizes.f14,
  },
  btnText: {
    fontSize: fontSizes.f15,
  },
  roundedView: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.white,
    right: -vh * 3,
    top: 0,
    position: 'absolute',
    height: vh * 5,
    width: vh * 5,
    borderRadius: (vh * 5) / 2,
    backgroundColor: colors.red,
  },
  trash: {
    height: vw * 5,
    width: vw * 5,
    resizeMode: 'contain',
  },
});

export default styles;
