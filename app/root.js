import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import App from './containers/app';

class Root extends Component {
  render() {
    return (
      <Router>
        <Scene key="main" component={App} hideNavBar />
      </Router>
    );
  }
}
export default Root;
