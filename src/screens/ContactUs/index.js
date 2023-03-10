import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BackgroundWrapper, Button, InputField, Loader} from '../../components';
import {useAuth, useGeneral} from '../../hooks';
import {capitalize} from '../../utils/helperFunctions';
import styles from './styles';

const ContactUs = ({navigation}) => {
  const {user} = useAuth();
  const {contactUs} = useGeneral();

  const [firstName, setFirstName] = useState(
    user?.first_name ? user?.first_name : null,
  );
  const [lastName, setLastName] = useState(
    user?.first_name ? user?.first_name : null,
  );
  const [email, setEmail] = useState(user?.email ? user?.email : null);
  const [phone, setPhone] = useState(user?.phone_no ? user?.phone_no : null);
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState(null);

  //refs
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const subjectRef = useRef(null);
  const commentsRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (!user?.phone_no) {
          setPhone(null);
        }
        setComments(null);
        setSubject(null);
      };
    }, []),
  );

  const onPressSendFeedback = async () => {
    try {
      setLoading(true);
      let apiData = [
        {label: 'First Name', first_name: firstName},
        {label: 'Last Name', last_name: lastName},
        {label: 'Email Address', email},
        {label: 'Phone', phone},
        {label: 'Subject', subjects: subject},
        {label: 'Message', message: comments},
      ];
      const res = await contactUs(apiData);
      navigation.goBack();
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('Error');
    }
  };
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView enableOnAndroid style={styles.mainView}>
        <InputField
          maxLength={30}
          onChangeText={setFirstName}
          editable={!user?.first_name ? true : false}
          value={capitalize(firstName)}
          returnKeyType="next"
          placeholder="First Name"
          viewStyle={styles.input}
          onSubmitEditing={() => lastNameRef.current.focus()}
        />
        <InputField
          maxLength={30}
          ref={lastNameRef}
          onChangeText={setLastName}
          editable={!user?.last_name ? true : false}
          value={capitalize(lastName)}
          returnKeyType="next"
          placeholder="Last Name"
          viewStyle={styles.input}
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <InputField
          maxLength={35}
          ref={emailRef}
          editable={!user?.email ? true : false}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email"
          viewStyle={styles.input}
          onSubmitEditing={() => phoneRef.current.focus()}
        />
        <InputField
          ref={phoneRef}
          value={phone}
          maxLength={12}
          onChangeText={setPhone}
          editable={!user?.phone_no ? true : false}
          keyboardType="phone-pad"
          returnKeyType="next"
          placeholder="Phone"
          onSubmitEditing={() => subjectRef.current.focus()}
          viewStyle={styles.input}
        />
        <InputField
          maxLength={30}
          ref={subjectRef}
          value={subject}
          onChangeText={setSubject}
          returnKeyType="next"
          placeholder="Subject"
          viewStyle={styles.input}
          onSubmitEditing={() => commentsRef.current.focus()}
        />
        <InputField
          maxLength={150}
          ref={commentsRef}
          value={comments}
          onChangeText={setComments}
          multiline
          placeholder="Comments"
          viewStyle={[styles.input, styles.multiline]}
        />
        {loading ? (
          <Loader />
        ) : (
          <Button onPress={onPressSendFeedback} btnText={'SEND FEEDBACK'} />
        )}
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default ContactUs;
