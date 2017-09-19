import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import App from './containers/app';
import WebViewPage from './pages/WebViewPage';

class Root extends Component {
  render() {
    return (
      <Router>
        <Scene key="main" component={App} hideNavBar />
        <Scene key="webview" component={WebViewPage} />
      </Router>
    );
  }
}
export default Root;
