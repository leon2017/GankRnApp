import { StackNavigator, TabNavigator } from 'react-navigation';
import { colors } from '../res/styles/common';
import Splash from '../pages/Splash';
import Main from '../pages/home/Main';
import Meizhi from '../pages/meizhi/Meizhi';
import Other from '../pages/other/Other';
// import WebViwPage from '../pages/WebViewPage';

const TabContainer = TabNavigator(
  {
    Main: { screen: Main },
    Meizhi: { screen: Meizhi },
    Other: { screen: Other }
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: colors.colorPrimary,
      inactiveTintColor: '#999999',
      showIcon: true,
      style: {
        backgroundColor: colors.backgroundColor
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  }
);

const App = StackNavigator(
  {
    Splash: { screen: Splash },
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    // Web: { screen: WebViwPage }
  },
  {
    animationEnabled: false,
    headerMode: 'screen',
    swipeEnabled: false,
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.colorPrimary
      },
      headerTitleStyle: {
        color: colors.white,
        fontSize: 20
      },
      headerTintColor: colors.white
    }
  }
);

export default App;
