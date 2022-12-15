/* eslint-disable */
import React, {useEffect} from 'react';
import {View, TouchableOpacity, Platform} from 'react-native';
import {
  BackgroundWrapper,
  Button,
  Header,
  InputField,
  Text,
  ValuePicker,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import styles from './styles';

const Signup = ({navigation}) => {
  useEffect(() => {
    if (Platform.OS == 'android') {
      AndroidKeyboardAdjust.setAdjustPan();
    }
  }, []);

  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid>
        <InputField
          viewStyle={styles.input}
          returnKeyType="next"
          placeholder="First Name"
        />
        <InputField
          viewStyle={styles.input}
          returnKeyType="next"
          placeholder="Last Name"
        />
        <InputField
          viewStyle={styles.input}
          returnKeyType="next"
          placeholder="Email Address"
        />
        <ValuePicker containerStyle={styles.input} placeholder={'Select'} />
        <InputField
          viewStyle={styles.input}
          secureTextEntry
          returnKeyType="next"
          placeholder="Password"
        />
        <InputField
          viewStyle={styles.input}
          secureTextEntry
          returnKeyType="send"
          placeholder="Confirm Password"
        />
        <Button
          btnText={'REGISTER'}
          onPress={() => navigation.navigate('ProfileCreation')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.backText} text={'Back To Login'} />
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default Signup;
