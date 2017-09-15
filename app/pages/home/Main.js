import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { colors } from '../../res/styles/common';

const pages = [];

class Main extends Component {
  static navigationOptions = {
    title: '干货集中营',
    tabBarLabel: '干货',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="md-grid" size={25} color={tintColor} />
  }
  constructor(props) {
    super(props);
    this.state = {
      categoryIds: [
        { key: 'all', value: '全部' },
        { key: 'Android', value: 'Android' },
        { key: 'iOS', value: 'iOS' },
        { key: '前端', value: '前端' },
        { key: '福利', value: '福利' },
        { key: '休息视频', value: '休息视频' },
        { key: '拓展资源', value: '拓展资源' }
      ],
      categoryList: {}
    };
  }

  render() {
    const container = this.state.categoryIds.map((category) => {
      const categoryView = (
        <View key={category.key} tabLabel={category.value} style={Styles.main}>
          <Text>{category.value}</Text>
        </View>
      );
      return categoryView;
    });
    return (
      <ScrollableTabView
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar tabStyle={Styles.tab} textStyle={Styles.tabText} />}
        tabBarBackgroundColor={colors.colorPrimary}
        tabBarUnderlineStyle={Styles.tabIndicator}
        tabBarActiveTextColor={colors.white}
        tabBarInactiveTextColor={colors.colorAccent}
      >{container}</ScrollableTabView>
    );
  }
}

const Styles = StyleSheet.create({
  main: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white
  },
  tab: {
    paddingBottom: 0
  },
  tabText: {
    fontSize: 16
  },
  tabIndicator: {
    backgroundColor: colors.white,
    height: 3
  }
});

export default Main;
