import React, {useRef} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import images from '../../assets/images';
import {
  BackgroundWrapper,
  InputField,
  ValuePicker,
  Button,
  CustomModal,
} from '../../components';
import styles from './styles';

const EditStudentProfile = () => {
  const modalRef = useRef(null);
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView enableOnAndroid style={styles.mainView}>
        <View style={styles.profileView}>
          <Image style={styles.studentImage} source={images.childImage1} />
          <TouchableOpacity style={styles.greenCircle}>
            <Image style={styles.camera} source={images.camera} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <View style={styles.row}>
            <InputField
              viewStyle={styles.reducedInput}
              placeholder="First Name"
            />
            <InputField
              viewStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="Last Name"
            />
          </View>
          <InputField placeholder="User Name" viewStyle={styles.input} />
          <View style={styles.row}>
            <InputField
              viewStyle={styles.reducedInput}
              placeholder="Phone Number"
            />
            <InputField
              viewStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="Email"
            />
          </View>
          <View style={styles.row}>
            <ValuePicker
              containerStyle={styles.reducedInput}
              placeholder="Class Grade"
            />
            <ValuePicker
              containerStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="School Name"
            />
          </View>
          <View style={styles.row}>
            <InputField
              viewStyle={styles.reducedInput}
              placeholder="Add Another School"
            />
            <InputField
              viewStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="City"
            />
          </View>
          <View style={styles.row}>
            <InputField viewStyle={styles.reducedInput} placeholder="State" />
            <InputField
              viewStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="Zip Code"
            />
          </View>
          <View style={styles.row}>
            <ValuePicker
              containerStyle={styles.reducedInput}
              placeholder="Choose Your Gender"
            />
            <InputField
              viewStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="DOB"
            />
          </View>
          <Button onPress={() => modalRef.current.show()} btnText={'UPDATE'} />
        </View>
        <CustomModal
          ref={modalRef}
          heading={'Update Alert'}
          subHeading={'Student account details have been updated '}
          image={images.success}
        />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default EditStudentProfile;
