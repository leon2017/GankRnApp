import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Other extends Component {
  static navigationOptions = {
    title: '正在思考中',
    tabBarLabel: '其他',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="ios-flower" size={25} color={tintColor} />
  }
  render() {
    return (
      <View>
        <Text>Other</Text>
      </View>
    );
  }
}

export default Other;
