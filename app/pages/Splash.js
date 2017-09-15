/**
 * Created by junwang on 2017/9/8.
 */

import React, { Component, PropTypes } from 'react';
import { View, Animated } from 'react-native';
import { window } from '../res/styles/common';
import NavigationUtil from '../utils/NavigationUtil';

const maxWidth = window.width;
const maxHeight = window.height;
const splashImg = require('../res/img/splash.jpg');

class Splash extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1)
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1.2,
        duration: 1500
      }
    ).start(() => {
      // 动画执行完毕
      NavigationUtil.reset(this.props.navigation, 'Home');
    });
  }

  render() {
    return (
      <View>
        <Animated.Image
          style={{
            width: maxWidth,
            height: maxHeight,
            transform: [{ scale: this.state.fadeAnim }]
          }}
          source={splashImg}
        />
      </View>
    );
  }
}

export default Splash;
