import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../../../components';
import {colors} from '../../../utils/theme';
import styles from '../styles';
const SinglePlanType = ({type, selecetdType, onPressType}) => {
  return (
    <TouchableOpacity onPress={onPressType} style={styles.planTypeView}>
      <Text
        style={[
          styles.planTypeText,
          selecetdType === type && {
            color: colors.black,
          },
        ]}
        text={type}
      />
    </TouchableOpacity>
  );
};
export default SinglePlanType;
