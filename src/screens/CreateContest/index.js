import React from 'react';
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
} from '../../components';
import styles from './styles';

const CreateContest = () => {
  const options = [
    {label: 'Level of play', value: 'Select Level of Play'},
    {label: 'Mode', value: 'Select Mode'},
    {label: 'Grade', value: 'Select Grade'},
    {label: 'State', value: 'Select State'},
    {label: 'Country', value: 'Select Country'},
    {label: 'Team Type', value: 'Select Team Type'},
  ];
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView enableOnAndroid style={styles.contentContainer}>
        <View style={styles.mainView}>
          <InputField placeholder="Contest Title" />
          <TouchableOpacity style={styles.uploadContainer}>
            <Image source={images.upload} />
            <Text style={styles.uploadText} text={'Upload an Image'} />
          </TouchableOpacity>
          <InputField
            textAlignVerical="top"
            multiline
            viewStyle={styles.multiInput}
            placeholder="Description"
          />
          <Text style={styles.chooseText} text={'CHOOSE OPTIONS'} />
          <TableView array={options} />
          <DatePicker mode="date" placeholder={'Choose Contest Start Date'} />
          <DatePicker mode="time" placeholder={'Choose Contest Start Time'} />
          <DatePicker mode="date" placeholder={'Choose Contest End Date'} />
          <DatePicker mode="time" placeholder={'Choose Contest End Time'} />
          <ValuePicker placeholder={'Active'} />
          <Button btnText={'CREATE CONTEST'} />
        </View>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default CreateContest;
