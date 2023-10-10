import React from 'react';
import {Image, View} from 'react-native';
import {Button, Text} from '../../../components';
import styles from '../styles';

const SingleClassView = ({className, color, image, onPressViewDetail}) => {
  return (
    <View style={[styles.classView, {backgroundColor: color}]}>
      <View style={styles.classSubView}>
        <View style={styles.row}>
          <View style={styles.classContent}>
            <Text
              style={styles.classNameText}
              text={className ? className?.toUpperCase() : className}
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
export default SingleClassView;
