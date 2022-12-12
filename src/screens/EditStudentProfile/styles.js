import {StatusBar, StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: vw * 3,
  },
  profileView: {
    borderRadius: (vh * 14) / 2,
    height: vh * 14,
    width: vh * 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  studentImage: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

export default styles;
