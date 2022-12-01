import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import buttonRed from '../../assets/svgs/buttonRed';
import {Icons, Text} from '../../components';
import {colors} from '../../utils/theme';
import styles from './styles';
const Welcome = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainView}>
        <Image style={styles.introImage} source={images.intro} />
        <View style={styles.textView}>
          <Text style={styles.internationalText} text={'INTERNATIONAL'} />
          <Text
            style={styles.internationalText}
            text={
              <>
                <Text text={'MATH'} />
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
        <TouchableOpacity style={styles.buttonView} onPress={() => {}}>
          <Icons name={buttonRed({})} />

          <Text style={styles.buttonText} text={'SIGN UP'} />
        </TouchableOpacity>

        <View style={styles.row}>
          <View
            style={[styles.positionView, {backgroundColor: colors.green}]}
          />
          <View style={styles.positionView} />
          <View style={styles.positionView} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
