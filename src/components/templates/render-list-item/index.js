import { View,  } from 'react-native'
import Styles from './styles'

const RenderListItem = (item) => {
  return (
    <View styles={Styles.container}>
      <Text>Este é um item</Text>
    </View>
  )
}

export default RenderListItem
