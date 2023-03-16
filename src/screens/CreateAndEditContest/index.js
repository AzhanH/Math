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
  Loader,
} from '../../components';
import {
  countryData,
  gradeData,
  modeData,
  playData,
  stateData,
  teamData,
} from '../../config';
import styles from './styles';
import {launchImageLibrary} from 'react-native-image-picker';
import moment from 'moment/moment';
import {useContest} from '../../hooks';
import {Toast} from '../../api/APIHelpers';
const CreateAndEditContest = ({route}) => {
  const {createContest} = useContest();
  const type = route?.params?.type;

  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [contestStartDate, setContestStartDate] = useState(null);
  const [contestEndDate, setContestEndDate] = useState(null);
  const [contestStartTime, setContestStartTime] = useState(null);
  const [contestEndTime, setContestEndTime] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [levelOfPlayModal, setLevelOfPlayModal] = useState(false);
  const [modeModal, setModeModal] = useState(false);
  const [gradeModal, setGradeModal] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [countryModal, setCountryModal] = useState(false);
  const [teamTypeModal, setTeamTypeModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    levelOfPlay: null,
    mode: null,
    grade: null,
    state: null,
    country: null,
    teamType: null,
  });
  const [options, setOptions] = useState([
    {label: 'Level of play', placeholder: 'Select Level of Play'},
    {label: 'Mode', placeholder: 'Select Mode'},
    {label: 'Grade', placeholder: 'Select Grade'},
    {label: 'State', placeholder: 'Select State'},
    {label: 'Country', placeholder: 'Select Country'},
    {label: 'Team Type', placeholder: 'Select Team Type'},
    {label: 'Team Id', team_id: 1},
  ]);

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

  const onPressCreateContest = async () => {
    try {
      setLoading(true);
      let apiData = [
        {
          label: 'Title',
          title,
        },
        {
          label: 'Description',
          description,
        },
        {
          label: 'image',
          image,
        },
        {
          label: 'Level of play',
          level_of_play: values?.levelOfPlay,
        },
        {
          label: 'Mode',
          mode: values?.mode,
        },
        {
          label: 'Class Grade Id',
          class_grade_id: values?.grade,
        },
        {
          label: 'State Id',
          state_id: values?.state,
        },
        {
          label: 'Country Id',
          country_id: values?.country,
        },
        {
          label: 'Team Type',
          team_type: values?.teamType?.toString(),
        },
        {
          label: 'Start Date',
          start_date: contestStartDate,
        },
        {
          label: 'Start Time',
          start_time: contestStartTime,
        },
        {
          label: 'End Date',
          end_date: contestEndDate,
        },
        {
          label: 'End Time',
          end_time: contestEndTime,
        },
        {
          label: 'Team Id',
          team_id: 1,
        },
      ];
      let res = await createContest(apiData);
      Toast.success(res?.message);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('E', e);
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
            onPressItem={(item, index) => {
              setSelectedIndex(index);
              if (item?.placeholder === 'Select Level of Play') {
                setLevelOfPlayModal(true);
              } else if (item?.placeholder === 'Select Mode') {
                setModeModal(true);
              } else if (item?.placeholder === 'Select Grade') {
                setGradeModal(true);
              } else if (item?.placeholder === 'Select State') {
                setStateModal(true);
              } else if (item?.placeholder === 'Select Country') {
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
          min={new Date()}
          value={contestStartDate}
          onPressConfirm={date => {
            let formatedDate = moment(date).format('YYYY-MM-DD');
            setContestStartDate(formatedDate);
          }}
          containerStyle={styles.input}
          mode="date"
          placeholder={'Choose Contest Start Date'}
        />
        <DatePicker
          value={contestStartTime}
          onPressConfirm={time =>
            setContestStartTime(moment(time).format('hh:mm:s'))
          }
          containerStyle={styles.input}
          mode="time"
          placeholder={'Choose Contest Start Time'}
        />
        <DatePicker
          min={new Date()}
          value={contestEndDate}
          onPressConfirm={date => {
            let formatedDate = moment(date).format('YYYY-MM-DD');
            setContestEndDate(formatedDate);
          }}
          containerStyle={styles.input}
          mode="date"
          placeholder={'Choose Contest End Date'}
        />
        <DatePicker
          value={contestEndTime}
          onPressConfirm={time => {
            let formatedTime = moment(time).format('hh:mm:s');
            if (
              contestStartTime &&
              moment(contestStartTime, 'hh:mm:a').isAfter(
                moment(formatedTime, 'hh:mm:a'),
                'hour',
              )
            ) {
              Toast.error('End Time Should be greater than start time');
              return;
            }
            setContestEndTime(moment(time).format('hh:mm:s'));
          }}
          containerStyle={styles.input}
          mode="time"
          placeholder={'Choose Contest End Time'}
        />
        <ValuePicker containerStyle={styles.input} placeholder={'Active'} />

        {loading ? (
          <Loader />
        ) : (
          <Button
            onPress={onPressCreateContest}
            containerStyle={styles.btn}
            btnText={type === 'Update' ? 'UPDATE CONTEST' : 'CREATE CONTEST'}
          />
        )}

        <DropDown
          selectedValue={values?.levelOfPlay}
          onPressItem={item => {
            let temp = [...options];
            setValues({...values, levelOfPlay: item?.value});
            temp[selectedIndex].value = item?.name;
            setOptions(temp);
          }}
          placeholder={'Select Level Of PLay'}
          array={playData}
          closeModal={() => setLevelOfPlayModal(false)}
          visible={levelOfPlayModal}
        />
        <DropDown
          selectedValue={values?.mode}
          onPressItem={item => {
            let temp = [...options];
            temp[selectedIndex].value = item?.name;
            setValues({...values, mode: item?.value});
            setOptions(temp);
          }}
          array={modeData}
          placeholder={'Select Mode'}
          closeModal={() => setModeModal(false)}
          visible={modeModal}
        />
        <DropDown
          selectedValue={values?.grade}
          onPressItem={item => {
            let temp = [...options];
            temp[selectedIndex].value = item?.name;
            setValues({...values, grade: item?.value});
            setOptions(temp);
          }}
          array={gradeData}
          placeholder={'Select Grade'}
          closeModal={() => setGradeModal(false)}
          visible={gradeModal}
        />
        <DropDown
          selectedValue={values?.state}
          onPressItem={item => {
            let temp = [...options];
            temp[selectedIndex].value = item?.name;
            setValues({...values, state: item?.value});
            setOptions(temp);
          }}
          array={stateData}
          placeholder={'Select State'}
          closeModal={() => setStateModal(false)}
          visible={stateModal}
        />
        <DropDown
          selectedValue={values?.country}
          onPressItem={item => {
            let temp = [...options];
            temp[selectedIndex].value = item?.name;
            setValues({...values, country: item?.value});
            setOptions(temp);
          }}
          array={countryData}
          placeholder={'Select Country'}
          closeModal={() => setCountryModal(false)}
          visible={countryModal}
        />
        <DropDown
          selectedValue={values?.teamType}
          onPressItem={item => {
            let temp = [...options];
            temp[selectedIndex].value = item?.name;
            setValues({...values, teamType: item?.value});

            setOptions(temp);
          }}
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
