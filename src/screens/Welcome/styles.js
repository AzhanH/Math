import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  introImage: {
    marginTop: vh * 7,
    width: vw * 100,
    height: vh * 40,
  },
  textView: {
    paddingHorizontal: vw * 5,
  },
  internationalText: {
    fontSize: fontSizes.f36,
    fontFamily: 'Oswald-Bold',
    textAlign: 'center',
  },
  beeText: {
    color: colors.purple,
  },
  learnText: {
    fontSize: fontSizes.f16,
    textAlign: 'center',
    fontFamily: 'Renner-it-Book',
  },
  leftAlign: {
    textAlign: 'left',
    marginTop: vh,
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh * 3,
  },
  buttonText: {
    fontSize: fontSizes.f20,
    color: colors.white,
    fontFamily: 'Oswald-Regular',
    bottom: vh * 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: vh * 3,
  },
  positionView: {
    height: vh,
    width: vw * 10,
    backgroundColor: colors.black,
    borderRadius: vh * 2,
    marginLeft: vw,
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default styles;
