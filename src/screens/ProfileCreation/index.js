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
import {useProfile} from '../../hooks';
import images from '../../assets/images';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment/moment';
import {Toast} from '../../api/APIHelpers';
import {useIsFocused} from '@react-navigation/native';

const ProfileCreation = ({navigation, route}) => {
  const focused = useIsFocused();
  const authToken = route?.params?.token;

  useEffect(() => {
    if (Platform.OS === 'android') {
      AndroidKeyboardAdjust.setAdjustPan();
    }

    return clearState;
  }, [focused]);

  const {createProfile} = useProfile();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(null);
  const [type, setType] = useState(null);
  const [grade, setGrade] = useState(null);
  const [school, setSchool] = useState(null);
  const [gender, setGender] = useState(null);

  const [profileData, setProfileData] = useState({
    first_name: null,
    last_name: null,
    email_address: null,
    class_grade_id: null,
    school_id: null,
    add_another_school_name: null,
    city: null,
    state: null,
    zip_code: null,
    gender: null,
    dob: null,
  });

  const classGrades = [
    {value: 1, name: '1st Grade'},
    {value: 2, name: '2nd Grade'},
    {value: 3, name: '3rd Grade'},
  ];
  const schools = [
    {value: 1, name: 'ABC School'},
    {value: 2, name: 'DEF School'},
    {value: 3, name: 'GHI School'},
  ];
  const genders = [
    {value: 1, name: 'Male'},
    {value: 2, name: 'Female'},
  ];

  //refs
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const zipCodRef = useRef(null);

  const onPressCreateProfile = async () => {
    try {
      setLoading(true);
      let apiData = [
        {
          label: 'First Name',
          first_name: profileData?.first_name,
        },
        {
          label: 'Last Name',
          last_name: profileData?.last_name,
        },
        {
          label: 'Email Address',
          email_address: profileData?.email_address,
        },
        {
          label: 'Choose Class Grade',
          class_grade_id: 1,
        },
        {
          label: 'Choose School',
          school_id: 1,
        },
        {
          label: 'Add School,',
          add_another_school_name: profileData?.add_another_school_name,
        },
        {
          label: 'City',
          city: profileData?.city,
        },
        {
          label: 'State',
          state: profileData?.state,
        },
        {
          label: 'Zip Code',
          zip_code: profileData?.zip_code,
        },
        {
          label: 'Gender',
          gender: profileData?.gender,
        },
        {
          label: 'Date Of Birth',
          dob: profileData?.dob,
        },
        {
          label: 'Date Of Birth',
          dob: profileData?.dob,
        },
        {
          label: 'Token',
          authToken,
        },
      ];
      let res = await createProfile(apiData);
      Toast.success(res?.message);
      setLoading(false);
      clearState();
      navigation.navigate('SubscriptionPlans', {token: authToken});
    } catch (e) {
      console.log('Error', e);
      setLoading(false);
    }
  };

  const clearState = () => {
    setProfileData(null);
    setGrade(null);
    setSchool(null);
    setGender(null);
    setType(null);
  };
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid>
        <InputField
          maxLength={25}
          value={profileData?.first_name}
          onChangeText={text =>
            setProfileData({...profileData, first_name: text})
          }
          returnKeyType="next"
          viewStyle={styles.input}
          placeholder="First Name"
          onSubmitEditing={() => lastNameRef.current.focus()}
        />
        <InputField
          ref={lastNameRef}
          maxLength={25}
          value={profileData?.last_name}
          returnKeyType="next"
          onChangeText={text =>
            setProfileData({...profileData, last_name: text})
          }
          viewStyle={styles.input}
          placeholder="Last Name"
          onSubmitEditing={() => emailRef.current.focus()}
        />

        <InputField
          value={profileData?.email_address}
          ref={emailRef}
          maxLength={35}
          onChangeText={text =>
            setProfileData({...profileData, email_address: text})
          }
          keyboardType="email-address"
          returnKeyType="next"
          viewStyle={styles.input}
          placeholder="Email Address"
        />
        <ValuePicker
          value={grade}
          onPress={() => {
            setType('grade');
            setShowModal(true);
          }}
          containerStyle={styles.input}
          placeholder="Chosose Class Grade"
        />
        <ValuePicker
          value={school}
          onPress={() => {
            setType('schools');
            setShowModal(true);
          }}
          containerStyle={styles.input}
          placeholder="Chosose a School"
        />
        <InputField
          value={profileData?.add_another_school_name}
          maxLength={40}
          onChangeText={text =>
            setProfileData({...profileData, add_another_school_name: text})
          }
          returnKeyType="next"
          viewStyle={styles.input}
          placeholder="Add Another School"
          onSubmitEditing={() => cityRef.current.focus()}
        />
        <InputField
          value={profileData?.city}
          ref={cityRef}
          maxLength={35}
          onChangeText={text => setProfileData({...profileData, city: text})}
          returnKeyType="next"
          viewStyle={styles.input}
          placeholder="City"
          onSubmitEditing={() => stateRef.current.focus()}
        />
        <InputField
          value={profileData?.state}
          ref={stateRef}
          maxLength={35}
          onChangeText={text => setProfileData({...profileData, state: text})}
          returnKeyType="next"
          viewStyle={styles.input}
          placeholder="State"
          onSubmitEditing={() => zipCodRef.current.focus()}
        />
        <InputField
          value={profileData?.zip_code}
          ref={zipCodRef}
          maxLength={35}
          onChangeText={text =>
            setProfileData({...profileData, zip_code: text})
          }
          returnKeyType="next"
          viewStyle={styles.input}
          placeholder="Zip Code"
        />
        <ValuePicker
          value={gender}
          onPress={() => {
            setType('gender');
            setShowModal(true);
          }}
          containerStyle={styles.input}
          placeholder="Choose your gender"
        />
        <ValuePicker
          value={profileData?.dob}
          onPress={() => setShowDatePicker(true)}
          icon={images?.calender}
          containerStyle={styles.input}
          placeholder="mm/dd/yyyy"
        />
        {loading ? (
          <Loader />
        ) : (
          <Button btnText={'CREATE PROFILE'} onPress={onPressCreateProfile} />
        )}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SubscriptionPlans', {token: authToken})
          }>
          <Text style={styles.skipText} text={'Skip Now'} />
        </TouchableOpacity>
        <DateTimePickerModal
          onCancel={() => setShowDatePicker(false)}
          onConfirm={date => {
            setProfileData({
              ...profileData,
              dob: moment(date)?.format('YYYY-MM-DD'),
            });
            setShowDatePicker(false);
          }}
          isVisible={showDatePicker}
        />
        <DropDown
          onPressItem={item => {
            if (type === 'grade') {
              setProfileData({...profileData, class_grade_id: item?.value});
              setGrade(item?.name);
            }
            if (type === 'schools') {
              setProfileData({...profileData, school_id: item?.value});
              setSchool(item?.name);
            }
            if (type === 'gender') {
              setProfileData({...profileData, gender: item?.value});
              setGender(item?.name);
            }
          }}
          placeholder={
            type === 'grade'
              ? 'Class Grade'
              : type === 'schools'
              ? 'Choose Schools'
              : 'Select Geneder'
          }
          selectedValue={
            type === 'grade'
              ? profileData?.class_grade_id
              : type === 'schools'
              ? profileData?.school_id
              : profileData?.gender
          }
          closeModal={() => setShowModal(false)}
          array={
            type === 'grade'
              ? classGrades
              : type === 'schools'
              ? schools
              : genders
          }
          visible={showModal}
        />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default ProfileCreation;
