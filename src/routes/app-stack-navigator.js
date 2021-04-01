import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from '_views/main'
import RegisterScreen from '_views/register'

const StackNavigatorConfig = {
  initialRouteParams: 'Main',
  header: null,
  headerMode: 'none',
}

const RouteConfigs = {
  Main: {
    screen: MainScreen,
  },
  Register: {
    screen: RegisterScreen
  }
}

const AppStackNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig)

export default AppStackNavigator
