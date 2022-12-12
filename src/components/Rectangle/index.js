import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Rectangle = ({
  children,
  containerStyle,
  innerColor,
  midViewStyle,
  leftSideStyle,
  rightSideStyle,
}) => {
  return (
    <View style={[styles.mainView, containerStyle]}>
      <View style={styles.subView}>
        <View style={[styles.sideView, leftSideStyle]}>
          <View style={styles.flex} />
          <View
            style={[
              styles.leftCircleView,
              innerColor && {borderColor: innerColor + '66'},
            ]}
          />
        </View>
        <View style={[styles.midView, midViewStyle]}>{children}</View>
        <View style={[styles.sideView, rightSideStyle]}>
          <View
            style={[
              styles.rightCircleView,
              innerColor && {borderColor: innerColor + '66'},
            ]}
          />
        </View>
      </View>
    </View>
  );
};
export default Rectangle;
