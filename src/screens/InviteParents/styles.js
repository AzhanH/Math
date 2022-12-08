import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {fontSizes, vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: vw * 3,
  },
  searchBar: {
    width: vw * 93,
  },
  contentView: {
    bottom: vh,
    left: vw * 2,
    width: '90%',
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rectangleView: {
    marginTop: 10,
    height: vh * 16,
    width: '100%',

    justifyContent: 'center',
  },
  avatarImage: {
    left: vw * 5,
    borderRadius: (vh * 25) / 2,
    resizeMode: 'contain',
    height: vh * 14,
    width: vw * 24,
  },
  marginLeft: {
    marginLeft: vw * 6,
  },
  nameText: {
    fontFamily: 'Oswald-Regular',
    fontSize: fontSizes.f16,
  },
  actionBtn: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.white,
    height: vw * 10,
    borderRadius: (vw * 10) / 2,
    width: vw * 10,
    backgroundColor: colors.red,
    marginBottom: vh * 2,
  },
  icons: {
    resizeMode: 'contain',
    height: vh * 2,
    width: vw * 3,
  },
});
export default styles;
