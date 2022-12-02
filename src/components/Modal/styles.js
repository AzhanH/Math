import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';

export default styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  blurBackground: {
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
    zIndex: -9999999,
    left: 0,
    top: 0,
  },
  blurView: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
    width: vw * 100,
    height: vh * 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
