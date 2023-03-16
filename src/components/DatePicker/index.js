import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import images from '../../assets/images';
import {colors} from '../../utils/theme';
import Text from '../Text';
import styles from './styles';
const DatePicker = ({
  value,
  placeholder,
  containerStyle,
  placeHolderStyle,
  mode,
  onPressConfirm,
}) => {
  const [show, setShow] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setShow(true)}
      style={[styles.container, containerStyle]}>
      <Text
        style={[
          styles.placeholder,
          placeHolderStyle,
          value && {color: colors.black},
        ]}
        text={value ? value : placeholder}
      />
      <View style={styles.iconView}>
        <Image
          style={styles.icon}
          source={mode == 'date' ? images.calender : images.timeBlue}
        />
      </View>
      <DateTimePickerModal
        onConfirm={date => {
          onPressConfirm(date);
          setShow(false);
        }}
        onCancel={() => setShow(false)}
        isVisible={show}
        mode={mode}
      />
    </TouchableOpacity>
  );
};

export default DatePicker;
