/* eslint-disable */
import React, {useEffect} from 'react';
import {View, TouchableOpacity, StatusBar, Platform} from 'react-native';
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
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <Header nav={navigation} heading={'SIGN UP'} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid>
        <View style={styles.mainView}>
          <InputField returnKeyType="next" placeholder="First Name" />
          <InputField returnKeyType="next" placeholder="Last Name" />
          <InputField returnKeyType="next" placeholder="Email Address" />
          <ValuePicker placeholder={'Select'} />
          <InputField
            secureTextEntry
            returnKeyType="next"
            placeholder="Password"
          />
          <InputField
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
        </View>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default Signup;
