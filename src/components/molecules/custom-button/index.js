import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Icon } from 'native-base'
import Styles from './styles'
import { Colors } from '_styles'

const CustomButton = ({ iconName, onPressAction, title }) => (
  <TouchableOpacity style={Styles.buttonContainer} onPress={onPressAction}>
    {iconName && <Icon name={iconName} fontSize={25} color={Colors.BLACK} style={Styles.icon} type='MaterialIcons' />}
    <Text style={Styles.buttonText}>{title}</Text>
  </TouchableOpacity>
)

export default CustomButton
