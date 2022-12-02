import React from 'react';
import {Icons, Text} from '../index';
import styles from './styles';
import svgs from '../../assets/svgs';
import {TouchableOpacity} from 'react-native';
const Button = ({onPress, black, btnText, style, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.mainView, style]}>
      <Icons
        name={svgs.btnSvg({
          isRed: black ? false : true,
        })}
      />
      <Text style={[styles.text, textStyle]} text={btnText} />
    </TouchableOpacity>
  );
};
export default Button;
