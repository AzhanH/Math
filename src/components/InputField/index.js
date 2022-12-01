import React, {useState} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/theme';
import {forwardRef} from 'react';
import styles from './style';
import images from '../../assets/images';

const InputField = forwardRef((props, ref) => {
  const [showPassword, setShowPassword] = useState(props?.secureTextEntry);
  return (
    <View style={[styles.inputBox, props.viewStyle]}>
      <TextInput
        {...props}
        ref={ref}
        value={props?.value}
        returnKeyType={props?.returnKeyType ? props?.returnKeyType : 'default'}
        onSubmitEditing={props?.onSubmitEditing}
        secureTextEntry={showPassword}
        placeholderTextColor={colors.black}
        underlineColorAndroid="rgba(0,0,0,0)"
        autoCapitalize="none"
        textAlignVertical="top"
        style={[styles.textInput, props?.style]}
      />
      <View style={styles.eyeView}>
        {props?.secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image style={styles.eyeImage} source={images.eyecut} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

export default InputField;
