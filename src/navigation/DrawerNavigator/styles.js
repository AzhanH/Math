import {StyleSheet} from 'react-native';
import {vw} from '../../utils/units';

const styles = StyleSheet.create({
  sceneContStyle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  drawerStyle: {
    width: vw * 55,
    backgroundColor: 'transparent',
  },
});

export default styles;
