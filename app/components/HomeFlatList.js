/*
 * @Desc:  首页listview
 * @Author: LeonWang 
 * @Date: 2017-09-15 18:20:39  
 * */
import React, { Component } from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
  Text
} from 'react-native';
import HomeListItem from '../components/HomeListItem';
import { colors } from '../res/styles/common';
import HttpUtils from '../http/HttpUtils';
import { getCategoryUrl } from '../http/Api';
import ToastUtil from '../utils/ToastUtil';


class HomeFlatList extends Component {
  static defaultProps={
    category: 'all'
  }

  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      loading: false,
      hasMore: true,
      page: 1,
      categoryType: 'all',
      categoryList: []
    };
    this.sendRequest = this.sendRequest.bind(this);
  }
  componentWillMount() {
    // state是异步加载的，所以渲染的时候使用回调
    this.setState({
      categoryType: this.props.category
    }, () => {
      this.sendRequest();
    });
  }

  sendRequest(catrgory) {
    const categoryItem = catrgory || this.state.categoryType;
    const pageItem = this.state.page;
    const homeUrl = getCategoryUrl(categoryItem, pageItem);
    console.log(homeUrl);
    HttpUtils.get(homeUrl)
      .then((json) => {
        // 请求成功
        if (json.error === false) {
          console.log('==================请求成功==================');
          this.setState({
            categoryList: json.results,
            page: 1,
            refreshing: false,
            hasMore: true
          });
          console.log('==================解析成功==================');
        } else {
          // TODO 处理请求失败
          console.log('处理请求失败');
          ToastUtil.show('网络异常请稍后重试');
          this.setState({ refreshing: false, hasMore: true });
        }
      });
  }

  // 返回itemView
  renderItemView({ item }) {
    return (
      <HomeListItem itemData={item} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.sendRequest}
            />
          }
          extraData={this.state}
          removeClippedSubviews={false}
          data={this.state.categoryList}
          renderItem={this.renderItemView}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
});

export default HomeFlatList;
