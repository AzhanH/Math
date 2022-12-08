import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    width: vw * 90,
    flexDirection: 'row',
    marginTop: vh * 2,
    backgroundColor: colors.lightGray,
    height: vh * 8,
    borderRadius: vw * 5,
    paddingLeft: vw * 4,
    alignItems: 'center',
  },

  placeholder: {
    width: '88%',
    fontFamily: 'Oswald-Regular',
    color: colors.black + '66',
    fontSize: fontSizes.f14,
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    height: vh * 8,
    paddingRight: '2%',
  },
  icon: {
    width: '80%',
    height: vh * 3,
    resizeMode: 'contain',
  },
});

export default styles;
