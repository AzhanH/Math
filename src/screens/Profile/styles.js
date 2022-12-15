import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Oswald-Light',
    fontSize: fontSizes.f16,
    textTransform: 'uppercase',
  },
  value: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: fontSizes.f14,
  },
  btnContainer: {
    alignItems: 'center',
  },
  changePassword: {
    marginTop: vh,
    fontSize: fontSizes.f12,
    fontFamily: 'Renner-it-Book',
    color: colors.purple,
    textDecorationLine: 'underline',
  },
  renderFieldsContainerStyle: {
    height: vh * 10,
    width: '50%',
    justifyContent: 'space-evenly',
    marginTop: vh * 2,
  },
  imageContainer: {
    height: vh * 20,
    width: vh * 20,
    alignItems: 'center',
    borderRadius: (vh * 20) / 2,
  },

  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },

  RubikMediumStyle: {
    fontFamily: 'Oswald-Bold',

    fontSize: vh * 2,
    color: colors.black,
  },

  fieldsContainer: {
    marginLeft: vw * 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: vw * 60,
    justifyContent: 'space-between',
  },
});
export default styles;
