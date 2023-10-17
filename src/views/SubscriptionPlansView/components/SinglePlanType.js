import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../../../components';
import {colors} from '../../../utils/theme';
import styles from '../styles';
const SinglePlanType = ({type, selectedPlan, onPressType}) => {
  return (
    <TouchableOpacity onPress={onPressType} style={styles.planTypeView}>
      <Text
        style={[
          styles.planTypeText,
          selectedPlan?.title === type && {
            color: colors.black,
          },
        ]}
        text={type}
      />
    </TouchableOpacity>
  );
};
export default SinglePlanType;
