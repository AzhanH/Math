import React from 'react';
import {Image, StatusBar, View} from 'react-native';
import images from '../../assets/images';
import {Text, Button} from '../../components';

import {colors} from '../../utils/theme';
import styles from './styles';
const Welcome = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <Image style={styles.introImage} source={images.intro} />
      <View style={styles.textView}>
        <Text style={styles.internationalText} text={'INTERNATIONAL'} />
        <Text
          style={styles.internationalText}
          text={
            <>
              <Text style={styles.textCenter} text={'MATH'} />
              <Text style={styles.beeText} text={' BEE'} />
            </>
          }
        />
        <Text
          style={styles.learnText}
          text={'Learn Math Playing A Baseball Game!'}
        />
        <Text
          style={[styles.learnText, styles.leftAlign]}
          text={
            'You have the knowledge, now put it to use playing real games with real pros in real time.'
          }
        />
      </View>
      <Button
        onPress={() => navigation.navigate('Signup')}
        btnText={'SIGNUP'}
      />
      <View style={styles.row}>
        <View style={[styles.positionView, {backgroundColor: colors.green}]} />
        <View style={styles.positionView} />
        <View style={styles.positionView} />
      </View>
    </View>
  );
};
export default Welcome;
