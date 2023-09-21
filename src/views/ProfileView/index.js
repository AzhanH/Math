import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import {BackgroundWrapper, Button, Loader, Text} from '../../components';
import styles from './styles';

const ProfileView = ({data, student, loading}) => {
  //   const renderFields = () =>
  //     data?.map((v, i) => (
  //       <View key={i} style={styles.renderFieldsContainerStyle}>
  //         <Text style={styles.label} text={v?.title} />
  //         <Text numberOfLines={1} style={styles.value} text={v?.value} />
  //       </View>
  //     ));

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
          {/* <View style={styles.fieldsContainer}>{renderFields()}</View> */}
          <View style={styles.btnContainer}>
            <Button btnText={'EDIT PROFILE'} />
            <TouchableOpacity>
              <Text style={styles.changePassword} text={'Change Password'} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </BackgroundWrapper>
  );
};
export default ProfileView;
