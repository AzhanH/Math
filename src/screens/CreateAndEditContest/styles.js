import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: vw * 3,
    paddingBottom: vh * 5,
  },
  input: {
    width: '100%',
  },
  uploadContainer: {
    width: '100%',
    marginTop: vh * 2,
    backgroundColor: colors.lightGray,
    height: vh * 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vh * 3,
  },
  uploadText: {
    marginTop: vw,
    fontFamily: 'Oswald-Regular',
    fontSize: fontSizes.f14,
  },
  multiInput: {
    width: '100%',
    height: vh * 20,
    alignItems: 'flex-start',
  },
  chooseText: {
    marginVertical: vh * 2,
    textAlign: 'center',
    fontFamily: 'Oswald-Bold',
    fontSize: fontSizes.f18f,
  },
  paddingView: {
    paddingHorizontal: vw * 6,
  },
  contestImage: {
    width: vw * 25,
    height: vw * 25,
  },
  removeView: {
    right: -vw * 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: (vw * 10) / 2,
    width: vw * 5,
    height: vw * 5,
    position: 'absolute',
    backgroundColor: colors.white,
  },
  closeIcon: {
    height: '65%',
    width: '65%',
    resizeMode: 'contain',
  },
  btn: {
    width: vw * 45,
  },
});
export default styles;
