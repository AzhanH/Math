import React from 'react';
import styles from './styles';
import {Icons, Text} from '../index';
import icons from '../../assets/svgs';
import {View, TouchableOpacity} from 'react-native';
const Header = ({heading}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.iconPadding}>
        <Icons name={icons.backArrow} />
      </TouchableOpacity>
      <View style={styles.headingView}>
        <Text style={styles.headingText} text={heading} />
      </View>
    </View>
  );
};
export default Header;
