import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import App from './containers/app';
import WebViewPage from './pages/WebViewPage';
import GirlPicture from './pages/meizhi/GirlPicture';

class Root extends Component {
  render() {
    return (
      <Router>
        <Scene key="main" component={App} hideNavBar />
        <Scene key="webview" component={WebViewPage} />
        <Scene key="girl" component={GirlPicture} />
      </Router>
    );
  }
}
export default Root;
