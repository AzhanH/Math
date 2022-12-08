import React from 'react';
import Icons from '../Icon';
import Text from '../Text';
import styles from './styles';
import svgs from '../../assets/svgs';
import {TouchableOpacity, View} from 'react-native';
import {fontSizes, vh} from '../../utils/units';
const Button = ({
  onPress,
  black,
  btnText,
  style,
  textStyle,
  reducedSize,
  expand,
  containerStyle,
}) => {
  return (
    <View style={[styles.cont, containerStyle]}>
      <TouchableOpacity onPress={onPress} style={[styles.mainView, style]}>
        <Icons
          name={svgs.btnSvg({
            isRed: black ? false : true,
          })}
          // name={svgs.btnSvg({
          //   expand: expand,
          //   reducedSize: reducedSize,
          //   isRed: black ? false : true,
          // })}
        />
        <Text
          style={[
            styles.text,
            textStyle,
            expand && {bottom: vh * 5.4, fontSize: fontSizes.f16},
            reducedSize && {bottom: vh * 3.7},
          ]}
          text={btnText}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Button;
