import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { AppContext } from '_services'
import { RenderListItem } from '_templates'
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
    return <RenderListItem item={item} />
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.welcomeText}>Bem vindo!</Text>
      <View style={Styles.viewButton}>
        <Button title='Criar novo registro' style={Styles.registerBtn} onPress={handleCreateNewEntry}></Button>
      </View>
      <View style={Styles.viewEntries}>
        <FlatList data={context.agenda} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    </View>
  )
}

export default Main
