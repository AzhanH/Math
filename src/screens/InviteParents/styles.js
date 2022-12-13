import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || vh * 6,
    paddingHorizontal: vw * 3,
  },
  searchBar: {
    width: vw * 93,
  },
  contentView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rectangleView: {
    marginTop: 10,
    height: vh * 16,
    width: '100%',

    justifyContent: 'center',
  },
  avatarImage: {
    right: vh * 3,
    borderRadius: (vh * 25) / 2,
    resizeMode: 'contain',
    height: vh * 14,
    width: vw * 24,
  },
  nameText: {
    fontFamily: 'Oswald-Regular',
    fontSize: fontSizes.f16,
  },
  actionBtn: {
    left: vw * 3,
    marginBottom: vh * 2,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.white,
    height: vw * 10,
    borderRadius: (vw * 10) / 2,
    width: vw * 10,
    backgroundColor: colors.red,
  },
  icons: {
    resizeMode: 'contain',
    height: vh * 2,
    width: vw * 3,
  },
  invitaionContainer: {
    marginTop: vh * 2,
  },
});
export default styles;
