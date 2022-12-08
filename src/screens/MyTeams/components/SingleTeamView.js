import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '../../../components';
import styles from '../styles';

const SingleTeamView = ({teamName, color, image}) => {
  return (
    <View style={[styles.teamView, {backgroundColor: color}]}>
      <View style={styles.teamSubView}>
        <View style={styles.row}>
          <View>
            <Text style={styles.teamNameText} text={teamName} />
            <Button style={styles.btn} btnText={'View Details'} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default SingleTeamView;
