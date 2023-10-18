import React from 'react';
import {
  BackgroundWrapper,
  CustomModal,
  Text,
  Rectangle,
  Button,
  InputField,
  Loader,
} from '../../components';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {CardField} from '@stripe/stripe-react-native';
import images from '../../assets/images';
const PaymentView = ({
  plan,
  handleCreatePaymentMethod,
  onChangeCardHolderName,
  loading,
  modalRef,
  onPressOk,
}) => {
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView enableOnAndroid style={styles.mainView}>
        <Rectangle>
          <View style={styles.textView}>
            <Text style={styles.headingText} text={'PACKAGE NAME:'} />
            <Text
              style={styles.headingText}
              text={plan?.title?.toUpperCase()}
            />
            <Text
              style={styles.subHeadText}
              text={`Total Payable: $${plan?.amount}`}
            />
          </View>
        </Rectangle>
        <InputField
          onChangeText={onChangeCardHolderName}
          viewStyle={styles.input}
          placeholder="Enter Cardholder Name"
        />
        <CardField
          postalCodeEnabled={true}
          placeholders={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={styles.cardFieldStyle}
          style={styles.cardContainer}
        />
        {loading ? (
          <Loader />
        ) : (
          <Button onPress={handleCreatePaymentMethod} btnText={'Pay'} />
        )}
        <CustomModal
          onPressOk={onPressOk}
          image={images.paymentSuccess}
          ref={modalRef}
          subHeading={'Your Payment for plan is succesfull'}
          heading={'Success'}
        />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default PaymentView;
