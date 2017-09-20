import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  InteractionManager,
  TouchableOpacity,
  Platform
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import store from 'react-native-simple-store';
import { Actions } from 'react-native-router-flux';
import { window, colors } from '../../res/styles/common';

const defaultIcon = require('../../res/img/default_girl_icon.png');

class GirlPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImageUrl: null
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      store.get('girlUrl').then((showImageUrl) => {
        this.setState({
          showImageUrl
        });
      });
    });
  }

  renderContainer() {
    const icon = !this.state.showImageUrl ? defaultIcon : { uri: this.state.showImageUrl };
    return (
      <Image
        resizeMode={Image.resizeMode.stretch}
        source={icon}
        style={styles.containerImg}
      >
        <View style={styles.containerTitle}>
          <TouchableOpacity
            onPress={() => {
              Actions.pop();
            }}
          >
            <Icon
              name="arrow-left"
              size={28}
              color={colors.white}
              style={{ opacity: 1 }}
            />
          </TouchableOpacity>
        </View>
      </Image>
    );
  }

  render() {
    if (Platform.OS === 'ios') {
      return (
        <View style={styles.container}>
          <View style={{ height: 20 }} />
          {
            this.renderContainer()
          }
        </View>
      );
    }
    return this.renderContainer();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  containerImg: {
    flex: 1,
    width: window.width,
  },
  containerTitle: {
    width: window.width,
    height: 48,
    justifyContent: 'center',
    paddingLeft: 15,
    backgroundColor: colors.black,
    opacity: 0.5
  }
});

export default GirlPicture;
