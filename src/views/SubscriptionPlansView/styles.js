import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: vh * 2,
  },
  list: {
    flexGrow: 0,
  },
  planTypeView: {
    marginLeft: vw * 6,
    width: vw * 20,
  },
  planTypeText: {
    fontFamily: 'Oswald-Regular',
    color: colors.gray,
    fontSizes: fontSizes.f16,
  },
  planImage: {
    marginTop: vh * 3,
    height: vh * 32,
    width: vw * 80,
    alignSelf: 'center',
  },
  planImageTextView: {
    alignItems: 'center',
    marginTop: vh * 7,
  },
  planHeadings: {
    color: colors.white,
    fontSize: fontSizes.f24,
    fontFamily: 'Oswald-Bold',
  },
  planPriceHeading: {
    color: colors.white,
    fontSize: fontSizes.f36,
    fontFamily: 'Oswald-Regular',
  },
  planPriceHeading2: {
    color: colors.white,
    fontSize: fontSizes.f24,
    fontFamily: 'Oswald-Light',
  },
  planDescView: {
    borderRadius: vw * 6,
    padding: vw * 5,
    bottom: vh * 4,
    backgroundColor: colors.white,
    width: vw * 57,
    alignSelf: 'center',
  },
  planDescText: {
    fontSize: fontSizes.f18,
    fontFamily: 'Renner-it-Book',
    textAlign: 'center',
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh * 3,
  },
  buttonText: {
    fontSize: fontSizes.f20,
    color: colors.white,
    fontFamily: 'Oswald-Regular',
    bottom: vh * 5,
  },
  loader: {
    height: vh * 15,
  },
});
export default styles;
