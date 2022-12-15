import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import {BackgroundWrapper, Button, Text} from '../../components';
import styles from './styles';

const Profle = ({navigation, route}) => {
  const student = route?.params?.data;

  const data = [
    {
      id: 0,
      title: 'First Name:',
      value: student?.name ? student?.name : 'John',
    },
    {id: 1, title: 'last Name:', value: 'Doe'},
    {
      id: 2,
      title: 'Phone No:',
      value: student?.PhoneNo ? student?.PhoneNo : '+866-876463 ',
    },
    {
      id: 3,
      title: 'Player ID',
      value: student?.playerId ? student?.playerId : 'Batman2022',
    },
    {
      id: 4,
      title: 'Email',
      value: student?.email ? student?.email : 'Email@Info.Com',
    },
    {
      id: 5,
      title: 'Class Grade',
      value: student?.grade ? student?.grade : '6',
    },
    {
      id: 6,
      title: 'School Name',
      value: student?.SchoolName ? student?.SchoolName : 'ABC School',
    },
    {id: 7, title: 'DOB', value: student?.Dob ? student?.Dob : 'June 3, 1995'},
    {id: 6, title: 'Gender', value: student?.gender ? student?.gender : 'Male'},
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
          <Image
            source={student?.image ? student?.image : images.childImage1}
            style={styles.image}
          />
        </View>
        <View style={styles.fieldsContainer}>{renderFields()}</View>
        <View style={styles.btnContainer}>
          <Button
            onPress={() =>
              navigation.navigate('ProfileStack', {
                screen: 'EditProfile',
                params: student,
              })
            }
            btnText={'EDIT PROFILE'}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProfileStack', {screen: 'ChangePassword'})
            }>
            <Text style={styles.changePassword} text={'Change Password'} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </BackgroundWrapper>
  );
};
export default Profle;
