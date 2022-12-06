import React, {useRef} from 'react';
import {
  BackgroundWrapper,
  Button,
  Header,
  Icons,
  InputField,
  CustomModal,
  Text,
} from '../../components';
import {Image, StatusBar, View} from 'react-native';
import icons from '../../assets/svgs';
import images from '../../assets/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
const PaymentScreen = ({navigation}) => {
  const paymentModalRef = useRef(null);
  return (
    <BackgroundWrapper>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <Header nav={navigation} heading={'Payment Screen'} />

      <KeyboardAwareScrollView enableOnAndroid style={styles.mainView}>
        <View style={styles.rectangle}>
          <Icons name={icons.rectangle()} />
          <View style={styles.textView}>
            <Text style={styles.headingText} text={'PACKAGE NAME:'} />
            <Text style={styles.headingText} text={'PRO-PLAN -FOR 6 MONTHS'} />
            <Text style={styles.subHeadText} text={'Total Payable: $7.77'} />
          </View>
        </View>
        <View style={styles.detailView}>
          <Text style={styles.cardText} text={'Credit/Debit Card'} />
          <Image style={styles.payment} source={images.masterCard} />
          <Image style={styles.payment} source={images.visa} />
          <Image style={styles.payment} source={images.paypal} />
          <InputField placeholder="Card Holder's Name" />
          <InputField placeholder="Card Number" />
          <InputField placeholder="CVV" />
          <Button
            onPress={() => paymentModalRef.current.show()}
            btnText={'PAY NOW'}
          />
        </View>
        <CustomModal
          image={images.paymentSuccess}
          ref={paymentModalRef}
          subHeading={
            'Payment of $7.77 / 6 months has been successful!\n  Thank you for choosing us! '
          }
          heading={'Payment Success'}
        />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default PaymentScreen;
