import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {
  BackgroundWrapper,
  Button,
  InputField,
  Loader,
  Text,
} from '../../components';

const LoginView = ({
  email,
  password,
  passwordRef,
  onPressSignup,
  onSubmitEmail,
  onPressForgotPassword,
  onChangePassword,
  onChangeEmail,
  onPressLogin,
  loading,
}) => {
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView style={styles.contentContainer}>
        <InputField
          value={email}
          onChangeText={onChangeEmail}
          viewStyle={styles.input}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email Address"
          onSubmitEditing={onSubmitEmail}
        />
        <InputField
          value={password}
          ref={passwordRef}
          onChangeText={onChangePassword}
          maxLength={16}
          viewStyle={styles.input}
          returnKeyType="send"
          secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity
          onPress={onPressForgotPassword}
          style={styles.forgotView}>
          <Text style={styles.forgotText} text="Forgot Password?" />
        </TouchableOpacity>
        {loading ? (
          <Loader />
        ) : (
          <Button onPress={onPressLogin} btnText={'LOGIN'} />
        )}
        <View style={styles.row}>
          <Text style={styles.dontText} text={"Don't Have An Account"} />
          <TouchableOpacity onPress={onPressSignup} style={styles.marginLeft}>
            <Text style={styles.signUpText} text={'Sign Up!'} />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default LoginView;
