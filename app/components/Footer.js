import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator
} from 'react-native';
import { colors } from '../res/styles/common';

class Footer extends Component {
  render() {
    return (
      <View style={styles.footerContainer}>
        <ActivityIndicator size="small" color={colors.colorPrimary} />
        <Text style={styles.footerContent}>正在加载中...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  footerContent: {
    textAlign: 'center',
    fontSize: 14,
    marginLeft: 10
  }
});

export default Footer;
