/*
 * @Desc:  loading
 * @Author: LeonWang 
 * @Date: 2017-09-18 10:47:52  
 * */

import React, { Component } from 'react';
import { ActivityIndicator, Text, StyleSheet, View } from 'react-native';
import { colors } from '../res/styles/common';

class LoadingView extends Component {
  render() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={colors.colorPrimary} size="large" />
        <Text style={styles.loadingText}>数据加载中...</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  loadingText: {
    marginTop: 10,
    textAlign: 'center'
  }
});

export default LoadingView;
