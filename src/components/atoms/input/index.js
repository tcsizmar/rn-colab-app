import { TextInput } from 'react-native'

const InputDeTexto = (ref, value, callback) => {

  return <TextInput ref={ref} value={value} onChangeText={callback} />
}

export default InputDeTexto
