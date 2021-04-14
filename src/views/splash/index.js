/** Bibliotecas */
import React, { useContext, useEffect } from 'react'
import { ImageBackground, Text, View } from 'react-native'
/** Serviços */
import { AppContext } from '_services'
import { StorageHelper } from '_utils'

/** Componentes */

/** Outros Imports */
import Styles from '_views/splash/styles'
import { STORAGE_LIST } from '../../../src/config'
const splash_img = require('_assets/images/calendar-splash.jpg')

const Splash = ({ navigation}) => {
  const context = useContext(AppContext)

  useEffect(()=> {
    getData()   

    // SO PASSA PRA PROXIMA TELA DEPOIS DE 3 SEGUNDOS
    setTimeout(() => {
      navigation.navigate('Main')
    }, 3000)
  })

  // PEGANDO OS DADOS DO APLICATIVO QUE ESTAO SALVOS NO ASYNC STORAGE
  const getData = async () => {
    let objetoComArrayAgenda = await StorageHelper.retrieveData(STORAGE_LIST)
    objetoComArrayAgenda = objetoComArrayAgenda ? JSON.parse(objetoComArrayAgenda) : []

    context.setAgenda(objetoComArrayAgenda.agendaStorage)
  }

  return (
    <View style={Styles.container}>
      <ImageBackground source={splash_img} style={Styles.imageBackground}>
        <Text style={Styles.welcomeText}>Bem vindo(a) a nossa agenda eletrônica</Text>
      </ImageBackground>
    </View>
  )
}

export default Splash
