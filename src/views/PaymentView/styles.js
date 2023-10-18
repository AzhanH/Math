import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: vw * 3,
  },
  rectangle: {
    height: vh * 19,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    marginVertical: vh * 3,
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
    fontFamily: 'Renner-it-Book',
    fontSize: fontSizes.f16,
  },
  detailView: {
    marginTop: vh * 2,
  },
  input: {
    width: '100%',
  },
  reducedInput: {
    width: '48%',
  },
  cardText: {
    fontFamily: 'Oswald-Medium',
    fontSize: fontSizes.f16,
  },
  payment: {
    resizeMode: 'contain',
    height: vh * 5,
    width: vw * 10,
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
    fontFamily: 'Renner-it-Book',
  },
  successText: {
    fontSize: fontSizes.f14,
    fontFamily: 'Renner-it-Book',
  },
  inputSeprator: {
    marginLeft: '4%',
  },
  cardFieldStyle: {
    borderRadius: vw * 3,
    backgroundColor: colors.borderLight,
    textColor: '#000000',
  },
  cardContainer: {
    width: '100%',
    height: vh * 7,
    marginVertical: vh * 2,
  },
});
export default styles;
