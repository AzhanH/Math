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
} from '../../components';
import {capitalize} from '../../utils/helperFunctions';
import styles from './styles';

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
  school,
  anotherRef,
  cityRef,
  emailRef,
  lastNameRef,
  modalRef,
  phoneRef,
  stateRef,
  userNameRef,
  onChangeEmail,
  onChangeFirstName,
  onChangeLastName,
  onChangePhone,
  onChangeUserName,
  onPressValuePicker,
  closeDropDown,
  dropDownList,
}) => {
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView enableOnAndroid style={styles.mainView}>
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
              onSubmitEditing={() => lastNameRef.current.focus()}
            />
            <InputField
              maxLength={15}
              ref={lastNameRef}
              onChangeText={onChangeLastName}
              value={lastName}
              viewStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="Last Name"
              returnKeyType="next"
              onSubmitEditing={() => userNameRef.current.focus()}
            />
          </View>
          <InputField
            maxLength={10}
            ref={userNameRef}
            onChangeText={onChangeUserName}
            value={userName}
            placeholder="User Name"
            viewStyle={styles.input}
            returnKeyType="next"
            onSubmitEditing={() => phoneRef.current.focus()}
          />
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
              onSubmitEditing={() => setGradeModal(true)}
            />
          </View>
          <View style={styles.row}>
            <ValuePicker
              value={classGrade?.name && capitalize(classGrade?.name)}
              onPress={() => onPressValuePicker('Grade')}
              containerStyle={styles.reducedInput}
              placeholder="Class Grade"
            />
            <ValuePicker
              onPress={() => onPressValuePicker('Schools')}
              containerStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="School Name"
            />
          </View>
          <View style={styles.row}>
            <InputField
              ref={anotherRef}
              maxLength={20}
              viewStyle={styles.reducedInput}
              placeholder="Add Another School"
              returnKeyType="next"
              onSubmitEditing={() => cityRef.current.focus()}
            />

            <ValuePicker
              onPress={() => onPressValuePicker('Country')}
              containerStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="Country"
            />
          </View>
          <View style={styles.row}>
            <ValuePicker
              onPress={() => onPressValuePicker('State')}
              containerStyle={[styles.reducedInput]}
              placeholder="State"
            />
            <ValuePicker
              onPress={() => onPressValuePicker('City')}
              containerStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="City"
            />
          </View>
          <View style={styles.row}>
            <InputField
              ref={anotherRef}
              maxLength={20}
              viewStyle={styles.reducedInput}
              placeholder="Zip Code"
              returnKeyType="next"
              onSubmitEditing={() => cityRef.current.focus()}
            />

            <InputField
              viewStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="DOB"
            />
          </View>
          <ValuePicker
            containerStyle={styles.reducedInput}
            placeholder="Choose Your Gender"
          />
          <Button onPress={() => modalRef.current.show()} btnText={'UPDATE'} />
        </View>

        <DropDown
          // selectedValue={schoolName?.id}
          // onPressItem={item => {
          //   setSchoolName({name: item?.name, id: item?.value});
          //   setTimeout(() => {
          //     anotherRef.current.focus();
          //   }, 200);
          // }}

          array={dropDownList}
          placeholder={dropDownFor}
          closeModal={closeDropDown}
          visible={showDropDown}
        />
        <CustomModal
          ref={modalRef}
          heading={'Update Alert'}
          subHeading={'Student account details have been updated '}
          image={images.success}
        />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default EditProfileView;
