import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import images from '../../assets/images';
import {colors} from '../../utils/theme';
import Text from '../Text';
import styles from './styles';

const ValuePicker = ({
  value,
  placeholder,
  containerStyle,
  placeHolderStyle,
  onPress,
  icon,
  error,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, containerStyle]}>
        <Text
          style={[
            styles.placeholder,
            placeHolderStyle,
            value && {color: colors.black},
          ]}
          text={value ? value : placeholder}
        />
        <View style={styles.iconView}>
          <Image style={styles.icon} source={icon ? icon : images.dropDown} />
        </View>
      </TouchableOpacity>
      {error && <Text style={styles.errorText} text={error} />}
    </>
  );
};

export default ValuePicker;
