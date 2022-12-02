import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: vw * 2,
  },
  rectangle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    position: 'absolute',
  },
  headingText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Oswald-Medium',
    fontSize: fontSizes.f20,
  },
  subHeadText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Renner_ 400 Book',
    fontSize: fontSizes.f16,
  },
  detailView: {
    paddingHorizontal: vw * 7,
  },
  cardText: {
    fontFamily: 'Oswald-Medium',
    fontSize: fontSizes.f16,
  },
  payment: {
    resizeMode: 'contain',
    height: vh * 5,
    width: vw * 9,
    marginTop: vh,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh * 2,
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
  modalStyle: {
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: vw * 100,
    backgroundColor: colors.white,
    padding: vh * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boderLine: {
    height: vh * 0.5,
    width: vw * 30,
    backgroundColor: colors.gray + '33',
    borderRadius: vh * 2,
  },
  paymentSuccess: {
    height: vh * 11,
    width: vw * 20,
    resizeMode: 'contain',
    marginTop: vh * 2,
  },
  paymentText: {
    textAlign: 'center',
    fontFamily: 'Oswald-Bold',
    fontSize: fontSizes.f24,
  },
  textContainer: {
    marginTop: vh * 2,
  },
  thanksText: {
    fontSize: fontSizes.f16,
    textAlign: 'center',
    fontFamily: 'Renner_ 400 Book',
  },
  successText: {
    fontSize: fontSizes.f14,
    fontFamily: 'Renner_ 400 Book',
  },
});
export default styles;
