import React, {useEffect, useRef} from 'react';
import {View, Image, Platform} from 'react-native';
import {
  BackgroundWrapper,
  InputField,
  CustomModal,
  Text,
  ValuePicker,
  DatePicker,
  Button,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import styles from './styles';
import images from '../../assets/images';
const InviteStudent = () => {
  useEffect(() => {
    if (Platform.OS == 'android') {
      AndroidKeyboardAdjust.setAdjustPan();
    }
  }, []);

  const inviteSuccessRef = useRef(null);
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid>
        <InputField
          viewStyle={styles.input}
          placeholder="First Name"
          retunKeyType="next"
        />
        <InputField
          viewStyle={styles.input}
          placeholder="Last Name"
          retunKeyType="next"
        />
        <InputField
          placeholder="User Name"
          viewStyle={styles.input}
          retunKeyType="next"
        />
        <View style={styles.row}>
          <Image style={styles.infoImage} source={images.info} />
          <Text
            style={styles.warningText}
            text={
              "No more than two consecutive characters from the student's first or last name may be used in the student's Username."
            }
          />
        </View>
        <InputField
          viewStyle={styles.input}
          placeholder="Email Address"
          retunKeyType="next"
        />
        <ValuePicker
          placeholder="Choose Class Grade"
          containerStyle={styles.input}
        />
        <InputField
          retunKeyType="next"
          viewStyle={styles.input}
          placeholder="School Name"
        />
        <ValuePicker
          retunKeyType="next"
          containerStyle={styles.input}
          placeholder="Choose Your Gender"
        />
        <DatePicker
          containerStyle={styles.input}
          placeholder={'DOB'}
          mode={'date'}
        />
        <Button
          onPress={() => inviteSuccessRef.current.show()}
          btnText={'SEND INVITE'}
        />

        <CustomModal
          ref={inviteSuccessRef}
          image={images.success}
          heading={'success'}
          subHeading={"The invite has been sent to the student's email."}
        />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default InviteStudent;
