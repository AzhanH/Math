import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import images from '../../../assets/images';
import {Text} from '../../../components';
import {addSuffixToWord} from '../../../config';
import {colors} from '../../../utils/theme';
import styles from '../styles';

const SingleLevelView = ({
  position,
  playerName,
  score,
  state,
  country,
  onPressContainer,
  listType,
  schoolName,
  teamType,
}) => {
  return (
    <TouchableOpacity onPress={onPressContainer} style={styles.levelContainer}>
      <View style={styles.levelSubContainer}>
        <Text style={styles.positionText} text={addSuffixToWord(position)} />
        <View>
          <Text style={styles.positionText} text={playerName} />
          <Text
            style={[
              styles.playerType,
              {
                color: teamType === 'Single-Player' ? colors.green : colors.red,
              },
            ]}
            text={teamType}
          />
        </View>
        <Text style={styles.scoreText} text={score} />
        {listType === 'school' && (
          <View>
            <Text style={styles.positionText} text={schoolName} />
            <Text
              style={[styles.positionText, {color: colors.purple}]}
              text={`${state},${country}`}
            />
          </View>
        )}
        {listType === 'class' && (
          <>
            <Text style={styles.scoreText} text={state} />
            <Text style={styles.scoreText} text={country} />
          </>
        )}

        <View style={styles.outerCircle}>
          <TouchableOpacity style={styles.innerCircle}>
            <Image source={images.eyePeach} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default SingleLevelView;
