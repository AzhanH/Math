import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  customTabContainer: {
    alignItems: 'center',
  },
  tabImage: {
    height: vh * 4,
    width: vw * 8,
    resizeMode: 'contain',
  },
  tabBarLabel: {
    fontFamily: 'Oswald-Regular',
    fontSize: fontSizes.f10,
    textAlign: 'center',
  },
  horizontalLine: {
    top: vh,
    height: 3,
    width: vw * 12,
    borderRadius: vw * 4,
    backgroundColor: colors.maroon,
  },
  tabBarStyle: {
    height: vh * 10,
    borderTopColor: 'transparent',
    backgroundColor: colors.white,
  },
});

export default styles;
