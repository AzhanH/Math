import React, {useEffect} from 'react';
import {View, TouchableOpacity, StatusBar} from 'react-native';
import {
  BackgroundWrapper,
  Button,
  Header,
  InputField,
  Text,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import styles from './styles';

const Signup = ({navigation}) => {
  useEffect(() => {
    AndroidKeyboardAdjust.setAdjustPan();
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
          <InputField returnKeyType="next" placeholder="Select" />
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
            btnText={'SIGNUP'}
            onPress={() => navigation.navigate('Payment')}
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
