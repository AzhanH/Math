import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import images from '../../assets/images';
import {Icons, Modal, Text, Button} from '../index';
import styles from './styles';

const SuccessModal = forwardRef(({heading, subHeading, image}, ref) => {
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
        <Button btnText={'OK'} />
      </View>
    </Modal>
  );
});
export default SuccessModal;
