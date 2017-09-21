import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  StyleSheet,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animation from 'lottie-react-native';
import { window, colors } from '../../res/styles/common';

const LEON_GITHUB = 'https://github.com/leon2017/GankRnApp';

const animationJson = require('../../res/heart_favorite.json');

class Other extends Component {
  static navigationOptions = {
    title: '猴子派来的逗比',
    tabBarLabel: '关于',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="ios-flower" size={25} color={tintColor} />,
    headerRight: (
      <Icon.Button
        name="logo-github"
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
        onPress={() => Linking.openURL(LEON_GITHUB)}
      />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      config: {
        duration: 3000,
        imperative: false,
      },
    };
    this.onPlayPress = this.onPlayPress.bind(this);
  }

  componentDidMount() {
    this.onPlayPress();
  }

  onPlayPress() {
    this.state.progress.setValue(0);
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: this.state.config.duration,
      easing: Easing.linear,
    }).start(({ finished }) => {
      if (finished) {
        this.forceUpdate();
        this.onPlayPress();
      }
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Animation
          style={styles.animationStyle}
          source={animationJson}
          progress={this.state.progress}
        />
        <Text style={styles.aboutGnahuo}>
          干货集中营RN V1.0
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center'
  },
  animationStyle: {
    height: 400,
    width: 400
  },
  aboutGnahuo: {
    textAlign: 'center',
    color: colors.colorPrimary,
    fontSize: 15
  }
});

export default Other;
