/*
 * @Desc:  首页gank list item 
 * @Author: LeonWang 
 * @Date: 2017-09-17 17:54:54  
 * */
import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import store from 'react-native-simple-store';
import { Actions } from 'react-native-router-flux';
import DateUtil from '../utils/DateUtil';
import { colors } from '../res/styles/common';
import ToastUtil from '../utils/ToastUtil';

class HomeListItem extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    // const { navigate } = this.props.navigation;
    const detail = this.props.itemData;
    // navigate('Web', detail);
    // ToastUtil.show('我被点击了');
    store.save('webDetail', detail);
    Actions.webview();
  }
  renderImage(imgUrl) {
    try {
      const tempUrl = imgUrl.images[0];
      return (
        <Image style={styles.itemImg} source={{ uri: tempUrl }} />
      );
    } catch (error) {
      return <View />;
    }
  }

  render() {
    const tempData = this.props.itemData;
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.container}>
          {this.renderImage(tempData)}
          <View style={styles.itemRightContainer}>
            <Text style={styles.itemTitle}>
              {tempData.desc}
            </Text>
            <View style={styles.itemRightBottom}>
              <Text style={styles.itemRightBottomText}>
                {tempData.who}
              </Text>
              <Text style={styles.itemRightBottomText}>
                {DateUtil.fromNowTime(tempData.publishedAt)}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  itemImg: {
    width: 85,
    height: 65,
    marginRight: 10
  },
  itemRightContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  itemTitle: {
    fontSize: 18,
    textAlign: 'left',
    color: colors.black
  },
  itemRightBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  itemRightBottomText: {
    color: colors.textColor,
    fontSize: 12
  }
});

export default HomeListItem;
