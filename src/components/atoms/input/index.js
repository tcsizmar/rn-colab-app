import { TextInput } from 'react-native'

const InputDeTexto = (mudaTexto, valor) => {

  return (
    <TextInput
      onChangeText={mudaTexto}
      value={valor}
    >
    </TextInput>
  )
}

export default InputDeTexto
