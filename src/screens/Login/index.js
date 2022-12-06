import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
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
    AndroidKeyboardAdjust.setAdjustPan();
  }, []);
  return (
    <BackgroundWrapper>
      <Header nav={navigation} heading={'LOGIN'} />
      <KeyboardAwareScrollView style={styles.contentContainer}>
        <View style={styles.mainView}>
          <InputField
            keyboardType="email-address"
            returnKeyType="next"
            placeholder="Email Address"
          />
          <InputField
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
        </View>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default Login;
