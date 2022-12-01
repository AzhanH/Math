import {StyleSheet} from 'react-native';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginTop: vh * 8,
    width: vw * 85,
    flexDirection: 'row',
  },
  headingView: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontFamily: 'Oswald-Bold',
    fontSize: fontSizes.f20,
  },
  iconPadding: {
    padding: vh,
  },
});

export default styles;
