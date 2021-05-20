import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { STORAGE_LIST } from '../../../src/config'
import { CustomButton } from '_molecules'
import { AppContext } from '_services'
import { RenderListItem } from '_templates'
import { StorageHelper } from '_utils'
import Styles from './styles'

const Main = ({ navigation }) => {
  // ESTAMOS CHAMANDO O CONTEXTO PARA ACESSAR UMA VARIAVEL "GLOBAL"
  const context = useContext(AppContext)

  // VARIAVEIS LOCAIS
  const [agendaList, setAgendaList] = useState([])

  // FUNÇÃO QUE REALIZA A NAVEGAÇÃO PARA TELA DE CRIAÇÃO
  const handleCreateNewEntry = () => {
    navigation.navigate('Register')
  }

  // COMPONENTE DA LISTA QUE VAI SER RENDERIZADO
  const renderItem = ({ item }) => {
    return <RenderListItem item={item} onDeleteAction={removeItem} />
  }

  const removeItem = async (item) => {
    const agenda = context.agenda || []
    const newAr = agenda.filter((el) => el.id !== item.id)
    context.setAgenda(newAr)
    await StorageHelper.storeData(STORAGE_LIST, JSON.stringify({ agendaStorage: newAr }))
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.welcomeText}>Bem vindo!</Text>
      <View style={Styles.viewButton}>
        <CustomButton title='Contato' iconName='add' onPressAction={handleCreateNewEntry} />
      </View>
      <View style={Styles.viewEntries}>
        <FlatList data={context.agenda} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    </View>
  )
}

export default Main
