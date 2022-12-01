import React from 'react';
import {ImageBackground, View} from 'react-native';
import images from '../../assets/images';
import styles from './styles';
const BackgroundWrapper = ({children}) => {
  return (
    <View style={styles.main_view}>
      <ImageBackground
        resizeMode="contain"
        style={styles.image}
        source={images.backgroundImage}>
        {children}
      </ImageBackground>
    </View>
  );
};
export default BackgroundWrapper;
