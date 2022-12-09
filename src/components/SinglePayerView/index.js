import React from 'react';
import styles from './styles';
import {Image, TouchableOpacity, View} from 'react-native';
import Text from '../Text';
import Button from '../Button';
import images from '../../assets/images';
import {vh, vw} from '../../utils/units';
const SinglePlayerView = ({
  image,
  color,
  showBin,
  onPressDelete,
  btnName,
  onPressButton,
}) => {
  return (
    <View style={[styles.mainView, {backgroundColor: color}]}>
      <View style={styles.subView}>
        <View style={styles.row}>
          <View style={styles.halfView}>
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
              onPress={onPressButton}
              containerStyle={{marginTop: vw * 2}}
              style={{height: vh * 4}}
              textStyle={styles.btnText}
              btnText={btnName ? btnName : 'EDIT PROFILE'}
              reducedSize
            />
          </View>
          <View>
            {showBin && (
              <TouchableOpacity
                onPress={onPressDelete}
                style={styles.roundedView}>
                <Image style={styles.trash} source={images.trash} />
              </TouchableOpacity>
            )}
            <Image style={styles.avatarImage} source={image} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default SinglePlayerView;
