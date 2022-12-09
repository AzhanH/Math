import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  mainView: {
    padding: 0.1,
    backgroundColor: colors.peach,
    borderRadius: vh * 1.4,
  },
  subView: {
    flex: 1,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.white + '66',
    overflow: 'hidden',
    borderRadius: 10,
    flexDirection: 'row',
  },
  leftCircleView: {
    height: vh * 9,
    width: '100%',
    borderWidth: vw * 4,
    borderColor: '#9E4F0A' + '66',
    right: vh * 2,
    top: vh * 2,
    borderTopEndRadius: vh * 7,
  },

  rightCircleView: {
    height: vh * 9,
    width: vh * 9,
    alignSelf: 'flex-end',
    borderColor: '#9E4F0A' + '66',
    borderRadius: (vh * 9) / 2,
    left: vh * 3,
    borderWidth: vw * 4,
  },
  sideView: {
    width: '15%',
  },
  midView: {
    width: '70%',
  },
});
export default styles;
