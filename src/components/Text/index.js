import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
const CustomText = ({style, text, numberOfLines, allowFontScaling = false}) => {
  return (
    <Text
      allowFontScaling={allowFontScaling}
      numberOfLines={numberOfLines}
      style={[styles.defaultText, style]}>
      {text}
    </Text>
  );
};

export default CustomText;
