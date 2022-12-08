import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import images from '../../assets/images';
import Text from '../Text';
import styles from './styles';
const DatePicker = ({placeholder, containerStyle, placeHolderStyle, mode}) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
  };
  return (
    <TouchableOpacity
      onPress={() => setShow(true)}
      style={[styles.container, containerStyle]}>
      <Text style={[styles.placeholder, placeHolderStyle]} text={placeholder} />
      <View style={styles.iconView}>
        <Image
          style={styles.icon}
          source={mode == 'date' ? images.calender : images.timeBlue}
        />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
  );
};

export default DatePicker;
