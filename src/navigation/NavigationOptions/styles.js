import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  headerImage: {
    height: vh * 4,
    width: vh * 4,
    resizeMode: 'contain',
    marginHorizontal: vw * 3,
  },
  count: {
    justifyContent: 'center',
    alignItems: 'center',
    left: vw * 7,
    bottom: vh * 2,
    backgroundColor: colors.darkRed,
    height: vh * 2.5,
    width: vh * 2.5,
    borderRadius: (vh * 2.5) / 2,
    position: 'absolute',
  },
  headerText: {
    fontFamily: 'Oswald-Bold',
    fontSize: fontSizes.f20,
  },
  textWhite: {
    fontSize: fontSizes.f10,
    fontFamily: 'Oswald-Regular',
    color: colors.white,
  },
});
export default styles;
