import React from 'react';
import {View} from 'react-native';
import {Icons, Text} from '../../../components';
import icons from '../../../assets/svgs';
import styles from '../styles';
import {rectangleTheme} from '../../../utils/theme';
const SingleLogView = ({color}) => {
  return (
    <View style={styles.rectangleView}>
      <Icons
        style={styles.rectangleHeight}
        name={icons.rectangle({
          fill:
            color === 'orange'
              ? rectangleTheme.orange.fill
              : rectangleTheme.blue.fill,
          stroke:
            color === 'orange'
              ? rectangleTheme.orange.stroke
              : rectangleTheme.blue.stroke,
        })}
      />
      <View style={styles.textView}>
        <Text style={styles.headingText} text={'SUBSCRIPTION PLAN PRO'} />
        <Text
          style={styles.purchaseText}
          text={
            <>
              <Text style={styles.whiteText} text={'Purchase Date:'} />
              <Text style={styles.whiteText} text={'29 Sept,2021'} />
            </>
          }
        />
        <Text
          style={styles.purchaseText}
          text={
            <>
              <Text style={styles.whiteText} text={'Expiry Date:'} />
              <Text style={styles.whiteText} text={'29 Sept,2021'} />
            </>
          }
        />
        <Text
          style={styles.marginTop}
          text={
            <>
              <Text
                style={[styles.whiteText, styles.priceHeadText]}
                text={'7'}
              />
              <Text
                style={[styles.whiteText, styles.priceSubHead]}
                text={'.77'}
              />
              <Text style={[styles.whiteText, styles.time]} text={'/6 month'} />
              <Text />
            </>
          }
        />
      </View>
    </View>
  );
};
export default SingleLogView;
