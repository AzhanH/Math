import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import styles from './styles';
import {
  BackgroundWrapper,
  Button,
  InputField,
  Loader,
  Text,
} from '../../components';

const LoginView = ({
  passwordRef,
  onPressSignup,
  onSubmitEmail,
  onPressForgotPassword,
  onPressLogin,
  loading,
  validationSchema,
  initialValues,
}) => {
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView style={styles.contentContainer}>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={onPressLogin}>
          {({values, handleChange, errors, touched, handleSubmit}) => (
            <View>
              <InputField
                value={values?.email}
                onChangeText={handleChange('email')}
                viewStyle={styles.input}
                keyboardType="email-address"
                returnKeyType="next"
                placeholder="Email Address"
                onSubmitEditing={onSubmitEmail}
                error={touched?.email && errors?.email && errors?.email}
              />
              <InputField
                value={values?.password}
                ref={passwordRef}
                onChangeText={handleChange('password')}
                maxLength={16}
                viewStyle={styles.input}
                returnKeyType="send"
                secureTextEntry={true}
                placeholder="Password"
                error={
                  touched?.password && errors?.password && errors?.password
                }
                onSubmitEditing={handleSubmit}
              />
              <TouchableOpacity
                onPress={onPressForgotPassword}
                style={styles.forgotView}>
                <Text style={styles.forgotText} text="Forgot Password?" />
              </TouchableOpacity>
              {loading ? (
                <Loader />
              ) : (
                <Button onPress={handleSubmit} btnText={'LOGIN'} />
              )}
            </View>
          )}
        </Formik>

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
