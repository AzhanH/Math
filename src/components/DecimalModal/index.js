import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Modal, Text, Button} from '../index';
import styles from './styles';

const DecimalModal = forwardRef(
  (
    {
      heading,
      subHeading,
      image,
      multipleButtons,
      btn1Text,
      btn2Text,
      btn2Press,
      btn1Press,
    },
    ref,
  ) => {
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
      <Modal animationType="slide" ref={modalRef} style={{flex: 1}}>
        <TouchableOpacity
          style={styles.mainContainerView}
          onPress={() => hideModal}>
          <Text style={styles.scoreText} text={'0.65654646748974'} />

          <View style={[styles.miniContainerView]}></View>
        </TouchableOpacity>
      </Modal>
    );
  },
);
export default DecimalModal;