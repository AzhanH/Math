import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: vw * 3,
    paddingBottom: vh * 5,
    // marginTop: StatusBar.currentHeight || vh * 6,
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
    marginTop: vh * 2,
    textAlign: 'center',
    fontFamily: 'Oswald-Bold',
    fontSize: fontSizes.f18f,
  },
});
export default styles;
