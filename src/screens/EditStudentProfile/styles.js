import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: vw * 3,
  },
  profileView: {
    marginVertical: vh * 3,
    height: vh * 16,
    width: vh * 16,
    borderRadius: (vh * 16) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  studentImage: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  greenCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: vw * 16,
    right: 0,
    top: vh * 11,
    height: vh * 5,
    width: vh * 5,
    backgroundColor: colors.green,
    borderRadius: (vh * 5) / 2,
    borderWidth: 2,
    borderColor: colors.white,
  },
  camera: {
    resizeMode: 'contain',
    height: '50%',
    width: '50%',
  },
  inputView: {
    marginTop: vh * 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
  },
  reducedInput: {
    width: '48%',
  },
  inputSeprator: {
    marginLeft: '4%',
  },
});

export default styles;
