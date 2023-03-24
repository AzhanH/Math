import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 3,
  },
  searchBar: {
    width: vw * 93,
  },
  contentView: {
    paddingVertical: vh,
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
    borderRadius: (vw * 20) / 2,
    resizeMode: 'contain',
    height: vw * 20,
    width: vw * 20,
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
