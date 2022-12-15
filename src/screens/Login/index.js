import React, {useEffect} from 'react';
import {View, TouchableOpacity, Platform} from 'react-native';
import {
  BackgroundWrapper,
  Header,
  Button,
  InputField,
  Text,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import styles from './styles';

const Login = ({navigation}) => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      AndroidKeyboardAdjust.setAdjustPan();
    }
  }, []);
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView style={styles.contentContainer}>
        <InputField
          viewStyle={styles.input}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email Address"
        />
        <InputField
          viewStyle={styles.input}
          returnKeyType="send"
          secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotView}>
          <Text style={styles.forgotText} text="Forgot Password?" />
        </TouchableOpacity>
        <Button
          btnText={'LOGIN'}
          onPress={() => navigation.navigate('BottomTabs')}
        />
        <View style={styles.row}>
          <Text style={styles.dontText} text={"Don't Have An Account"} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={styles.marginLeft}>
            <Text style={styles.signUpText} text={'Sign Up!'} />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default Login;
