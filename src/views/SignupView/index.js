/* eslint-disable */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  BackgroundWrapper,
  Button,
  DropDown,
  InputField,
  Loader,
  Text,
  ValuePicker,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {Formik, Field} from 'formik';
const Signup = ({
  onSubmitFirstName,
  lastNameRef,
  onSubmitLastName,
  emailRef,
  onPressRole,
  onSubmitPassword,
  passwordRef,
  onPressRegister,
  showModal,
  roleOptions,
  onSelectRole,
  closeModal,
  onPressLogin,
  confirmPasswordRef,
  loading,
  validationSchema,
  initialValues,
}) => {
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid>
        <Formik
          initialValues={initialValues}
          onSubmit={onPressRegister}
          validationSchema={validationSchema}>
          {({values, handleChange, errors, touched, handleSubmit}) => (
            <View>
              <InputField
                onChangeText={handleChange('first_name')}
                value={values?.first_name}
                viewStyle={styles.input}
                returnKeyType="next"
                placeholder="First Name"
                error={errors?.first_name}
                onSubmitEditing={onSubmitFirstName}
              />
              <InputField
                ref={lastNameRef}
                onChangeText={handleChange('last_name')}
                value={values?.last_name}
                viewStyle={styles.input}
                returnKeyType="next"
                placeholder="Last Name"
                error={
                  touched?.last_name && errors?.last_name && errors?.last_name
                }
                onSubmitEditing={onSubmitLastName}
              />

              <InputField
                onChangeText={handleChange('email')}
                ref={emailRef}
                value={values?.email}
                viewStyle={styles.input}
                returnKeyType="next"
                placeholder="Email Address"
                error={touched?.email && errors?.email && errors?.email}
                onSubmitEditing={onPressRole}
              />
              <ValuePicker
                value={values?.role && JSON.parse(values?.role)?.name}
                onPress={onPressRole}
                containerStyle={styles.input}
                placeholder={'Select Role'}
                error={touched?.role && errors?.role && errors?.role}
              />
              <InputField
                onChangeText={handleChange('password')}
                ref={passwordRef}
                maxLength={16}
                value={values?.password}
                viewStyle={styles.input}
                secureTextEntry
                returnKeyType="next"
                placeholder="Password"
                error={
                  touched?.password && errors?.password && errors?.password
                }
                onSubmitEditing={onSubmitPassword}
              />
              <InputField
                onChangeText={handleChange('confirm_password')}
                ref={confirmPasswordRef}
                maxLength={16}
                value={values?.confirm_password}
                viewStyle={styles.input}
                secureTextEntry
                returnKeyType="send"
                placeholder="Confirm Password"
                error={
                  touched?.confirm_password &&
                  errors?.confirm_password &&
                  errors?.confirm_password
                }
                onSubmitEditing={handleSubmit}
              />
              {loading ? (
                <Loader />
              ) : (
                <Button onPress={handleSubmit} btnText={'REGISTER'} />
              )}
              <Field name="role">
                {({form}) => (
                  <DropDown
                    placeholder="Select Role"
                    closeModal={closeModal}
                    onPressItem={item => onSelectRole(form, item)}
                    selectedValue={
                      values?.role && JSON.parse(values?.role)?.value
                    }
                    array={roleOptions}
                    visible={showModal}
                  />
                )}
              </Field>
            </View>
          )}
        </Formik>

        <TouchableOpacity onPress={onPressLogin}>
          <Text style={styles.backText} text={'Back To Login'} />
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default Signup;
