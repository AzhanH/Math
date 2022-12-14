import React from 'react';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const DrawerScreenWrapper = props => {
  const progress = useDrawerProgress(0);

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.9]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 26]);
    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  return (
    <Animated.View
      // source={generalImages.drawerBackground}
      style={[
        {
          flexGrow: 1,
          overflow: 'hidden',
          shadowColor: 'white',

          elevation: 6,
          shadowOpacity: 0.26,
          shadowRadius: 8,
          shadowOffset: {width: 0, height: 4},
          // borderStartWidth:10
        },
        animatedStyles,
      ]}>
      {props.children}
    </Animated.View>
  );
};
export default DrawerScreenWrapper;
