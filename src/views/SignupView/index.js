/* eslint-disable */
import React from 'react';
import {TouchableOpacity} from 'react-native';
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

const Signup = ({
  firstName,
  onChangeFirstName,
  onSubmitFirstName,
  lastName,
  lastNameRef,
  onChangeLastName,
  onSubmitLastName,
  onChangeEmail,
  email,
  emailRef,
  onPressRole,
  role,
  password,
  onSubmitPassword,
  onChangePassword,
  passwordRef,
  confirmPassword,
  onChangeConfirmPassword,
  onPressRegister,
  showModal,
  roleOptions,
  onSelectRole,
  closeModal,
  onPressLogin,
  confirmPasswordRef,
  loading,
}) => {
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid>
        <InputField
          onChangeText={onChangeFirstName}
          value={firstName}
          viewStyle={styles.input}
          returnKeyType="next"
          placeholder="First Name"
          onSubmitEditing={onSubmitFirstName}
        />
        <InputField
          ref={lastNameRef}
          onChangeText={onChangeLastName}
          value={lastName}
          viewStyle={styles.input}
          returnKeyType="next"
          placeholder="Last Name"
          onSubmitEditing={onSubmitLastName}
        />
        <InputField
          onChangeText={onChangeEmail}
          ref={emailRef}
          value={email}
          viewStyle={styles.input}
          returnKeyType="next"
          placeholder="Email Address"
          onSubmitEditing={onPressRole}
        />
        <ValuePicker
          value={role?.name}
          onPress={onPressRole}
          containerStyle={styles.input}
          placeholder={'Select Role'}
        />
        <InputField
          onChangeText={onChangePassword}
          ref={passwordRef}
          maxLength={16}
          value={password}
          viewStyle={styles.input}
          secureTextEntry
          returnKeyType="next"
          placeholder="Password"
          onSubmitEditing={onSubmitPassword}
        />
        <InputField
          onChangeText={onChangeConfirmPassword}
          ref={confirmPasswordRef}
          maxLength={16}
          value={confirmPassword}
          viewStyle={styles.input}
          secureTextEntry
          returnKeyType="send"
          placeholder="Confirm Password"
          onSubmitEditing={onPressRegister}
        />
        {loading ? (
          <Loader />
        ) : (
          <Button onPress={onPressRegister} btnText={'REGISTER'} />
        )}
        <TouchableOpacity onPress={onPressLogin}>
          <Text style={styles.backText} text={'Back To Login'} />
        </TouchableOpacity>

        <DropDown
          placeholder="Select Role"
          closeModal={closeModal}
          onPressItem={item => onSelectRole(item)}
          selectedValue={role ? role?.value : role}
          array={roleOptions}
          visible={showModal}
        />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default Signup;
