import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import images from '../../assets/images';
import {
  BackgroundWrapper,
  InputField,
  ValuePicker,
  Button,
  CustomModal,
  DropDown,
  DatePicker,
  Loader,
} from '../../components';
import {capitalize} from '../../utils/helperFunctions';
import styles from './styles';
import FullScreenLoader from '../../components/FullScreeLoader';

const EditProfileView = ({
  firstName,
  lastName,
  email,
  phone,
  userName,
  showDropDown,
  dropDownFor,
  city,
  classGrade,
  country,
  state,
  school,
  emailRef,
  lastNameRef,
  modalRef,
  phoneRef,
  userNameRef,
  onChangeEmail,
  onChangeFirstName,
  onChangeLastName,
  onChangePhone,
  onChangeUserName,
  onPressValuePicker,
  closeDropDown,
  dropDownList,
  onPressDropDownItem,
  dropDownValue,
  loading,
  gender,
  onSubmitFirstName,
  onSubmitLastName,
  onSubmitUserName,
  isStudent,
  onChangeZip,
  zipCode,
  dob,
  anotherSchool,
  onChangeAnotherSchool,
  onPressConfirmDate,
  onPressUpdate,
  onPressOk,
  updateLoading,
  getLoading,
}) => {
  return (
    <BackgroundWrapper>
      {getLoading ? (
        <Loader />
      ) : (
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableOnAndroid
          style={styles.mainView}>
          <View style={styles.profileView}>
            <Image style={styles.studentImage} source={images.childImage1} />
            <TouchableOpacity style={styles.greenCircle}>
              <Image style={styles.camera} source={images.camera} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputView}>
            <View style={styles.row}>
              <InputField
                maxLength={15}
                value={firstName}
                onChangeText={onChangeFirstName}
                viewStyle={styles.reducedInput}
                placeholder="First Name"
                returnKeyType="next"
                onSubmitEditing={onSubmitFirstName}
              />
              <InputField
                maxLength={15}
                ref={lastNameRef}
                onChangeText={onChangeLastName}
                value={lastName}
                viewStyle={[styles.reducedInput, styles.inputSeprator]}
                placeholder="Last Name"
                returnKeyType="next"
                onSubmitEditing={onSubmitLastName}
              />
            </View>
            {isStudent && (
              <InputField
                maxLength={10}
                ref={userNameRef}
                onChangeText={onChangeUserName}
                value={userName}
                placeholder="User Name"
                viewStyle={styles.input}
                returnKeyType="next"
                onSubmitEditing={onSubmitUserName}
              />
            )}
            <View style={styles.row}>
              <InputField
                maxLength={13}
                onChangeText={onChangePhone}
                ref={phoneRef}
                value={phone}
                keyboardType="phone-pad"
                viewStyle={styles.reducedInput}
                placeholder="Phone Number"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current.focus()}
              />
              <InputField
                maxLength={40}
                ref={emailRef}
                onChangeText={onChangeEmail}
                value={email}
                viewStyle={[styles.reducedInput, styles.inputSeprator]}
                placeholder="Email"
                returnKeyType="next"
              />
            </View>
            <View style={styles.row}>
              <ValuePicker
                value={classGrade && capitalize(classGrade?.name)}
                onPress={() => onPressValuePicker('Grade')}
                containerStyle={styles.reducedInput}
                placeholder="Class Grade"
              />
              <ValuePicker
                value={school && capitalize(school?.name)}
                onPress={() => onPressValuePicker('Schools')}
                containerStyle={[styles.reducedInput, styles.inputSeprator]}
                placeholder="School Name"
              />
            </View>
            <View style={styles.row}>
              <InputField
                value={anotherSchool}
                onChangeText={onChangeAnotherSchool}
                maxLength={20}
                viewStyle={styles.reducedInput}
                placeholder="Add Another School"
                returnKeyType="next"
              />

              <ValuePicker
                value={country && capitalize(country?.name)}
                onPress={() => onPressValuePicker('Country')}
                containerStyle={[styles.reducedInput, styles.inputSeprator]}
                placeholder="Country"
              />
            </View>
            <View style={styles.row}>
              <ValuePicker
                value={state && capitalize(state?.name)}
                onPress={() => onPressValuePicker('State')}
                containerStyle={[styles.reducedInput]}
                placeholder="State"
              />
              <ValuePicker
                value={city && capitalize(city?.name)}
                onPress={() => onPressValuePicker('City')}
                containerStyle={[styles.reducedInput, styles.inputSeprator]}
                placeholder="City"
              />
            </View>
            <View style={styles.row}>
              <InputField
                value={zipCode}
                onChangeText={onChangeZip}
                maxLength={20}
                viewStyle={styles.reducedInput}
                placeholder="Zip Code"
                returnKeyType="next"
              />

              <DatePicker
                onPressConfirm={onPressConfirmDate}
                value={dob}
                max={new Date()}
                placeholder="DOB"
                containerStyle={[styles.reducedInput, styles.inputSeprator]}
              />
            </View>
            <ValuePicker
              value={gender && capitalize(gender)}
              onPress={() => onPressValuePicker('Gender')}
              containerStyle={styles.reducedInput}
              placeholder="Choose Your Gender"
            />
            {updateLoading ? (
              <Loader />
            ) : (
              <Button onPress={onPressUpdate} btnText={'UPDATE'} />
            )}
          </View>

          <DropDown
            selectedValue={dropDownValue}
            onPressItem={onPressDropDownItem}
            array={dropDownList}
            placeholder={dropDownFor}
            closeModal={closeDropDown}
            visible={showDropDown}
          />
          <CustomModal
            onPressOk={onPressOk}
            ref={modalRef}
            heading={'Update Alert'}
            subHeading={'Student account details have been updated '}
            image={images.success}
          />
          <FullScreenLoader visible={loading} />
        </KeyboardAwareScrollView>
      )}
    </BackgroundWrapper>
  );
};
export default EditProfileView;
