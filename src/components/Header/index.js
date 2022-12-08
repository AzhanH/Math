import React from 'react';
import styles from './styles';
import Icons from '../Icon';
import Text from '../Text';
import icons from '../../assets/svgs';
import {View, TouchableOpacity} from 'react-native';
const Header = ({heading, nav}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={() => nav.goBack()} style={styles.iconPadding}>
        <Icons name={icons.backArrow} />
      </TouchableOpacity>
      <View style={styles.headingView}>
        <Text style={styles.headingText} text={heading.toUpperCase()} />
      </View>
    </View>
  );
};
export default Header;
