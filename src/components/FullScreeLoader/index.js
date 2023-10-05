import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import styles from './styles';
import {colors} from '../../utils/theme';

const FullScreenLoader = ({visible = false}) => {
  return (
    <Modal transparent visible={visible} statusBarTranslucent>
      <View style={styles.container}>
        <ActivityIndicator color={colors.red} size="large" />
      </View>
    </Modal>
  );
};
export default FullScreenLoader;
