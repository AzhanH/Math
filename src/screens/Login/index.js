import React, {useEffect, useRef, useState} from 'react';
import {View, TouchableOpacity, Platform} from 'react-native';
import {
  BackgroundWrapper,
  Button,
  InputField,
  Loader,
  Text,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import styles from './styles';
import {useAuth} from '../../hooks';

const Login = ({navigation}) => {
  const {authenticateTeacher} = useAuth();
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(null);

  const passwordRef = useRef(null);
  useEffect(() => {
    if (Platform.OS === 'android') {
      AndroidKeyboardAdjust.setAdjustPan();
    }
  }, []);

  const onPressLogin = async () => {
    try {
      setLoading(true);
      let apiData = [
        {label: 'Email Address', email},
        {label: 'Password', password},
      ];
      await authenticateTeacher(apiData);
      setLoading(false);
    } catch (e) {
      console.log('ERRR', e);
      setLoading(false);
    }
  };
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView style={styles.contentContainer}>
        <InputField
          editable={!loading}
          value={email}
          onChangeText={setEmail}
          maxLength={40}
          viewStyle={styles.input}
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email Address"
        />
        <InputField
          editable={!loading}
          value={password}
          ref={passwordRef}
          onChangeText={setPassword}
          maxLength={16}
          viewStyle={styles.input}
          returnKeyType="send"
          secureTextEntry={true}
          onSubmitEditing={onPressLogin}
          placeholder="Password"
        />
        <TouchableOpacity
          disabled={loading}
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotView}>
          <Text style={styles.forgotText} text="Forgot Password?" />
        </TouchableOpacity>

        {loading ? (
          <Loader />
        ) : (
          <Button btnText={'LOGIN'} onPress={onPressLogin} />
        )}
        <View style={styles.row}>
          <Text style={styles.dontText} text={"Don't Have An Account"} />
          <TouchableOpacity
            disabled={loading}
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
