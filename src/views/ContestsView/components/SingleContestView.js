import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icons, Text} from '../../../components';
import icons from '../../../assets/svgs';
import styles from '../styles';
import images from '../../../assets/images';
import {vw} from '../../../utils/units';

const SingleContestView = ({
  name,
  date,
  time,
  color,
  image,
  onPressContainer,
  onPressSendInvite,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressContainer}
      style={styles.contestContainer}>
      <Icons name={icons.contestContainer({color: color})} />
      <View style={styles.contentView}>
        <Image style={styles.playerImage} source={image} />
        <View style={styles.marginTop}>
          <Text style={styles.contestHeading} text={name} />
          <View style={styles.row}>
            <Image style={styles.icons} source={images.calendarWhite} />
            <Text style={styles.dateText} text={date} />
            <Image
              style={[styles.icons, {marginLeft: vw}]}
              source={images.time}
            />
            <Text style={styles.dateText} text={time} />
          </View>
          <TouchableOpacity
            style={styles.inviteCont}
            onPress={onPressSendInvite}>
            <Text style={styles.inviteText} text={'Send Invite'} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default SingleContestView;
