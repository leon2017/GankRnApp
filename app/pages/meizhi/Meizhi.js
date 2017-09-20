import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ListView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import store from 'react-native-simple-store';
import { Actions } from 'react-native-router-flux';
import { CachedImage } from 'react-native-img-cache';
import { window, colors } from '../../res/styles/common';
import { getMeizhiUrl } from '../../http/Api';
import ToastUtil from '../../utils/ToastUtil';
import HttpUtils from '../../http/HttpUtils';

const defaultIcon = require('../../res/img/default_girl_icon.png');

class Meizhi extends Component {
  static navigationOptions = {
    title: '妹纸来啦',
    tabBarLabel: '妹纸',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="md-images" size={25} color={tintColor} />
  };

  constructor(props) {
    super(props);
    this.state = {
      showDefault: false,
      meizhiList: []
    };
    this.sendRequest = this.sendRequest.bind(this);
  }

  componentWillMount() {
    this.sendRequest();
  }

  sendRequest() {
    const meizhiUrl = getMeizhiUrl();
    HttpUtils.get(meizhiUrl)
      .then((json) => {
        if (json.error === false) {
          this.setState({
            meizhiList: json.results
          });
        } else {
          ToastUtil.show('网络异常请稍后重试');
        }
      });
  }

  renderItem({ item, index }) {
    // console.log(item.url);
    /* onLoadStart={() => this.setState({ showDefault: true })}
          onLoad={() => this.setState({ showDefault: false })} */
    // const icon = this.state.showDefault ? defaultIcon : { uri: item.url };
    const icon = { uri: item.url };
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={1}
        onPress={() => {
          console.log('我被点击了');
          store.save('girlUrl', item.url);
          Actions.girl();
        }}
      >
        <CachedImage
          resizeMode={Image.resizeMode.stretch}
          style={styles.gridItem}
          source={icon}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={3}
          horizontal={false}
          extraData={this.state}
          removeClippedSubviews={false}
          data={this.state.meizhiList}
          keyExtractor={(item, index) => index}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  gridItem: {
    width: window.width / 3,
    height: 150,
    borderWidth: 1,
    borderColor: colors.colorAccent
  }
});

export default Meizhi;
