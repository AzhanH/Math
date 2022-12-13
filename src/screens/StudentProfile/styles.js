import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight || 0,
    paddingBottom: vh * 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: vw * 3,
  },
  profileImage: {
    marginVertical: vh * 2,
    height: vh * 16,
    width: vh * 16,
    borderRadius: (vh * 16) / 2,
  },
  informationView: {
    paddingLeft: vw * 10,
    alignSelf: 'center',
  },
  row: {
    marginTop: vh * 3,
    flexDirection: 'row',
    width: '100%',
  },
  leftView: {width: '60%'},
  rightView: {width: '40%'},
  label: {
    fontFamily: 'Oswald-Light',
    fontSize: fontSizes.f16,
  },
  value: {
    width: '50%',
    fontFamily: 'Oswald-SemiBold',
    fontSize: fontSizes.f14,
  },
  btnContainer: {
    alignItems: 'center',
    marginRight: vw * 10,
  },
  changePassword: {
    marginTop: vh,
    fontSize: fontSizes.f12,
    fontFamily: 'Renner-it-Book',
    color: colors.purple,
    textDecorationLine: 'underline',
  },
});
export default styles;
