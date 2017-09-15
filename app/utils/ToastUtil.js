/**
 * toast 工具类
 */

import { Alert, ToastAndroid, Platform } from 'react-native';

const show = (content) => {
  if (!content) {
    return;
  }
  if (Platform.OS === 'ios') {
    Alert.alert('哇咔咔提示', content.toString());
  } else {
    ToastAndroid.show(content.toString(), ToastAndroid.SHORT);
  }
};

const showLong = (content) => {
  if (!content) {
    return;
  }
  if (Platform.OS === 'ios') {
    Alert.alert('哇咔咔提示', content.toString());
  } else {
    ToastAndroid.show(content.toString(), ToastAndroid.LONG);
  }
};

export default{
  show,
  showLong
};
