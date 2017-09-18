/*
 * @Desc:  webview
 * @Author: LeonWang 
 * @Date: 2017-09-18 10:30:38  
 * */

import React, { Component } from 'react';
import {
  WebView,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LoadingView from '../components/LoadingView';
import { colors } from '../res/styles/common';

class WebViewPage extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: navigation.state.params.detail.desc,
      tabBarIcon: ({ tintColor }) =>
        <Icon name="md-grid" size={25} color={tintColor} />
    })
    renderLoading() {
      return <LoadingView />;
    }

    render() {
      const { params } = this.props.navigation.state;
      return (
        <View style={{ flex: 1 }}>
          <WebView
            style={styles.container}
            ref="webview"
            source={{ uri: params.detail.url }}
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
});

export default WebViewPage;
