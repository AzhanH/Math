import React, {useState} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/theme';
import {forwardRef} from 'react';
import styles from './style';
import images from '../../assets/images';
import {Text} from '../index';

const InputField = forwardRef((props, ref) => {
  const [showPassword, setShowPassword] = useState(props?.secureTextEntry);
  return (
    <View>
      <View style={[styles.inputBox, props.viewStyle]}>
        <TextInput
          {...props}
          ref={ref}
          multiline={props?.multiline}
          value={props?.value}
          returnKeyType={
            props?.returnKeyType ? props?.returnKeyType : 'default'
          }
          onSubmitEditing={props?.onSubmitEditing}
          secureTextEntry={showPassword}
          placeholderTextColor={colors.black + '66'}
          underlineColorAndroid="rgba(0,0,0,0)"
          autoCapitalize="none"
          textAlignVertical="top"
          style={[styles.textInput, props?.style]}
        />

        <TouchableOpacity
          disabled={!props?.secureTextEntry}
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeView}>
          {props?.secureTextEntry && (
            <Image
              style={styles.eyeImage}
              source={showPassword ? images.eyeClosed : images.eyeOpen}
            />
          )}
        </TouchableOpacity>
      </View>
      {props?.error && <Text style={styles.errorText} text={props?.error} />}
    </View>
  );
});

export default InputField;
