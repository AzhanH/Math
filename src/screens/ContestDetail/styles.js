import {StatusBar, StyleSheet} from 'react-native';
import {fontSizes, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: vw * 3,
  },
  rectangle: {},
  rectangleContent: {
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contestHeading: {
    fontFamily: 'Oswald-Medium',
    fontSize: fontSizes.f20,
  },
});
export default styles;
