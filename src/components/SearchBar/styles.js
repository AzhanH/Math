import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    elevation: 1,
    width: vw * 75,
    flexDirection: 'row',
    marginTop: vh * 2,
    backgroundColor: colors.lightGray,
    height: vh * 7,
    borderRadius: vw * 5,
    alignItems: 'center',
    paddingLeft: vw * 4,
  },
  textInput: {
    width: '90%',
    fontFamily: 'Oswald-Regular',
    color: colors.black,
    fontSize: fontSizes.f14,
  },
  icon: {
    resizeMode: 'contain',
    height: vh * 3,
  },
});
export default styles;
