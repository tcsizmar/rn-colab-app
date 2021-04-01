import { View } from 'react-native'
import { InputDeTexto } from '_atoms'
import Styles from './styles'

const InputField = (ref, value, callback) => {
  return (
    <View styles={Styles.container}>
      <InputDeTexto ref={ref} value={value} onChangeText={callback} />
    </View>
  )
  const 
}

export default InputField
