import React from 'react';
import {View} from 'react-native';
import {BackgroundWrapper, Button, InputField, Loader} from '../../components';
import styles from './styles';
import {Formik} from 'formik';

const ChangePasswordView = ({
  confimrPasswordRef,
  newPassworRef,
  onSubmitNewPassword,
  onSubmitCurrentPasswrod,
  initialValues,
  updatePassword,
  validationSchema,
  isLoading,
}) => {
  return (
    <BackgroundWrapper>
      <View style={styles.mainView}>
        <Formik
          onSubmit={updatePassword}
          validationSchema={validationSchema}
          initialValues={initialValues}>
          {({values, handleChange, errors, touched, handleSubmit}) => (
            <View>
              <InputField
                value={values?.current_password}
                onChangeText={handleChange('current_password')}
                placeholder="Current Password"
                viewStyle={styles.inputView}
                secureTextEntry
                onSubmitEditing={onSubmitCurrentPasswrod}
                error={
                  touched?.current_password &&
                  errors?.current_password &&
                  errors?.current_password
                }
              />
              <InputField
                ref={newPassworRef}
                value={values?.new_password}
                onChangeText={handleChange('new_password')}
                placeholder="New Password"
                viewStyle={styles.inputView}
                secureTextEntry
                onSubmitEditing={onSubmitNewPassword}
                error={
                  touched?.new_password &&
                  errors?.new_password &&
                  errors?.new_password
                }
              />
              <InputField
                ref={confimrPasswordRef}
                value={values?.confirm_password}
                onChangeText={handleChange('confirm_password')}
                placeholder="Confirm Password"
                viewStyle={styles.inputView}
                onSubmitEditing={handleSubmit}
                secureTextEntry
                error={
                  touched?.confirm_password &&
                  errors?.confirm_password &&
                  errors?.confirm_password
                }
              />
              {isLoading ? (
                <Loader />
              ) : (
                <Button onPress={handleSubmit} btnText={'UPDATE'} />
              )}
            </View>
          )}
        </Formik>
      </View>
    </BackgroundWrapper>
  );
};
export default ChangePasswordView;
