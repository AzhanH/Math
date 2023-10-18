import React from 'react';
import {
  BackgroundWrapper,
  InputField,
  ValuePicker,
  CustomModal,
  Button,
  DatePicker,
  Text,
  DropDown,
  Loader,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import images from '../../assets/images';
import {View, Image} from 'react-native';
import {Formik, Field} from 'formik';

const InviteStudentView = ({
  initialValues,
  validationSchema,
  onPressSendInvite,
  onSubmitFirstName,
  onSubmitLastName,
  onSubmitUserName,
  lastNameRef,
  userNameRef,
  emailRef,
  modalRef,
  onPressSchool,
  onPressGrade,
  onSelectItem,
  gender,
  onPressGender,
  dropDownFor,
  showDropDown,
  closeModal,
  schools,
  classes,
  onSelectDate,
  loading,
  onPressOk,
}) => {
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid>
        <Formik
          onSubmit={onPressSendInvite}
          validationSchema={validationSchema}
          initialValues={initialValues}>
          {({values, handleChange, errors, touched, handleSubmit}) => (
            <View>
              <InputField
                value={values?.first_name}
                viewStyle={styles.input}
                placeholder="First Name"
                onChangeText={handleChange('first_name')}
                retunKeyType="next"
                returnKeyType="next"
                error={
                  touched?.first_name &&
                  errors?.first_name &&
                  errors?.first_name
                }
                onSubmitEditing={onSubmitFirstName}
              />
              <InputField
                value={values?.last_name}
                ref={lastNameRef}
                onChangeText={handleChange('last_name')}
                viewStyle={styles.input}
                placeholder="Last Name"
                retunKeyType="next"
                error={
                  touched?.last_name && errors?.last_name && errors?.last_name
                }
                onSubmitEditing={onSubmitLastName}
              />
              <InputField
                onChangeText={handleChange('user_name')}
                value={values?.user_name}
                ref={userNameRef}
                placeholder="User Name"
                viewStyle={styles.input}
                retunKeyType="next"
                error={
                  touched?.user_name && errors?.user_name && errors?.user_name
                }
                onSubmitEditing={onSubmitUserName}
              />
              <View style={styles.row}>
                <Image style={styles.infoImage} source={images.info} />
                <Text
                  style={styles.warningText}
                  text={
                    "No more than two consecutive characters from the student's first or last name may be used in the student's Username."
                  }
                />
              </View>
              <InputField
                onChangeText={handleChange('email')}
                value={values?.email}
                ref={emailRef}
                viewStyle={styles.input}
                placeholder="Email Address"
                retunKeyType="next"
                error={touched?.email && errors?.email && errors?.email}
              />
              <ValuePicker
                value={
                  values?.class_grade_id &&
                  JSON.parse(values?.class_grade_id)?.name
                }
                onPress={onPressGrade}
                placeholder="Choose Class Grade"
                containerStyle={styles.input}
                error={
                  touched?.class_grade_id &&
                  errors?.class_grade_id &&
                  errors?.class_grade_id
                }
              />
              <ValuePicker
                value={values?.school_id && JSON.parse(values?.school_id)?.name}
                onPress={onPressSchool}
                placeholder="Choose School"
                containerStyle={styles.input}
                error={
                  touched?.school_id && errors?.school_id && errors?.school_id
                }
              />
              <ValuePicker
                value={values?.gender && JSON.parse(values?.gender)?.name}
                onPress={onPressGender}
                retunKeyType="next"
                containerStyle={styles.input}
                placeholder="Choose Your Gender"
                error={touched?.gender && errors?.gender && errors?.gender}
              />
              <Field
                name={
                  dropDownFor === 'Schools'
                    ? 'school_id'
                    : dropDownFor == 'class_grade_id'
                    ? 'class_grade_id'
                    : 'gender'
                }>
                {({form}) => (
                  <DropDown
                    array={
                      dropDownFor === 'Schools'
                        ? schools
                        : dropDownFor === 'Grades'
                        ? classes
                        : gender
                    }
                    selectedValue={
                      dropDownFor === 'Schools'
                        ? values?.school_id &&
                          JSON.parse(values?.school_id).value
                        : dropDownFor === 'Grades'
                        ? values?.class_grade_id &&
                          JSON.parse(values?.class_grade_id).value
                        : values?.gender && JSON.parse(values?.gender).value
                    }
                    onPressItem={item => onSelectItem(form, item, dropDownFor)}
                    closeModal={closeModal}
                    placeholder={dropDownFor}
                    visible={showDropDown}
                  />
                )}
              </Field>
              <Field name="dob">
                {({form}) => (
                  <DatePicker
                    value={values?.dob}
                    onPressConfirm={date => onSelectDate(form, date)}
                    containerStyle={styles.input}
                    placeholder={'DOB'}
                    mode={'date'}
                    error={touched?.dob && errors?.dob && errors?.dob}
                  />
                )}
              </Field>
              {loading ? (
                <Loader />
              ) : (
                <Button onPress={handleSubmit} btnText={'SEND INVITE'} />
              )}
            </View>
          )}
        </Formik>

        <CustomModal
          onPressOk={onPressOk}
          ref={modalRef}
          image={images.success}
          heading={'success'}
          subHeading={"The invite has been sent to the student's email."}
        />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default InviteStudentView;
