import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: vw * 3,
    paddingBottom: vh * 2,
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
  backText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: colors.purple,
  },
  row: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: vh,
  },
  infoImage: {
    resizeMode: 'contain',
    height: vh * 2,
    width: vw * 8,
  },
  warningText: {
    color: colors.gray,
    marginLeft: vw,
    fontFamily: 'Oswald-Light',
    fontSize: fontSizes.f12,
  },
  input: {
    width: '100%',
  },
});
export default styles;
