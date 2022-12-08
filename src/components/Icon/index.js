import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import styles from './styles';
const IconComponent = ({name, style, iconHeight, fill}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      {iconHeight ? (
        <SvgXml xml={name} height={iconHeight} fill={fill} />
      ) : (
        <SvgXml height={'100%'} width="100%" xml={name} fill={'#fff'} />
      )}
    </View>
  );
};
export default IconComponent;
