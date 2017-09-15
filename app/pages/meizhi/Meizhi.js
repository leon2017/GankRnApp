import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Meizhi extends Component {
  static navigationOptions = {
    title: '妹纸来啦',
    tabBarLabel: '妹纸',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="md-images" size={25} color={tintColor} />
  };
  render() {
    return (
      <View>
        <Text>Meizhi</Text>
      </View>
    );
  }
}

export default Meizhi;
