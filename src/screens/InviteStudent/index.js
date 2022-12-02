import React, {useEffect, useRef} from 'react';
import {View, TouchableOpacity, StatusBar, Image} from 'react-native';
import {
  BackgroundWrapper,
  Header,
  Icons,
  InputField,
  SuccessModal,
  Text,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import styles from './styles';
import images from '../../assets/images';
const InviteStudent = () => {
  useEffect(() => {
    AndroidKeyboardAdjust.setAdjustPan();
  }, []);

  const inviteSuccessRef = useRef(null);
  return (
    <BackgroundWrapper>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <Header heading={'INVITE A STUDENT'} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid>
        <View style={styles.mainView}>
          <InputField placeholder="First Name" />
          <InputField placeholder="Last Name" />
          <InputField placeholder="User Name" />
          <InputField placeholder="Email Address" />
          <View style={styles.row}>
            <Image style={styles.infoImage} source={images.info} />
            <Text
              style={styles.warningText}
              text={
                "No more than two consecutive characters from the student's first or last name may be used in the student's Username."
              }
            />
          </View>
          <InputField placeholder="Choose Class Grade" />
          <InputField placeholder="School Name" />
          <InputField placeholder="Choose Your Gender" />
          <InputField placeholder="DOB" />
          {/* <TouchableOpacity
            onPress={() => inviteSuccessRef.current.show()}
            style={styles.buttonView}>
            <Icons name={buttonRed({})} />
            <Text style={styles.buttonText} text={'SEND INVITE'} />
          </TouchableOpacity> */}
        </View>
        <SuccessModal
          image={images.success}
          heading={'success'}
          subHeading={'The invite has been sent to the student. '}
          ref={inviteSuccessRef}
        />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default InviteStudent;
