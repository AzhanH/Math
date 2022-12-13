import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight || vh * 6,
    paddingHorizontal: vw * 3,
  },
  teamView: {
    marginVertical: vh * 1.5,
    width: vw * 94,
    padding: 0.1,
    borderRadius: vw * 6,
  },
  teamSubView: {
    paddingVertical: vh * 2,
    paddingHorizontal: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vh * 3,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.white + '66',
  },

  btnContainer: {width: vw * 36, marginTop: vw * 2},

  row: {
    width: '100%',
    flexDirection: 'row',
  },
  teamContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '55%',
  },
  teamNameText: {
    fontFamily: 'Oswald-Regular',
    fontSize: fontSizes.f16,
  },
  avatarImage: {
    height: vh * 15,
    width: vh * 15,
    borderRadius: (vh * 15) / 2,
    resizeMode: 'contain',
  },
});
export default styles;
