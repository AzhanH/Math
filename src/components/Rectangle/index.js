import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Rectangle = ({children, containerStyle, innerColor}) => {
  return (
    <View style={[styles.mainView, containerStyle]}>
      <View style={styles.subView}>
        <View style={styles.sideView}>
          <View style={styles.flex} />
          <View
            style={[
              styles.leftCircleView,
              innerColor && {borderColor: innerColor + '66'},
            ]}
          />
        </View>
        <View style={styles.midView}>{children}</View>
        <View style={styles.sideView}>
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
