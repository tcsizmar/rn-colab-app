import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import AuthNavigator from './auth-navigator'
import AppStackNavigator from './app-stack-navigator'

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    AppStack: AppStackNavigator,
  },
  {
    initialRouteParams: 'Auth',
  },
);

export default createAppContainer(RootNavigator);
