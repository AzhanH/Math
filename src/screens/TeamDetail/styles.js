import {StatusBar, StyleSheet} from 'react-native';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight || vh * 6,
    paddingHorizontal: vw * 3,
  },
  contentContainer: {
    paddingBottom: vh,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamName: {
    fontFamily: 'Oswald-Medium',
    fontSize: fontSizes.f16,
  },
  updatedText: {
    fontFamily: 'Oswald-Regular',
    fontSize: fontSizes.f14,
  },
});
export default styles;
