/** Bibliotecas */
import React, { useEffect } from 'react'
import { ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native'
/** Serviços */

/** Componentes */

/** Outros Imports */
import Styles from '_views/splash/styles'
const splash_img = require('_assets/images/calendar-splash.jpg')

const Splash = ({ navigation}) => {

  useEffect(()=> {
    setTimeout(() => {
      navigation.navigate('Main')
    }, 3000)
  })

  return (
    <View style={Styles.container}>
      <ImageBackground source={splash_img} style={Styles.imageBackground}>
        <Text style={Styles.welcomeText}>Bem vindo(a) a nossa agenda eletrônica</Text>
      </ImageBackground>
    </View>
  )
}

export default Splash
