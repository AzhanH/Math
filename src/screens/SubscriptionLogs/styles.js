import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || vh * 6,
  },
  contentContainerStyle: {
    paddingHorizontal: vw * 3,
    paddingBottom: vh,
  },
  rectangleView: {
    height: vh * 18,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: vh * 2,
    bottom: 0,
  },
  headingText: {
    fontSize: fontSizes.f18,
    fontFamily: 'Oswald-Medium',
    color: colors.white,
  },
  purchaseText: {fontFamily: 'Renner-it-Book', fontSize: fontSizes.f15},
  whiteText: {
    color: colors.white,
  },
  priceHeadText: {
    fontSize: fontSizes.f24,
    fontFamily: 'Oswald-Regular',
  },
  priceSubHead: {
    fontSize: fontSizes.f20,
    fontFamily: 'Oswald-Light',
  },
  time: {
    fontSize: fontSizes.f14,
    fontFamily: 'Oswald-light',
  },
  marginTop: {
    marginTop: vh,
  },
  rectangleHeight: {height: vh * 22},
});
export default styles;
