import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BackgroundWrapper, Button, InputField, Loader} from '../../components';
import styles from './styles';
import {Formik} from 'formik';

const ContactUsView = ({
  validationSchema,
  initialValues,
  loading,
  onSubmitEmail,
  onSubmitFirstName,
  onSubmitLastName,
  onSubmitPhone,
  onSubmitSubject,
  onPressSendFeedback,
  emailRef,
  lastNameRef,
  phoneRef,
  subjectRef,
  commentsRef,
}) => {
  return (
    <BackgroundWrapper>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onPressSendFeedback}>
        {({values, handleChange, errors, touched, handleSubmit}) => (
          <KeyboardAwareScrollView enableOnAndroid style={styles.mainView}>
            <InputField
              onChangeText={handleChange('first_name')}
              maxLength={30}
              value={values?.first_name}
              returnKeyType="next"
              placeholder="First Name"
              viewStyle={styles.input}
              error={
                touched?.first_name && errors?.first_name && errors?.first_name
              }
              onSubmitEditing={onSubmitFirstName}
            />
            <InputField
              onChangeText={handleChange('last_name')}
              maxLength={30}
              ref={lastNameRef}
              value={values?.last_name}
              returnKeyType="next"
              placeholder="Last Name"
              error={
                touched?.last_name && errors?.last_name && errors?.last_name
              }
              viewStyle={styles.input}
              onSubmitEditing={onSubmitLastName}
            />
            <InputField
              maxLength={35}
              ref={emailRef}
              editable={false}
              value={values?.email}
              keyboardType="email-address"
              returnKeyType="next"
              placeholder="Email"
              error={touched?.email && errors?.email && errors?.email}
              viewStyle={styles.input}
              onSubmitEditing={onSubmitEmail}
            />
            <InputField
              onChangeText={handleChange('phone')}
              ref={phoneRef}
              value={values?.phone}
              maxLength={12}
              keyboardType="phone-pad"
              returnKeyType="next"
              placeholder="Phone"
              error={touched?.phone && errors?.phone && errors?.phone}
              onSubmitEditing={onSubmitPhone}
              viewStyle={styles.input}
            />
            <InputField
              maxLength={30}
              ref={subjectRef}
              value={values?.subject}
              onChangeText={handleChange('subject')}
              returnKeyType="next"
              placeholder="Subject"
              error={touched?.subject && errors?.subject && errors?.subject}
              viewStyle={styles.input}
              onSubmitEditing={onSubmitSubject}
            />
            <InputField
              maxLength={150}
              ref={commentsRef}
              value={values?.message}
              onChangeText={handleChange('message')}
              multiline
              error={touched?.message && errors?.message && errors?.message}
              placeholder="Comments"
              viewStyle={[styles.input, styles.multiline]}
            />
            {loading ? (
              <Loader />
            ) : (
              <Button onPress={handleSubmit} btnText={'SEND FEEDBACK'} />
            )}
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </BackgroundWrapper>
  );
};
export default ContactUsView;
