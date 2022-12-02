import React, {useImperativeHandle, useState} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import styles from './styles';

const CustomModal = React.forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const {isBlur = true} = props;

  useImperativeHandle(ref, () => ({
    show: () => showModal(),
    hide: () => hideModal(),
  }));

  const showModal = () => {
    setIsVisible(true);
    if (props.onShow) {
      props.onShow();
    }
  };

  const hideModal = () => {
    setIsVisible(false);
    if (props.onHide) {
      props.onHide();
    }
  };

  return (
    <Modal
      {...this.props}
      animationType="fade"
      style={[styles.modal, props?.modalStyle]}
      visible={isVisible}
      transparent={true}
      statusBarTranslucent={true}>
      {isBlur && (
        <TouchableOpacity style={styles.blurBackground} onPress={hideModal}>
          <BlurView
            style={styles.blurView}
            blurType="dark"
            blurAmount={1}
            reducedTransparencyFallbackColor="black"
          />
        </TouchableOpacity>
      )}

      <View style={[styles.modalContent, props.style]} pointerEvents="box-none">
        {props.children}
      </View>
    </Modal>
  );
});

export default CustomModal;
