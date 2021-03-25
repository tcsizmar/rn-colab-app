import { createStackNavigator } from 'react-navigation-stack'
import Splash from '_views/splash'

const AuthNavigatorConfig = {
  initialRouteName: 'Auth',
}

const RouteConfigs = {
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
    },
  }
}

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig)

export default AuthNavigator
