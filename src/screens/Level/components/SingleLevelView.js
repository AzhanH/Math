import React, { useEffect } from 'react';
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
  decimalText,
}) => {

  function removeLeadingZeroAndDecimal(numberString) {
    return numberString.replace(/^0+(\.\d+)?$/, (match, group) => group ? group.substring(1) : '0');
  }
  

  
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
                color: teamType === 'Single-Player' ? colors.red : colors.red,
              },
            ]}
            text={teamType}
          />
        </View>
        <View>
        <Text style={styles.scoreText} text={removeLeadingZeroAndDecimal(score.toString())} />
        <Text style={styles.scoreText1} text={decimalText} />
        </View>
        {listType === 'school' && (
          <View>
     <Text style={styles.positionText} text={schoolName} />
            <Text
              style={[styles.positionText, {color: colors.purple}]}
              text={`${state}, ${country}`}
            />
          </View>
        )}
      
          <>
          <View>
        <Text style={styles.positionText} text={schoolName} />
            <Text
              style={[styles.positionText, {color: colors.purple}]}
              text={`${state}, ${country}`}
            />
            </View>
         
          </>
        

 
      </View>
    </TouchableOpacity>
  );
};
export default SingleLevelView;
