import React, {useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import images from '../../assets/images';
import {
  BackgroundWrapper,
  SinglePlayerView,
  Button,
  CustomModal,
} from '../../components';
import {classes} from '../../config';
import {vh, vw} from '../../utils/units';
import styles from './styles';
const MyClass = () => {
  const modalRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      showBin={isEdit}
      onPressDelete={() => modalRef.current.show()}
      image={item?.image}
      color={item?.color}
      key={index}
    />
  );

  const listFooterComponent = (
    <View>
      <Button
        containerStyle={{width: vw * 50}}
        style={{height: vh * 7}}
        textStyle={styles.btnText}
        btnText={'ADD STUDENTS TO CLASS'}
      />
      <Button
        containerStyle={{width: vw * 50}}
        style={{height: vh * 7}}
        onPress={() => {
          if (!isEdit) {
            setIsEdit(true);
          } else {
            setIsEdit(false);
            modalRef.current.show();
          }
        }}
        black
        textStyle={styles.btnText}
        btnText={isEdit ? 'UPDATE' : 'EDIT CLASSROOM'}
      />
    </View>
  );
  return (
    <BackgroundWrapper>
      <FlatList
        ListFooterComponent={listFooterComponent}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
        data={classes}
      />
      <CustomModal
        btn1Text={isEdit ? 'YES' : 'OK'}
        btn2Text="NO"
        multipleButtons={isEdit}
        heading={isEdit ? 'Attention!' : 'Updated'}
        subHeading={
          isEdit
            ? 'Are you sure you want to delete this student?'
            : 'The classroom has been updated'
        }
        image={isEdit ? images.danger : images.success}
        ref={modalRef}
      />
    </BackgroundWrapper>
  );
};
export default MyClass;
