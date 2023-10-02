import React from 'react';
import {Image, View} from 'react-native';
import {Button, Text} from '../../../components';
import styles from '../styles';

const SingleTeamView = ({teamName, color, image, onPressViewDetail}) => {
  return (
    <View style={[styles.teamView, {backgroundColor: color}]}>
      <View style={styles.teamSubView}>
        <View style={styles.row}>
          <View style={styles.teamContent}>
            <Text
              style={styles.teamNameText}
              text={teamName ? teamName?.toUpperCase() : teamName}
            />
            <Button
              onPress={onPressViewDetail}
              containerStyle={styles.btnContainer}
              btnText={'View Details'}
            />
          </View>
          <Image style={styles.avatarImage} source={image} />
        </View>
      </View>
    </View>
  );
};
export default SingleTeamView;
