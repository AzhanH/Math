import {Dimensions} from 'react-native';

export const vw = Dimensions.get('window').width / 100;
export const vh = Dimensions.get('window').height / 100;

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const fontSizes = {
  f40: vh * 3.8,
  f36: vh * 3.6,
  f24: vh * 3,
  f20: vh * 2.4,
  f18: vh * 2.2,
  f16: vh * 2,
  f15: vh * 1.8,
  f14: vh * 1.7,
  f12: vh * 1.6,
  f10: vh * 1.5,
};
