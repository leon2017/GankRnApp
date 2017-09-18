import { NavigationActions } from 'react-navigation';

const reset = (navigation, routeName) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName }),
      // NavigationActions.navigate({ routeName: 'Web' })
    ]
  });
  navigation.dispatch(resetAction);
};
export default {
  reset
};
