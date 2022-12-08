import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh} from '../../utils/units';

const styles = StyleSheet.create({
  cont: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh * 4,
  },
  mainView: {
    height: vh * 6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fontSizes.f20,
    color: colors.white,
    fontFamily: 'Oswald-Regular',
    bottom: vh * 5,
  },
});
export default styles;
