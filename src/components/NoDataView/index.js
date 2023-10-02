import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Text} from '../../components';

const NoDataView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.noDataText} text={'No Data Found'} />
    </View>
  );
};

export default NoDataView;
