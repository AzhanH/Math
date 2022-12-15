import React, {useRef, useState} from 'react';
import {
  BackgroundWrapper,
  Button,
  InputField,
  CustomModal,
  Text,
  Rectangle,
  DatePicker,
} from '../../components';
import {Image, View} from 'react-native';
import images from '../../assets/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import {colors} from '../../utils/theme';
const PaymentScreen = ({navigation}) => {
  const paymentModalRef = useRef(null);
  const [toggleCheckBox, setToggleCheckBox] = useState({
    masterCard: false,
    visa: false,
    paypal: false,
  });

  let tintColors = {
    true: colors.maroon,
  };
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView enableOnAndroid style={styles.mainView}>
        <Rectangle>
          <View style={styles.textView}>
            <Text style={styles.headingText} text={'PACKAGE NAME:'} />
            <Text style={styles.headingText} text={'PRO-PLAN -FOR 6 MONTHS'} />
            <Text style={styles.subHeadText} text={'Total Payable: $7.77'} />
          </View>
        </Rectangle>

        <View style={styles.detailView}>
          <Text style={styles.cardText} text={'Credit/Debit Card'} />
          <View style={styles.row}>
            <CheckBox
              tintColors={tintColors}
              disabled={false}
              value={toggleCheckBox?.masterCard}
              onValueChange={newValue =>
                setToggleCheckBox({...toggleCheckBox, masterCard: newValue})
              }
            />
            <Image style={styles.payment} source={images.masterCard} />
          </View>
          <View style={styles.row}>
            <CheckBox
              tintColors={tintColors}
              disabled={false}
              value={toggleCheckBox?.visa}
              onValueChange={newValue =>
                setToggleCheckBox({...toggleCheckBox, visa: newValue})
              }
            />
            <Image style={styles.payment} source={images.visa} />
          </View>
          <View style={styles.row}>
            <CheckBox
              tintColors={tintColors}
              disabled={false}
              value={toggleCheckBox?.paypal}
              onValueChange={newValue =>
                setToggleCheckBox({...toggleCheckBox, paypal: newValue})
              }
            />
            <Image style={styles.payment} source={images.paypal} />
          </View>
          <InputField
            viewStyle={styles.input}
            placeholder="Card Holder's Name"
          />
          <InputField viewStyle={styles.input} placeholder="Card Number" />
          <View style={styles.row}>
            <DatePicker
              placeholder={'mm'}
              containerStyle={styles.reducedInput}
              mode={'date'}
            />
            <DatePicker
              placeholder={'yy'}
              containerStyle={[styles.reducedInput, styles.inputSeprator]}
              mode={'date'}
            />
          </View>
          <InputField viewStyle={styles.input} placeholder="CVV" />

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
