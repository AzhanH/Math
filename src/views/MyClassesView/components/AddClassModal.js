import React from 'react';
import {Image, Modal, TouchableOpacity, View} from 'react-native';
import styles from '../styles';
import {Button, InputField, Loader} from '../../../components';
import images from '../../../assets/images';
import Toast from 'react-native-toast-message';

const AddClassModal = ({
  visible = false,
  onClose,
  onPressCreateClass,
  loading,
  className,
  onChangeClassName,
}) => {
  return (
    <Modal
      onRequestClose={onClose}
      animationType="slide"
      statusBarTranslucent
      visible={visible}
      transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={onClose} style={styles.closeView}>
            <Image style={styles.closeIcon} source={images.close} />
          </TouchableOpacity>
          <InputField
            value={className}
            onChangeText={onChangeClassName}
            viewStyle={styles.inputContainer}
            maxLength={25}
            placeholder="Class Name"
          />
          {loading ? (
            <Loader />
          ) : (
            <Button onPress={onPressCreateClass} btnText={'Create'} />
          )}
        </View>
      </View>
      <Toast />
    </Modal>
  );
};
export default AddClassModal;
