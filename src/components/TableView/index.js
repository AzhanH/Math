import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import images from '../../assets/images';
import {vh, vw} from '../../utils/units';
import Text from '../Text';
import styles from './styles';

const TableView = ({array, editable = false, onPressItem}) => {
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
            <TouchableOpacity
              onPress={() => onPressItem(v, i)}
              disabled={!editable}
              style={styles.row}>
              <Text
                style={styles.rowText}
                text={typeof v?.value === 'object' ? v?.value?.name : v?.value}
              />
              {(v?.editable || editable) && (
                <Image style={styles.dropDown} source={images.dropDownWhite} />
              )}
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
};
export default TableView;
