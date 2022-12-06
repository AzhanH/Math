import React from 'react';
import styles from './styles';
import {Image, Touchable, TouchableOpacity, View} from 'react-native';
import {Text, Button} from '../index';
import images from '../../assets/images';
const SingleClassView = ({image, color, showBin, onPressDelete}) => {
  return (
    <View style={[styles.mainView, {backgroundColor: color}]}>
      <View style={styles.subView}>
        <View style={styles.row}>
          <View>
            <Text
              style={styles.player}
              text={
                <>
                  <Text text="Player ID " />
                  <Text text="1234" />
                </>
              }
            />
            <Text style={styles.player} text={'Steve Smith'} />
            <Text
              style={[styles.player, styles.grade]}
              text={'Middle (Grade 6-8)'}
            />
            <Button
              textStyle={styles.btnText}
              btnText={'EDIT PROFILE'}
              reducedSize
            />
          </View>
          {showBin && (
            <TouchableOpacity
              onPress={onPressDelete}
              style={styles.roundedView}>
              <Image style={styles.trash} source={images.trash} />
            </TouchableOpacity>
          )}
          <Image source={image} />
        </View>
      </View>
    </View>
  );
};
export default SingleClassView;
