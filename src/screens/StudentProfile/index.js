import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import {BackgroundWrapper, Button, Text} from '../../components';
import styles from './styles';

const StudentProfile = ({navigation, route}) => {
  const student = route?.params?.data;
  return (
    <BackgroundWrapper>
      <ScrollView contentContainerStyle={styles.mainView}>
        <Image source={images.childImage1} style={styles.profileImage} />
        <View style={styles.informationView}>
          <View style={styles.row}>
            <View style={styles.leftView}>
              <Text style={styles.label} text={'FIRST NAME'} />
              <Text style={styles.value} text={student?.name} />
            </View>
            <View style={styles.rightView}>
              <Text style={styles.label} text={'LAST NAME'} />
              <Text style={styles.value} text={'Doe'} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.leftView}>
              <Text style={styles.label} text={'USER NAME'} />
              <Text style={styles.value} text={'Batman2022'} />
            </View>
            <View style={styles.rightView}>
              <Text style={styles.label} text={'PHONE NO'} />
              <Text style={styles.value} text={'+866-876463'} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.leftView}>
              <Text style={styles.label} text={'EMAIL:'} />
              <Text style={styles.value} text={'Email@Info.Com'} />
            </View>
            <View style={styles.rightView}>
              <Text style={styles.label} text={'CLASS GRADE:'} />
              <Text style={styles.value} text={'06'} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.leftView}>
              <Text style={styles.label} text={'DOB'} />
              <Text style={styles.value} text={'June 3, 1995'} />
            </View>
            <View style={styles.rightView}>
              <Text style={styles.label} text={'GENDER'} />
              <Text style={styles.value} text={'Male'} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.leftView}>
              <Text style={styles.label} text={'CITY'} />
              <Text style={styles.value} text={'New York City'} />
            </View>
            <View style={styles.rightView}>
              <Text style={styles.label} text={'STATE'} />
              <Text style={styles.value} text={'New York State'} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.leftView}>
              <Text style={styles.label} text={'ZIP CODE'} />
              <Text style={styles.value} text={'10001'} />
            </View>
          </View>
          <View style={styles.btnContainer}>
            <Button
              onPress={() => navigation.navigate('EditStudentProfile')}
              btnText={'EDIT PROFILE'}
            />
            <TouchableOpacity>
              <Text style={styles.changePassword} text={'Change Password'} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </BackgroundWrapper>
  );
};
export default StudentProfile;
