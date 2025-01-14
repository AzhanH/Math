import React from 'react';
import {View, ImageBackground, StatusBar, Image} from 'react-native';
import images from '../../assets/images';
import {Button, Text} from '../../components';
import styles from './styles';

const HomeView = ({onPressRegister}) => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={images.homeBackground}>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <View style={styles.subContainer}>
        <Image style={styles.ballImage} source={images.ball} />
        <Text
          style={styles.heading}
          text={'Fun math! Learn while Playing a baseball game'}
        />
        <Button
          onPress={onPressRegister}
          containerStyle={styles.btn}
          textStyle={styles.btnText}
          btnText={'REGISTER STUDENTS'}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeView;
