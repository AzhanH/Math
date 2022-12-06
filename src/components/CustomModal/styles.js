import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';
const styles = StyleSheet.create({
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
  textView: {
    marginTop: vh * 2,
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'Oswald-Bold',
    fontSize: fontSizes.f24,
  },
  subHeading: {
    fontSize: fontSizes.f15,
    textAlign: 'center',
    fontFamily: 'Renner_ 400 Book',
  },
  success: {
    marginTop: vh * 2,
    height: vh * 12,
    width: vw * 30,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: vw * 3,
  },
});

export default styles;
