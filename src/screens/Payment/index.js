import React, {useRef, useState} from 'react';
import {
  BackgroundWrapper,
  Button,
  InputField,
  CustomModal,
  Text,
  Rectangle,
  ValuePicker,
  Loader,
} from '../../components';
import {Image, View} from 'react-native';
import images from '../../assets/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {colors} from '../../utils/theme';
import moment from 'moment/moment';
import {usePlans} from '../../hooks';

const PaymentScreen = ({route, navigation}) => {
  const {subscribePackage} = usePlans();
  const plan = route?.params?.plan;
  const token = route?.params?.token;

  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [expiry, setExpiry] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const paymentModalRef = useRef(null);
  const [message, setMessage] = useState(null);
  const [toggleCheckBox, setToggleCheckBox] = useState({
    masterCard: false,
    visa: false,
    paypal: false,
  });

  let tintColors = {
    true: colors.maroon,
  };

  // refs
  const numberRef = useRef(null);
  const cvvRef = useRef(null);

  const onPressConfirm = date => {
    const formatedDate = moment(date).format('YYYY-MM-DD');
    setExpiry(formatedDate);
    setShowModal(false);
    setTimeout(() => {
      cvvRef.current.focus();
    }, 100);
  };

  const returnPaymentType = () => {
    let key;
    let empty = Object?.keys(toggleCheckBox)?.every(
      v => toggleCheckBox[v] == false,
    );
    if (empty) {
      return null;
    }
    let value = Object.keys(toggleCheckBox).some(v => {
      if (toggleCheckBox[v]) {
        key = v;
        return true;
      }
    });
    if (value) {
      if (key === 'masterCard') {
        return 'master card';
      }
      if (key === 'visa') {
        return key;
      }
      if (key === 'paypal') {
        return key;
      }
    }
  };

  const onPressPayNow = async () => {
    try {
      setLoading(true);
      let apiData = [
        {label: 'Payment Method', payment_method: returnPaymentType()},
        {label: "Cardholder's Name", holder_name: name},
        {label: 'CardNumber', card_number: cardNumber},
        {label: 'Expiry Date', expirey_date: expiry},
        {label: 'Expiry Date', cvv: cvv},
        {label: 'Token', token},
        {label: 'Plan Id', planId: plan?.id},
      ];
      let res = await subscribePackage(apiData);
      setLoading(false);
      setMessage(res?.message);
      paymentModalRef.current.show();
      clearState();
    } catch (e) {
      setLoading(false);
      console.log('Error', e);
    }
  };

  const clearState = () => {
    setCvv(null);
    setExpiry(null);
    setCardNumber(null);
    setName(null);
    setToggleCheckBox({masterCard: false, visa: false, paypal: false});
  };
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
              text={`Total Payable: $${plan?.price_per_month}`}
            />
          </View>
        </Rectangle>

        <View style={styles.detailView}>
          <Text style={styles.cardText} text={'Credit/Debit Card'} />
          <View style={styles.row}>
            <CheckBox
              tintColors={tintColors}
              disabled={false}
              value={toggleCheckBox?.masterCard}
              onValueChange={newValue => {
                let tempObj = {...toggleCheckBox};
                Object.keys(tempObj)?.forEach(v => (tempObj[v] = false));
                setToggleCheckBox({...tempObj, masterCard: newValue});
              }}
            />
            <Image style={styles.payment} source={images.masterCard} />
          </View>
          <View style={styles.row}>
            <CheckBox
              tintColors={tintColors}
              disabled={false}
              value={toggleCheckBox?.visa}
              onValueChange={newValue => {
                let tempObj = {...toggleCheckBox};
                Object.keys(tempObj)?.forEach(v => (tempObj[v] = false));
                setToggleCheckBox({...tempObj, visa: newValue});
              }}
            />
            <Image style={styles.payment} source={images.visa} />
          </View>
          <View style={styles.row}>
            <CheckBox
              tintColors={tintColors}
              disabled={false}
              value={toggleCheckBox?.paypal}
              onValueChange={newValue => {
                let tempObj = {...toggleCheckBox};
                Object.keys(tempObj)?.forEach(v => (tempObj[v] = false));
                setToggleCheckBox({...tempObj, paypal: newValue});
              }}
            />
            <Image style={styles.payment} source={images.paypal} />
          </View>
          <InputField
            value={name}
            onChangeText={setName}
            maxLength={35}
            returnKeyType="next"
            viewStyle={styles.input}
            placeholder="Card Holder's Name"
            onSubmitEditing={() => numberRef.current.focus()}
          />
          <InputField
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="number-pad"
            ref={numberRef}
            maxLength={16}
            viewStyle={styles.input}
            placeholder="Card Number"
            returnKeyType="next"
            onSubmitEditing={() => setShowModal(true)}
          />

          <ValuePicker
            value={expiry}
            onPress={() => setShowModal(true)}
            icon={images.calender}
            containerStyle={styles.input}
            placeholder={'YYYY-MM-DD'}
          />

          {/* <View style={styles.row}>
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
          </View> */}
          <InputField
            value={cvv}
            onChangeText={setCvv}
            maxLength={4}
            keyboardType="number-pad"
            ref={cvvRef}
            viewStyle={styles.input}
            placeholder="CVV"
            returnKeyType="send"
            onSubmitEditing={onPressPayNow}
          />
          {loading ? (
            <Loader />
          ) : (
            <Button onPress={onPressPayNow} btnText={'PAY NOW'} />
          )}
        </View>
        <CustomModal
          onPressOk={() => {
            paymentModalRef.current.hide();
            navigation.navigate('Login');
          }}
          image={images.paymentSuccess}
          ref={paymentModalRef}
          subHeading={message}
          heading={'Payment Success'}
        />

        <DateTimePickerModal
          minimumDate={new Date()}
          isVisible={showModal}
          value={new Date()}
          mode={'date'}
          onConfirm={onPressConfirm}
          onCancel={() => setShowModal(false)}
        />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default PaymentScreen;
