import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {Button, Text} from '../../components';
import images from '../../assets/images';
import {scoreBoardButtonList} from '../../config';
import styles from './styles';
import {vh, vw} from '../../utils/units';

const ScoreBoardList = () => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={images.scoreboardBackground}>
      <View style={styles.mainView}>
        <Text style={styles.chooseText} text={'Choose an option:'} />
        <Image style={styles.logo} source={images.logo} />
        {scoreBoardButtonList?.map((v, i) => (
          <Button
            style={{height: vh * 7}}
            containerStyle={{width: vw * 50, marginTop: vh * 2}}
            btnText={v?.name}
            key={i}
          />
        ))}
      </View>
    </ImageBackground>
  );
};
export default ScoreBoardList;
