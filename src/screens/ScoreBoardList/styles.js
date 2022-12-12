import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  mainView: {
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
  },
  logo: {
    marginVertical: vh * 2,
  },
  chooseText: {
    fontFamily: 'Renner_ 400 Book',
    fontSize: fontSizes.f15,
    color: colors.white,
  },
  btnContainer: {
    width: vw * 50,
    marginTop: vh * 2,
  },
  btn: {height: vh * 7},
});

export default styles;
