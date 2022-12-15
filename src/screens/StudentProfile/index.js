import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {BackgroundWrapper, Button, Text} from '../../components';
import styles from './styles';

const StudentProfile = ({navigation, route}) => {
  const student = route?.params?.data;

  const data = [
    {id: 0, title: 'First Name:', value: student?.name},
    {id: 1, title: 'last Name:', value: 'Doe'},
    {id: 2, title: 'Phone No:', value: student?.PhoneNo},
    {id: 3, title: 'Player ID', value: student?.playerId},
    {id: 4, title: 'Email', value: student?.email},
    {id: 5, title: 'Class Grade', value: student?.grade},
    {
      id: 6,
      title: 'School Name',
      value: student?.SchoolName,
    },
    {id: 7, title: 'DOB', value: student?.Dob},
    {id: 6, title: 'Gender', value: student?.gender},
  ];

  const renderFields = () =>
    data?.map((v, i) => (
      <View key={i} style={styles.renderFieldsContainerStyle}>
        <Text style={styles.label} text={v?.title} />
        <Text style={styles.value} text={v?.value} />
      </View>
    ));

  return (
    <BackgroundWrapper>
      <ScrollView contentContainerStyle={styles.btnContainer}>
        <View style={styles.imageContainer}>
          <Image source={student?.image} style={styles.image} />
        </View>
        <View style={styles.fieldsContainer}>{renderFields()}</View>
        <View style={styles.btnContainer}>
          <Button
            onPress={() => navigation.navigate('EditStudentProfile')}
            btnText={'EDIT PROFILE'}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}>
            <Text style={styles.changePassword} text={'Change Password'} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </BackgroundWrapper>
  );
};
export default StudentProfile;
