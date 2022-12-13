import React from 'react';
import {View} from 'react-native';
import {BackgroundWrapper, Button, InputField} from '../../components';
import styles from './styles';

const ChangePassword = ({navigation}) => {
  return (
    <BackgroundWrapper>
      <View style={styles.mainView}>
        <InputField
          placeholder="Current Password"
          viewStyle={styles.inputView}
          secureTextEntry
        />
        <InputField
          placeholder="New Password"
          viewStyle={styles.inputView}
          secureTextEntry
        />
        <InputField
          placeholder="Confirm Password"
          viewStyle={styles.inputView}
          secureTextEntry
        />
        <Button btnText={'UPDATE'} />
      </View>
    </BackgroundWrapper>
  );
};
export default ChangePassword;
