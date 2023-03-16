import React, {useRef, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import images from '../../assets/images';
import {
  BackgroundWrapper,
  DatePicker,
  InputField,
  TableView,
  Text,
  Button,
  ValuePicker,
  DropDown,
} from '../../components';
import {
  countryData,
  gradeData,
  modeData,
  options,
  playData,
  stateDate,
  teamData,
} from '../../config';
import styles from './styles';
import {launchImageLibrary} from 'react-native-image-picker';
import moment from 'moment/moment';
const CreateAndEditContest = ({route}) => {
  const type = route?.params?.type;

  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [contestStartDate, setContestStartDate] = useState(null);
  const [contestEndDate, setContestEndDate] = useState(null);
  const [contestStartTime, setContestStartTime] = useState(null);
  const [levelOfPlayModal, setLevelOfPlayModal] = useState(false);
  const [modeModal, setModeModal] = useState(false);
  const [gradeModal, setGradeModal] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [countryModal, setCountryModal] = useState(false);
  const [teamTypeModal, setTeamTypeModal] = useState(false);

  const selectImage = async () => {
    try {
      let options = {
        mediaType: 'photo',
      };
      const result = await launchImageLibrary(options);
      let _res = result?.assets[0];
      let imageObj = {
        uri: _res?.uri,
        type: _res?.type,
        name: _res?.fileName,
      };
      setImage(imageObj);
      descRef?.current?.focus();
    } catch (e) {
      console.log('EEE', e);
    }
  };

  const descRef = useRef(null);
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView enableOnAndroid style={styles.contentContainer}>
        <InputField
          value={title}
          maxLength={30}
          onChangeText={setTitle}
          viewStyle={styles.input}
          returnKeyType="next"
          placeholder="Contest Title"
          onSubmitEditing={selectImage}
        />
        <TouchableOpacity onPress={selectImage} style={styles.uploadContainer}>
          {image ? (
            <View>
              <Image style={styles.contestImage} source={{uri: image?.uri}} />
              <TouchableOpacity
                onPress={() => setImage(null)}
                style={styles.removeView}>
                <Image style={styles.closeIcon} source={images.close} />
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <Image source={images.upload} />
              <Text style={styles.uploadText} text={'Upload an Image'} />
            </>
          )}
        </TouchableOpacity>
        <InputField
          ref={descRef}
          value={description}
          textAlignVerical="top"
          multiline
          onChangeText={setDescription}
          viewStyle={styles.multiInput}
          placeholder="Description"
        />
        <Text style={styles.chooseText} text={'CHOOSE OPTIONS'} />
        <View style={styles.paddingView}>
          <TableView
            onPressItem={item => {
              if (item?.value === 'Select Level of Play') {
                setLevelOfPlayModal(true);
              } else if (item?.value === 'Select Mode') {
                setModeModal(true);
              } else if (item?.value === 'Select Grade') {
                setGradeModal(true);
              } else if (item?.value === 'Select State') {
                setStateModal(true);
              } else if (item?.value === 'Select Country') {
                setCountryModal(true);
              } else {
                setTeamTypeModal(true);
              }
            }}
            editable
            array={options}
          />
        </View>
        <DatePicker
          value={contestStartDate}
          onPressConfirm={date =>
            setContestStartDate(moment(date).format('YYYY-MM-DD'))
          }
          containerStyle={styles.input}
          mode="date"
          placeholder={'Choose Contest Start Date'}
        />
        <DatePicker
          value={contestStartTime}
          onPressConfirm={time =>
            setContestStartTime(moment(time).format('hh:mm:A'))
          }
          containerStyle={styles.input}
          mode="time"
          placeholder={'Choose Contest Start Time'}
        />
        <DatePicker
          value={contestEndDate}
          onPressConfirm={date =>
            setContestEndDate(moment(date).format('YYYY-MM-DD'))
          }
          containerStyle={styles.input}
          mode="date"
          placeholder={'Choose Contest End Date'}
        />
        <DatePicker
          value={contestEndDate}
          onPressConfirm={date =>
            setContestEndDate(moment(date).format('YYYY-MM-DD'))
          }
          containerStyle={styles.input}
          mode="time"
          placeholder={'Choose Contest End Time'}
        />
        <ValuePicker containerStyle={styles.input} placeholder={'Active'} />
        <Button
          containerStyle={styles.btn}
          btnText={type === 'Update' ? 'UPDATE CONTEST' : 'CREATE CONTEST'}
        />
        <DropDown
          placeholder={'Select Level Of PLay'}
          array={playData}
          closeModal={() => setLevelOfPlayModal(false)}
          visible={levelOfPlayModal}
        />
        <DropDown
          array={modeData}
          placeholder={'Select Mode'}
          closeModal={() => setModeModal(false)}
          visible={modeModal}
        />
        <DropDown
          array={gradeData}
          placeholder={'Select Grade'}
          closeModal={() => setGradeModal(false)}
          visible={gradeModal}
        />
        <DropDown
          array={stateDate}
          placeholder={'Select State'}
          closeModal={() => setStateModal(false)}
          visible={stateModal}
        />
        <DropDown
          array={countryData}
          placeholder={'Select Country'}
          closeModal={() => setCountryModal(false)}
          visible={countryModal}
        />
        <DropDown
          array={teamData}
          placeholder={'Select Team Type'}
          closeModal={() => setTeamTypeModal(false)}
          visible={teamTypeModal}
        />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default CreateAndEditContest;
