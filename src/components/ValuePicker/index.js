import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import images from '../../assets/images';
import Text from '../Text';
import styles from './styles';

const ValuePicker = ({placeholder, containerStyle, placeHolderStyle}) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]}>
      <Text style={[styles.placeholder, placeHolderStyle]} text={placeholder} />
      <View style={styles.iconView}>
        <Image source={images.dropDown} />
      </View>
    </TouchableOpacity>
  );
};

export default ValuePicker;
