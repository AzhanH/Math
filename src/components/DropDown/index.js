import React from 'react';
import {
  FlatList,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
import Text from '../Text';
import {vh} from '../../utils/units';
import {colors} from '../../utils/theme';

const DropDown = ({
  visible,
  array,
  selectedValue,
  onPressItem,
  closeModal,
  placeholder,
}) => {
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        onPressItem(item);
        closeModal();
      }}
      style={[
        styles.itemConatiner,
        selectedValue === item?.value && {backgroundColor: colors.red},
      ]}
      key={index}>
      <Text
        style={[
          styles.itemText,
          selectedValue === item?.value && {color: colors.white},
        ]}
        text={item?.name}
      />
    </TouchableOpacity>
  );
  const ListHeaderComponent = (
    <Text style={styles.placeholder} text={placeholder} />
  );
  return (
    <Modal transparent visible={visible}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.mainView}>
          <View style={styles.subView}>
            <FlatList
              ListHeaderComponent={ListHeaderComponent}
              style={{marginTop: vh * 2}}
              key="dropdownlist"
              renderItem={renderItem}
              data={array}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
export default DropDown;
