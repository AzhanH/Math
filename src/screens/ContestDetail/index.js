import React from 'react';
import {BackgroundWrapper, Icons, Text} from '../../components';
import styles from './styles';
import icons from '../../assets/svgs';
import {rectangleTheme} from '../../utils/theme';
import {Image, View} from 'react-native';
import images from '../../assets/images';
const ContestDetail = () => {
  return (
    <BackgroundWrapper>
      <View style={styles.mainView}>
        <View style={styles.rectangle}>
          <Icons
            name={icons.rectangle({
              fill: rectangleTheme.orange.fill,
              stroke: rectangleTheme.orange.stroke,
            })}
          />
          <View style={styles.rectangleContent}>
            <View style={styles.row}>
              <View>
                <Text style={styles.contestHeading} text={'ABC CONTEST'} />
                <View></View>
              </View>
              <Image source={images.contestPlayer} />
            </View>
          </View>
        </View>
      </View>
    </BackgroundWrapper>
  );
};
export default ContestDetail;
