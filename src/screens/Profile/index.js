import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import {BackgroundWrapper, Button, Loader, Text} from '../../components';
import useProfile from '../../hooks/useProfile';
import styles from './styles';

const Profile = ({navigation, route}) => {
  const id = route?.params?.id;

  const {getStudentProfile, getProfile} = useProfile();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const student = route?.params?.data;

  const loadData = async () => {
    try {
      setLoading(true);
      let res;
      if (id) {
        res = await getStudentProfile(id);
      } else {
        res = await getProfile();
      }
      setProfile(res);
      setLoading(false);
    } catch (e) {
      setProfile(null);
      console.log('Error', e);
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [id]),
  );

  const data = [
    {
      id: 0,
      title: 'First Name:',
      value: profile?.first_name,
    },
    {id: 1, title: 'last Name:', value: profile?.last_name},
    {
      id: 2,
      title: 'Phone No:',
      value: profile?.phon_no,
    },
    {
      id: 3,
      title: 'Player ID',
      value: profile?.username,
    },
    {
      id: 4,
      title: 'Email',
      value: profile?.email,
    },
    {
      id: 5,
      title: 'Class Grade',
      value: profile?.class_grade,
    },
    {
      id: 6,
      title: 'School Name',
      value: profile?.school,
    },
    {id: 7, title: 'DOB', value: profile?.dob},
    {id: 6, title: 'Gender', value: profile?.gender},
  ];

  const renderFields = () =>
    data?.map((v, i) => (
      <View key={i} style={styles.renderFieldsContainerStyle}>
        <Text style={styles.label} text={v?.title} />
        <Text numberOfLines={1} style={styles.value} text={v?.value} />
      </View>
    ));

  return (
    <BackgroundWrapper>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </BackgroundWrapper>
  );
};
export default Profile;
