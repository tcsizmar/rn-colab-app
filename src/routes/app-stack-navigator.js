import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from '_views/main'

const StackNavigatorConfig = {
  initialRouteParams: 'Main',
  header: null,
  headerMode: 'none',
}

const RouteConfigs = {
  Main: {
    screen: MainScreen,
  }
}

const AppStackNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig)

export default AppStackNavigator
