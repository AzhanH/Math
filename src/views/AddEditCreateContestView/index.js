import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import images from '../../assets/images';
import {
  BackgroundWrapper,
  DatePicker,
  InputField,
  TableView,
  Text,
  Button,
  ValuePicker,
  DropDown,
  Loader,
} from '../../components';

import styles from './styles';
import FullScreenLoader from '../../components/FullScreeLoader';
const AddEditCreateContestView = ({
  options,
  onPressImage,
  image,
  title,
  onChangeTitle,
  onChangeDescription,
  onConfirmStartDate,
  onConfirmStartTime,
  onConfirmEndTime,
  onConfirmEndDate,
  description,
  contestStartDate,
  contestStartTime,
  contestEndDate,
  contestEndTime,
  onPressTableItem,
  showDropDown,
  dropDownFor,
  onCloseDropDown,
  dropDownArray,
  stateLoading,
  loading,
  createContest,
  onPressDropDownItem,
}) => {
  return (
    <BackgroundWrapper>
      <KeyboardAwareScrollView enableOnAndroid style={styles.contentContainer}>
        <InputField
          value={title}
          onChangeText={onChangeTitle}
          viewStyle={styles.input}
          returnKeyType="next"
          placeholder="Contest Title"
        />
        <TouchableOpacity onPress={onPressImage} style={styles.uploadContainer}>
          {image ? (
            <View>
              <Image style={styles.contestImage} source={{uri: image?.uri}} />
              <TouchableOpacity
                onPress={() => setImage(null)}
                style={styles.removeView}>
                <Image style={styles.closeIcon} source={images.close} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.alignCenter}>
              <Image source={images.upload} />
              <Text style={styles.uploadText} text={'Upload an Image'} />
            </View>
          )}
        </TouchableOpacity>
        <InputField
          value={description}
          onChangeText={onChangeDescription}
          textAlignVerical="top"
          multiline
          viewStyle={styles.multiInput}
          placeholder="Description"
        />
        <Text style={styles.chooseText} text={'CHOOSE OPTIONS'} />
        <View style={styles.paddingView}>
          <TableView onPressItem={onPressTableItem} editable array={options} />
        </View>
        <DatePicker
          value={contestStartDate}
          onPressConfirm={onConfirmStartDate}
          containerStyle={styles.input}
          mode="date"
          placeholder={'Choose Contest Start Date'}
        />
        <DatePicker
          value={contestStartTime}
          onPressConfirm={onConfirmStartTime}
          containerStyle={styles.input}
          mode="time"
          placeholder={'Choose Contest Start Time'}
        />
        <DatePicker
          value={contestEndDate}
          onPressConfirm={onConfirmEndDate}
          containerStyle={styles.input}
          mode="date"
          placeholder={'Choose Contest End Date'}
        />
        <DatePicker
          value={contestEndTime}
          onPressConfirm={onConfirmEndTime}
          containerStyle={styles.input}
          mode="time"
          placeholder={'Choose Contest End Time'}
        />
        <ValuePicker containerStyle={styles.input} placeholder={'Active'} />
        {loading ? (
          <Loader />
        ) : (
          <Button
            onPress={createContest}
            containerStyle={styles.btn}
            btnText={'CREATE CONTEST'}
          />
        )}
        <DropDown
          onPressItem={onPressDropDownItem}
          array={dropDownArray}
          placeholder={dropDownFor}
          closeModal={onCloseDropDown}
          visible={showDropDown}
        />
        <FullScreenLoader visible={stateLoading} />
      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
};
export default AddEditCreateContestView;
