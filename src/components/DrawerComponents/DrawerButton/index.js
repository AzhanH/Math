import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {colors} from '../../../utils/theme';
import Text from '../../Text';

import styles from './styles';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DrawerButton = ({icon, label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
      <Image
        tintColor={label === 'Home' && colors.white}
        style={styles.icon}
        source={icon}
      />
      <Text style={styles.label} text={label} />
    </TouchableOpacity>
  );
};

export default DrawerButton;
