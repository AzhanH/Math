import React, {useRef, useState} from 'react';
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
import useAuth from '../../hooks/useAuth';
import useGeneral from '../../hooks/useGeneral';
import {capitalize} from '../../utils/helperFunctions';
import styles from './styles';

const EditProfile = ({route}) => {
  const {user} = useAuth();
  const {general} = useGeneral();

  const [firstName, setFirstName] = useState(user?.first_name);
  const [lastName, setLastName] = useState(user?.last_name);
  const [userName, setUserName] = useState(user?.user_name);
  const [phone, setPhone] = useState(user?.phone_no);
  const [email, setEmail] = useState(user?.email);
  const [classGrade, setClassGrade] = useState({id: null, name: null});
  const [schoolName, setSchoolName] = useState({id: null, name: null});
  const [anotherSchool, setAnotherSchool] = useState(null);
  const [city, setCity] = useState(user?.city);

  //modalsStates

  const [gradeModal, setGradeModal] = useState(false);
  const [schoolModal, setSchoolModal] = useState(false);

  // refs
  const modalRef = useRef(null);
  const lastNameRef = useRef(null);
  const userNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const anotherRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);

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
              onChangeText={setFirstName}
              viewStyle={styles.reducedInput}
              placeholder="First Name"
              returnKeyType="next"
              onSubmitEditing={() => lastNameRef.current.focus()}
            />
            <InputField
              maxLength={15}
              ref={lastNameRef}
              onChangeText={setLastName}
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
            onChangeText={setUserName}
            value={userName}
            placeholder="User Name"
            viewStyle={styles.input}
            returnKeyType="next"
            onSubmitEditing={() => phoneRef.current.focus()}
          />
          <View style={styles.row}>
            <InputField
              maxLength={13}
              onChangeText={setPhone}
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
              onChangeText={setEmail}
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
              onPress={() => setGradeModal(true)}
              containerStyle={styles.reducedInput}
              placeholder="Class Grade"
            />
            <ValuePicker
              value={schoolName?.name && capitalize(schoolName?.name)}
              onPress={() => setSchoolModal(true)}
              containerStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="School Name"
            />
          </View>
          <View style={styles.row}>
            <InputField
              ref={anotherRef}
              maxLength={20}
              value={anotherSchool}
              onChangeText={setAnotherSchool}
              viewStyle={styles.reducedInput}
              placeholder="Add Another School"
              returnKeyType="next"
              onSubmitEditing={() => cityRef.current.focus()}
            />
            <InputField
              ref={cityRef}
              maxLength={20}
              value={city}
              onChangeText={setCity}
              returnKeyType="next"
              viewStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="City"
            />
          </View>
          <View style={styles.row}>
            <InputField viewStyle={styles.reducedInput} placeholder="State" />
            <InputField
              viewStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="Zip Code"
            />
          </View>
          <View style={styles.row}>
            <ValuePicker
              containerStyle={styles.reducedInput}
              placeholder="Choose Your Gender"
            />
            <InputField
              viewStyle={[styles.reducedInput, styles.inputSeprator]}
              placeholder="DOB"
            />
          </View>
          <Button onPress={() => modalRef.current.show()} btnText={'UPDATE'} />
        </View>

        <DropDown
          selectedValue={classGrade?.id}
          onPressItem={item => {
            setClassGrade({name: item?.name, id: item?.value});
            setSchoolModal(true);
          }}
          array={general?.classes?.map(v => ({
            ...v,
            name: v?.class_grade,
            value: v?.id,
          }))}
          placeholder={'Select Grade'}
          closeModal={() => setGradeModal(false)}
          visible={gradeModal}
        />

        <DropDown
          selectedValue={schoolName?.id}
          onPressItem={item => {
            setSchoolName({name: item?.name, id: item?.value});
            setTimeout(() => {
              anotherRef.current.focus();
            }, 200);
          }}
          array={general?.schools?.map(v => ({
            ...v,
            value: v?.id,
          }))}
          placeholder={'Select School Name'}
          closeModal={() => setSchoolModal(false)}
          visible={schoolModal}
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
export default EditProfile;
