import {StyleSheet} from 'react-native';
import {fontSizes, vh, vw} from '../../utils/units';
import {colors} from '../../utils/theme';

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: fontSizes.f16,
  },
  noMargin: {
    marginTop: 0,
  },
  btnContainer: {
    width: vw * 50,
    marginTop: vh * 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black + '77',
  },
  modalView: {
    borderRadius: vw * 2,
    alignSelf: 'center',
    paddingVertical: vh * 2,
    paddingHorizontal: vw * 4,
    backgroundColor: colors.white,
    width: '85%',
    height: vh * 35,
  },
  closeView: {
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: vw * 6,
    height: vw * 6,
    borderRadius: (vw * 6) / 2,
  },
  closeIcon: {
    tintColor: colors.white,
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '100%',
  },
  classView: {
    marginVertical: vh * 1.5,
    width: vw * 94,
    padding: 0.1,
    borderRadius: vw * 6,
  },
  classSubView: {
    paddingVertical: vh * 2,
    paddingHorizontal: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vh * 3,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.white + '66',
  },
  btnContainer: {width: vw * 36, marginTop: vw * 2},
  row: {
    width: '100%',
    flexDirection: 'row',
  },
  classContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '55%',
  },
  classNameText: {
    fontFamily: 'Oswald-Regular',
    fontSize: fontSizes.f16,
  },
  avatarImage: {
    height: vh * 15,
    width: vh * 15,
    borderRadius: (vh * 15) / 2,
    resizeMode: 'contain',
  },
});
export default styles;
