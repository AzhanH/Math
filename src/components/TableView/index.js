import React from 'react';
import {View} from 'react-native';
import {vh} from '../../utils/units';
import Text from '../Text';
import styles from './styles';

const TableView = ({array}) => {
  return (
    <View style={styles.tableView}>
      {array?.length > 0 &&
        array?.map((v, i) => (
          <View
            key={i}
            style={[
              styles.tableRow,
              array?.length - 1 == i && {marginBottom: vh * 2},
            ]}>
            <Text style={styles.rowText} text={v?.label} />
            <Text style={styles.rowText} text={v?.value} />
          </View>
        ))}
    </View>
  );
};
export default TableView;
