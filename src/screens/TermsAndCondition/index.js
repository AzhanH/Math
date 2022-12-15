import React from 'react';
import {View} from 'react-native';
import {BackgroundWrapper, Text} from '../../components';
import {privacyText} from '../../config';
import styles from './styles';

const TermsAndCondition = () => {
  return (
    <BackgroundWrapper>
      <View style={styles.mainView}>
        <Text style={styles.text} text={privacyText} />
      </View>
    </BackgroundWrapper>
  );
};
export default TermsAndCondition;
