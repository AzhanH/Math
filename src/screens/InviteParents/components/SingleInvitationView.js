import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import images from '../../../assets/images';
import rectangle from '../../../assets/svgs/rectangle';
import {Icons, Text} from '../../../components';
import {colors, rectangleTheme} from '../../../utils/theme';
import {vh} from '../../../utils/units';
import styles from '../styles';

const SingleInvitaionView = ({
  color,
  image,
  name,
  grade,
  onPressAdd,
  isChecked,
}) => {
  return (
    <View style={styles.rectangleView}>
      <Icons
        style={{height: vh * 22}}
        name={rectangle({
          fill:
            color === 'darkOrange'
              ? rectangleTheme.darkOrange.fill
              : color === 'yellow'
              ? rectangleTheme.yellow.fill
              : color === 'green'
              ? rectangleTheme.green.fill
              : color === 'darkBlue' && rectangleTheme.darkBlue.fill,
          stroke:
            color === 'darkOrange'
              ? rectangleTheme.darkOrange.stroke
              : color === 'yellow'
              ? rectangleTheme.yellow.stroke
              : color === 'green'
              ? rectangleTheme.green.stroke
              : color === 'darkBlue' && rectangleTheme.darkBlue.stroke,
        })}
      />
      <View style={styles.contentView}>
        <Image style={styles.avatarImage} source={image} />
        <View style={styles.marginLeft}>
          <Text style={styles.nameText} text={name} />
          <Text style={styles.nameText} text={grade} />
        </View>
        <TouchableOpacity
          onPress={() => onPressAdd(isChecked)}
          style={[
            styles.actionBtn,
            isChecked && {backgroundColor: colors.darkGreen},
          ]}>
          <Image
            style={styles.icons}
            source={isChecked ? images.check : images.add}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SingleInvitaionView;
