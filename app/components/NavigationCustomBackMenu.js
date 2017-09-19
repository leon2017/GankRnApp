/*
 * @Desc:  返回键
 * @Author: LeonWang 
 * @Date: 2017-09-19 14:04:05  
 * */

import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../res/styles/common';

const imgSource = require('../res/img/nav_back.png');

export default class NavigationCustomBackMenu extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          Actions.pop();
        }}
        style={styles.container}
      >
        <Image source={imgSource} />
        {/* <Icon name="md-grid" size={30} color={colors.white} style={styles.image} /> */}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    left: 13
  },
});
