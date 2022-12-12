import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  contentContainer: {
    padding: vh * 2,
  },
  mainView: {
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: vw * 3,
    paddingBottom: vh * 5,
  },
  uploadContainer: {
    width: vw * 89,
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
    height: vh * 20,
    alignItems: 'flex-start',
  },
  chooseText: {
    marginTop: vh * 2,
    textAlign: 'center',
    fontFamily: 'Oswald-Bold',
    fontSize: fontSizes.f18f,
  },
});
export default styles;
