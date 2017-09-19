/*
 * @Desc:  webview
 * @Author: LeonWang 
 * @Date: 2017-09-18 10:30:38  
 * */

import React, { Component } from 'react';
import {
  WebView,
  StyleSheet,
  InteractionManager,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import store from 'react-native-simple-store';
import Icon from 'react-native-vector-icons/Ionicons';
import LoadingView from '../components/LoadingView';
import { colors } from '../res/styles/common';

class WebViewPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params ? navigation.state.params.headerTitle : 'やばいな〜〜〜'
  });
  constructor(props) {
    super(props);
    this.state = {
      webDetail: {},
      detailTitle: 'ちょっとまって。。。'
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      store.get('webDetail').then((webDetail) => {
        this.setState({
          webDetail,
          detailTitle: this.state.webDetail.desc
        }, () => {
          // 通过在componentDidMount里面设置setParams将title的值动态修改
          this.props.navigation.setParams({
            headerTitle: this.state.webDetail.desc,
          });
        });
      });
    });
  }

  renderLoading() {
    return <LoadingView />;
  }

  render() {
    const deatilData = this.state.webDetail;
    return (
      <View style={{ flex: 1 }}>
        <WebView
          style={styles.container}
          ref="webview"
          source={{ uri: deatilData.url }}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          scalesPageToFit
          decelerationRate="normal"
          onShouldStartLoadWithRequest={() => {
            const shouldStartLoad = true;
            return shouldStartLoad;
          }}
          onNavigationStateChange={this.onNavigationStateChange}
          renderLoading={this.renderLoading}
        />
      </View>
    );
  }
}

const WebPage = StackNavigator(
  {
    WebViewPage: { screen: WebViewPage },
  },
  {
    animationEnabled: false,
    headerMode: 'screen',
    navigationOptions: {
      headerLeft: null,
      headerStyle: {
        backgroundColor: colors.colorPrimary,
      },
      headerTitleStyle: {
        color: colors.white,
        fontSize: 20
      },
      headerTintColor: colors.white
    }
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
});

export default WebPage;
