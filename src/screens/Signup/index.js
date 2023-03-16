/* eslint-disable */
import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity, Platform} from 'react-native';
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
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import styles from './styles';
import {capitalize} from '../../utils/helperFunctions';
import useAuth from '../../hooks/useAuth';
import {Toast} from '../../api/APIHelpers';

const Signup = ({navigation}) => {
  useEffect(() => {
    if (Platform.OS == 'android') {
      AndroidKeyboardAdjust.setAdjustPan();
    }
  }, []);

  const {registerUser} = useAuth();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [role, setRole] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const roleOptions = [
    {name: 'Parent', value: 'parent'},
    {name: 'Teacher', value: 'teacher'},
  ];

  //refs
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const onPressRegister = async () => {
    try {
      setLoading(true);
      let apiData = [
        {label: 'First Name', first_name: firstName},
        {label: 'Last Name', last_name: lastName},
        {label: 'Email Address', email},
        {label: 'Role', role},
        {label: 'Password', password},
        {label: 'Confirm Password', password_confirmation: confirmPassword},
      ];
      let res = await registerUser(apiData);
      Toast.success(res?.messge);
      navigation.replace('ProfileCreation', {token: res?.token});
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('Error', e);
    }
  };

  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid>
        <InputField
          onChangeText={setFirstName}
          value={firstName}
          maxLength={30}
          viewStyle={styles.input}
          returnKeyType="next"
          placeholder="First Name"
          onSubmitEditing={() => lastNameRef.current.focus()}
        />
        <InputField
          onChangeText={setLastName}
          ref={lastNameRef}
          value={lastName}
          maxLength={30}
          viewStyle={styles.input}
          returnKeyType="next"
          placeholder="Last Name"
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <InputField
          onChangeText={setEmail}
          ref={emailRef}
          maxLength={35}
          value={email}
          viewStyle={styles.input}
          returnKeyType="next"
          placeholder="Email Address"
          onSubmitEditing={() => setShowModal(true)}
        />
        <ValuePicker
          value={capitalize(role)}
          onPress={() => setShowModal(true)}
          containerStyle={styles.input}
          placeholder={'Select Role'}
        />
        <InputField
          onChangeText={setPassword}
          ref={passwordRef}
          maxLength={16}
          value={password}
          viewStyle={styles.input}
          secureTextEntry
          returnKeyType="next"
          placeholder="Password"
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
        />
        <InputField
          onChangeText={setConfirmPassword}
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
        <TouchableOpacity
          disabled={loading}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.backText} text={'Back To Login'} />
        </TouchableOpacity>

        <DropDown
          placeholder="Select Role"
          closeModal={() => setShowModal(false)}
          onPressItem={item => {
            setRole(item?.value);
            setTimeout(() => {
              passwordRef.current.focus();
            }, 100);
          }}
          selectedValue={role}
          array={roleOptions}
          visible={showModal}
        />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default Signup;
