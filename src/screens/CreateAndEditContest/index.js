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
import {options} from '../../config';
import styles from './styles';

const CreateAndEditContest = ({route}) => {
  const type = route?.params?.type;

  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView enableOnAndroid style={styles.contentContainer}>
        <InputField viewStyle={styles.input} placeholder="Contest Title" />
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
        <TableView editable array={options} />
        <DatePicker
          containerStyle={styles.input}
          mode="date"
          placeholder={'Choose Contest Start Date'}
        />
        <DatePicker
          containerStyle={styles.input}
          mode="time"
          placeholder={'Choose Contest Start Time'}
        />
        <DatePicker
          containerStyle={styles.input}
          mode="date"
          placeholder={'Choose Contest End Date'}
        />
        <DatePicker
          containerStyle={styles.input}
          mode="time"
          placeholder={'Choose Contest End Time'}
        />
        <ValuePicker containerStyle={styles.input} placeholder={'Active'} />
        <Button
          btnText={type === 'Update' ? 'UPDATE CONTEST' : 'CREATE CONTEST'}
        />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default CreateAndEditContest;
