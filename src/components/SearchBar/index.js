import React from 'react';
import {Image, TextInput, View} from 'react-native';
import images from '../../assets/images';
import {colors} from '../../utils/theme';
import styles from './styles';

const SearchBar = ({style, inputstyle, onChangeSearch}) => {
  return (
    <View style={[styles.mainView, style]}>
      <Image style={styles.icon} source={images.search} />
      <TextInput
        onChangeText={onChangeSearch}
        placeholder="Search here..."
        placeholderTextColor={colors.black + '66'}
        underlineColorAndroid="rgba(0,0,0,0)"
        autoCapitalize="none"
        textAlignVertical="top"
        style={[styles.textInput, inputstyle]}
      />
    </View>
  );
};
export default SearchBar;
