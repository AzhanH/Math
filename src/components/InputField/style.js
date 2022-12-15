import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  inputBox: {
    width: vw * 90,
    flexDirection: 'row',
    marginTop: vh * 2,
    backgroundColor: colors.lightGray,
    height: Platform.OS === 'ios' ? vh * 7 : vh * 8,
    borderRadius: vw * 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: vw * 4,
    paddingRight: vw * 2,
  },
  inputText: {
    fontSize: vw * 3.6,
  },
  textInput: {
    width: '90%',
    fontFamily: 'Oswald-Regular',
    color: colors.black,
    fontSize: fontSizes.f14,
  },
  eyeView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    height: vh * 8,
  },
  eyeImage: {
    resizeMode: 'contain',
    width: '50%',
    height: vh * 3,
  },
});

export default styles;
