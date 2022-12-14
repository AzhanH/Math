import React, {useEffect} from 'react';
import {TouchableOpacity, StatusBar} from 'react-native';
import {
  BackgroundWrapper,
  Button,
  DatePicker,
  Header,
  InputField,
  Text,
  ValuePicker,
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
      <Header nav={navigation} heading={'PROFILE CREATION'} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid>
        <InputField
          returnKeyType="next"
          viewStyle={styles.input}
          placeholder="First Name"
        />
        <InputField
          returnKeyType="next"
          viewStyle={styles.input}
          placeholder="Last Name"
        />
        <InputField
          keyboardType="email-address"
          returnKeyType="next"
          viewStyle={styles.input}
          placeholder="Email Address"
        />
        <ValuePicker
          containerStyle={styles.input}
          placeholder="Chosose Class Grade"
        />
        <InputField
          returnKeyType="next"
          viewStyle={styles.input}
          placeholder="Add Another School"
        />
        <InputField
          returnKeyType="next"
          viewStyle={styles.input}
          placeholder="City"
        />
        <InputField
          returnKeyType="next"
          viewStyle={styles.input}
          placeholder="State"
        />
        <InputField
          returnKeyType="next"
          viewStyle={styles.input}
          placeholder="Zip Code"
        />
        <ValuePicker
          containerStyle={styles.input}
          placeholder="Choose your gender"
        />
        <DatePicker
          containerStyle={styles.input}
          mode="time"
          placeholder="mm/dd/yyyy"
        />
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
