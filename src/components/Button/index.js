import React from 'react';
import {Icons, Text} from '../index';
import styles from './styles';
import svgs from '../../assets/svgs';
import {TouchableOpacity, View} from 'react-native';
import {vh} from '../../utils/units';
const Button = ({
  onPress,
  black,
  btnText,
  style,
  textStyle,
  reducedSize,
  expand,
}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={onPress} style={[styles.mainView, style]}>
        <Icons
          name={svgs.btnSvg({
            expand: expand,
            reducedSize: reducedSize,
            isRed: black ? false : true,
          })}
        />
        <Text
          style={[
            styles.text,
            textStyle,
            expand && {bottom: vh * 5.4},
            reducedSize && {bottom: vh * 3.7},
          ]}
          text={btnText}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Button;
