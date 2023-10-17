import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import images from '../../../assets/images';
import {Loader, Text} from '../../../components';
import {colors} from '../../../utils/theme';
import styles from '../styles';

const SingleNotificationView = ({
  desc,
  date,
  time,
  seen,
  id,
  selectedId,
  loading,
  onPressMarkAsRead,
}) => {
  return (
    <View
      style={[
        styles.notificationView,
        seen && {
          borderWidth: 1,
          borderColor: colors.notificationBorder,
          backgroundColor: colors.white,
        },
      ]}>
      <Text style={styles.descText} text={desc} />
      <View style={styles.row}>
        <View style={styles.dateTime}>
          <Text style={styles.dateText} text={'Date:'} />
          <Text style={styles.dateText} text={date} />
          <Text style={styles.dateText} text={' Time:'} />
          <Text style={styles.dateText} text={time} />
        </View>

        {seen && <Image style={styles.checked} source={images.checked} />}
      </View>
      {!seen &&
        (id == selectedId && loading ? (
          <Loader style={styles.loader} size={'small'} />
        ) : (
          <TouchableOpacity onPress={onPressMarkAsRead}>
            <Text style={styles.markAsRead} text={'Mark As Read'} />
          </TouchableOpacity>
        ))}
    </View>
  );
};
export default SingleNotificationView;
