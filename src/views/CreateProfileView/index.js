import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  BackgroundWrapper,
  Button,
  DatePicker,
  DropDown,
  InputField,
  Loader,
  Text,
  ValuePicker,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {Formik, Field} from 'formik';

import FullScreenLoader from '../../components/FullScreeLoader';

const CreateProfileView = ({
  validationSchema,
  initialValues,
  onPressDropDown,
  dropDownFor,
  showDropDown,
  dropDownArray,
  closeDropDown,
  loading,
  fieldName,
  onPressConfirmDate,
  onPressDropDownItem,
  createLoading,
  onPressCreate,
  onPressSkip,
}) => {
  return (
    <BackgroundWrapper>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onPressCreate}>
        {({values, handleChange, errors, touched, handleSubmit}) => (
          <KeyboardAwareScrollView
            contentContainerStyle={styles.contentContainer}
            enableOnAndroid>
            <InputField
              value={values?.first_name}
              onChangeText={handleChange('first_name')}
              maxLength={25}
              returnKeyType="next"
              viewStyle={styles.input}
              placeholder="First Name"
              error={
                touched?.first_name && errors?.first_name && errors?.first_name
              }
            />
            <InputField
              value={values?.last_name}
              maxLength={25}
              returnKeyType="next"
              onChangeText={handleChange('last_name')}
              viewStyle={styles.input}
              placeholder="Last Name"
              error={
                touched?.last_name && errors?.last_name && errors?.last_name
              }
            />

            <InputField
              value={values?.email}
              editable={false}
              maxLength={35}
              keyboardType="email-address"
              returnKeyType="next"
              viewStyle={styles.input}
              error={touched?.email && errors?.email && errors?.email}
              placeholder="Email Address"
            />
            <ValuePicker
              value={
                values?.class_grade_id &&
                JSON.parse(values?.class_grade_id)?.name
              }
              onPress={() => onPressDropDown('Grades')}
              containerStyle={styles.input}
              placeholder="Chosose Class Grade"
              error={
                touched?.class_grade_id &&
                errors?.class_grade_id &&
                errors?.class_grade_id
              }
            />

            <ValuePicker
              value={values?.school_id && JSON.parse(values?.school_id)?.name}
              onPress={() => onPressDropDown('Schools')}
              containerStyle={styles.input}
              placeholder="Chosose a School"
              error={
                touched?.school_id && errors?.school_id && errors?.school_id
              }
            />
            <InputField
              onChangeText={handleChange('school_name')}
              maxLength={40}
              returnKeyType="next"
              viewStyle={styles.input}
              placeholder="Add Another School"
            />
            <ValuePicker
              value={values?.country_id && JSON.parse(values?.country_id)?.name}
              onPress={() => onPressDropDown('Countries')}
              containerStyle={styles.input}
              placeholder="Select Country"
              error={
                touched?.country_id && errors?.country_id && errors?.country_id
              }
            />
            <ValuePicker
              value={values?.state_id && JSON.parse(values?.state_id)?.name}
              onPress={() => onPressDropDown('States', values?.country_id)}
              containerStyle={styles.input}
              placeholder="Select State"
              error={touched?.state_id && errors?.state_id && errors?.state_id}
            />
            <ValuePicker
              value={values?.city_id && JSON.parse(values?.city_id)?.name}
              onPress={() => onPressDropDown('Cities', values?.state_id)}
              containerStyle={styles.input}
              placeholder="Select City"
              error={touched?.city_id && errors?.city_id && errors?.city_id}
            />
            <InputField
              onChangeText={handleChange('zip_code')}
              maxLength={8}
              returnKeyType="next"
              viewStyle={styles.input}
              placeholder="Zip Code"
              error={touched?.zip_code && errors?.zip_code && errors?.zip_code}
            />
            <ValuePicker
              value={values?.gender && JSON.parse(values?.gender)?.name}
              onPress={() => onPressDropDown('Genders')}
              containerStyle={styles.input}
              placeholder="Choose your gender"
              error={touched?.gender && errors?.gender && errors?.gender}
            />
            <Field name={'date_of_birth'}>
              {({form}) => (
                <DatePicker
                  max={new Date()}
                  value={values?.date_of_birth && values?.date_of_birth}
                  onPressConfirm={date => onPressConfirmDate(date, form)}
                  mode="date"
                  placeholder="yyyy/mm/dd"
                  containerStyle={styles.datePicker}
                  error={
                    touched?.date_of_birth &&
                    errors?.date_of_birth &&
                    errors?.date_of_birth
                  }
                />
              )}
            </Field>
            {createLoading ? (
              <Loader />
            ) : (
              <Button onPress={handleSubmit} btnText={'CREATE PROFILE'} />
            )}
            <TouchableOpacity onPress={onPressSkip}>
              <Text style={styles.skipText} text={'Skip Now'} />
            </TouchableOpacity>

            <Field name={fieldName}>
              {({form}) => (
                <DropDown
                  onPressItem={item => onPressDropDownItem(item, form)}
                  closeModal={closeDropDown}
                  visible={showDropDown}
                  placeholder={dropDownFor}
                  array={dropDownArray}
                />
              )}
            </Field>
            <FullScreenLoader visible={loading} />
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </BackgroundWrapper>
  );
};
export default CreateProfileView;
