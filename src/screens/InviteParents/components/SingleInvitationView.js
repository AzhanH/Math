import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import images from '../../../assets/images';
import {Text, Rectangle} from '../../../components';
import {colors, rectangleTheme} from '../../../utils/theme';
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
    <Rectangle
      innerColor={
        color === 'darkOrange'
          ? rectangleTheme.darkOrange.stroke
          : color == 'yellow'
          ? rectangleTheme.yellow.stroke
          : color === 'green'
          ? rectangleTheme.green.stroke
          : color === 'darkBlue' && rectangleTheme.darkBlue.stroke
      }
      containerStyle={[
        styles.invitaionContainer,
        {
          backgroundColor:
            color === 'darkOrange'
              ? rectangleTheme.darkOrange.fill
              : color === 'yellow'
              ? rectangleTheme.yellow.fill
              : color === 'green'
              ? rectangleTheme.green.fill
              : color === 'darkBlue' && rectangleTheme.darkBlue.fill,
        },
      ]}>
      <View style={styles.contentView}>
        <Image style={styles.avatarImage} source={image} />
        <View>
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
    </Rectangle>
  );
};
export default SingleInvitaionView;
