import React from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import images from '../../assets/images';
import {colors} from '../../utils/theme';
import styles from './styles';
const BackgroundWrapper = ({children, transparent}) => {
  return (
    <View style={styles.main_view}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <ImageBackground
        resizeMode="contain"
        style={[
          styles.main_view,
          !transparent && {backgroundColor: colors.white},
        ]}
        source={images.backgroundImage}>
        {children}
      </ImageBackground>
    </View>
  );
};
export default BackgroundWrapper;
