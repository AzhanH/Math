import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {View, Image} from 'react-native';
import Modal from '../Modal';
import Text from '../Text';
import Button from '../Button';
import styles from './styles';

const CustomModal = forwardRef(
  ({heading, subHeading, image, multipleButtons, btn1Text, btn2Text}, ref) => {
    const modalRef = useRef();

    useImperativeHandle(ref, () => ({
      show: () => showModal(),
      hide: () => hideModal(),
    }));

    const showModal = () => {
      modalRef.current.show();
    };

    const hideModal = () => {
      modalRef.current.hide();
    };

    return (
      <Modal ref={modalRef} style={styles.modalStyle}>
        <View style={styles.modalContainer}>
          <View style={styles.boderLine} />
          {image && <Image style={styles.success} source={image} />}
          <View style={styles.textView}>
            <Text
              style={styles.heading}
              text={heading && heading.toUpperCase()}
            />
            <Text style={styles.subHeading} text={subHeading && subHeading} />
          </View>
          <View style={styles.row}>
            <Button
              containerStyle={multipleButtons && {width: '50%'}}
              btnText={btn1Text ? btn1Text : 'OK'}
            />
            {multipleButtons && (
              <Button
                containerStyle={{width: '50%'}}
                style={styles.marginLeft}
                black
                btnText={btn2Text ? btn2Text : 'CANCEL '}
              />
            )}
          </View>
        </View>
      </Modal>
    );
  },
);
export default CustomModal;
