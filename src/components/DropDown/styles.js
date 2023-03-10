import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.black + '70',
    justifyContent: 'flex-end',
  },
  subView: {
    paddingTop: vh,
    paddingHorizontal: vw * 5,
    minHeight: '25%',
    maxHeight: '40%',
    borderTopLeftRadius: vw * 6,
    borderTopRightRadius: vw * 6,
    backgroundColor: colors.white,
    width: '100%',
  },
  itemConatiner: {
    borderRadius: vw,
    padding: vh * 1.3,
  },
  itemText: {
    fontFamily: 'Oswald-Regular',
  },
  placeholder: {
    marginLeft: vw,
    marginBottom: vh,
    fontFamily: 'Oswald-Bold',
    fontSize: fontSizes.f18,
  },
});
export default styles;
