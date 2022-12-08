import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: vw * 3,
  },
  teamView: {
    marginVertical: vh * 1.5,
    width: vw * 94,
    padding: vw * 0.2,
    borderRadius: vw * 6,
  },
  teamSubView: {
    paddingVertical: vh * 2,
    paddingHorizontal: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vh * 3,
    borderWidth: 1.3,
    borderStyle: 'dashed',
    borderColor: colors.white,
  },
  btn: {
    height: vh * 5,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
  },
  teamNameText: {
    fontFamily: 'Oswald-Regular',
    fontSize: fontSizes.f16,
  },
});
export default styles;
