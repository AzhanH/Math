import React, {useEffect} from 'react';
import {TouchableOpacity, StatusBar} from 'react-native';
import {
  BackgroundWrapper,
  Button,
  Header,
  InputField,
  Text,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import styles from './styles';

const ProfileCreation = ({navigation}) => {
  useEffect(() => {
    AndroidKeyboardAdjust.setAdjustPan();
  }, []);
  return (
    <BackgroundWrapper>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <Header nav={navigation} heading={'PROFILE CREATION'} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid
        style={styles.mainView}>
        <InputField placeholder="First Name" />
        <InputField placeholder="Last Name" />
        <InputField placeholder="Email Address" />
        <InputField placeholder="Chosose Class Grade" />
        <InputField placeholder="Add Another School" />
        <InputField placeholder="City" />
        <InputField placeholder="State" />
        <InputField placeholder="Zip Code" />
        <InputField placeholder="Choose your gender" />
        <InputField placeholder="mm/dd/yyyy" />
        <Button
          btnText={'CREATE PROFILE'}
          onPress={() => navigation.navigate('SubscriptionPlans')}
        />

        <TouchableOpacity>
          <Text style={styles.skipText} text={'Skip Now'} />
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default ProfileCreation;
