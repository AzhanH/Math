import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginVertical: vh * 1.5,
    width: vw * 94,
    padding: vw * 0.2,
    borderRadius: 20,
  },
  subView: {
    paddingVertical: vh * 2,
    paddingHorizontal: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vh * 3,
    borderWidth: 1.3,
    borderStyle: 'dashed',
    borderColor: colors.white,
  },
  row: {
    width: '100%',
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
  halfView: {
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundedView: {
    alignSelf: 'flex-end',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.white,
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
  avatarImage: {
    height: vh * 15,
    width: vh * 15,
    borderRadius: (vh * 15) / 2,
    resizeMode: 'contain',
    bottom: vh * 2,
  },
});

export default styles;
