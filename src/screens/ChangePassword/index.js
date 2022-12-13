import React from 'react';
import {View} from 'react-native';
import {BackgroundWrapper, InputField} from '../../components';
import styles from './styles';

const ChangePassword = () => {
  return (
    <BackgroundWrapper>
      <View style={styles.mainView}>
        <InputField secureTextEntry />
        <InputField secureTextEntry />
        <InputField secureTextEntry />
      </View>
    </BackgroundWrapper>
  );
};
export default ChangePassword;
