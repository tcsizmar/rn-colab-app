import { Icon } from 'native-base'
import React from 'react'
import { View, Text, TouchableOpacity  } from 'react-native'
import { Colors } from '_styles'
import Styles from './styles'

const RenderListItem = ({ item, onDeleteAction }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.textContainer}>
        <Text style={Styles.textName}>{item.nome}</Text>
        <Text style={Styles.textSmall}>{item.endereco}</Text>
        <Text style={Styles.textSmall}>{item.telefone}</Text>
      </View>
      <View style={Styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => onDeleteAction(item)}
        >
          <Icon name='delete' color={Colors.RED} size={25} type='MaterialIcons' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RenderListItem
