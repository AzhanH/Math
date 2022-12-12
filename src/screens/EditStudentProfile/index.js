import React from 'react';
import {Image, View} from 'react-native';
import images from '../../assets/images';
import {BackgroundWrapper} from '../../components';
import styles from './styles';

const EditStudentProfile = () => {
  return (
    <BackgroundWrapper>
      <View style={styles.mainView}>
        <View style={styles.profileView}>
          <Image style={styles.studentImage} source={images.childImage1} />
          <View></View>
        </View>
      </View>
    </BackgroundWrapper>
  );
};
export default EditStudentProfile;
