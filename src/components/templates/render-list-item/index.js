import React from 'react'
import { View, Text  } from 'react-native'
import Styles from './styles'

const RenderListItem = ({ item }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.textContainer}>
        <Text style={Styles.textName}>{item.nome}</Text>
        <Text style={Styles.textSmall}>{item.endereco}</Text>
        <Text style={Styles.textSmall}>{item.telefone}</Text>
      </View>
      <View style={Styles.buttonsContainer}></View>
    </View>
  )
}

export default RenderListItem
