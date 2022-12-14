import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import Text from '../../Text';

import styles from './styles';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DrawerButton = ({icon, label}) => {
  return (
    <TouchableOpacity style={[styles.container]}>
      <Image style={styles.icon} source={icon} />
      <Text style={styles.label} text={label} />
    </TouchableOpacity>
  );
};

export default DrawerButton;
