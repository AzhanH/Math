import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BackgroundWrapper, Button, InputField} from '../../components';
import useGeneral from '../../hooks/useGeneral';
import styles from './styles';

const ContactUs = () => {
  const {} = useGeneral();
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView enableOnAndroid style={styles.mainView}>
        <InputField
          returnKeyType="next"
          placeholder="First Name"
          viewStyle={styles.input}
        />
        <InputField
          returnKeyType="next"
          placeholder="Last Name"
          viewStyle={styles.input}
        />
        <InputField
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email"
          viewStyle={styles.input}
        />
        <InputField
          keyboardType="phone-pad"
          returnKeyType="next"
          placeholder="Phone"
          viewStyle={styles.input}
        />
        <InputField
          returnKeyType="next"
          placeholder="Subject"
          viewStyle={styles.input}
        />
        <InputField
          multiline
          placeholder="Comments"
          viewStyle={[styles.input, styles.multiline]}
        />
        <Button btnText={'SEND FEEDBACK'} />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default ContactUs;
