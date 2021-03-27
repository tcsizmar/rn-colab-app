/** Bibliotecas */
import React from 'react'
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View } from 'react-native'
/** Serviços */

/** Componentes */


/** Outros Imports */
const splash_img = { uri: 'https://cdn.pixabay.com/photo/2017/01/18/17/52/calendar-1990453_960_720.jpg' }

const Splash = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ flex: 1}}>
        {/* <ImageBackground
          source={splash_img}
          style={{ flex: 1, resizeMode: 'cover' , width: '100%', height:'100%'}}
        /> */}


        {/* </ImageBackground> */}
        <Text>Nickolas</Text>
      </View>
    </SafeAreaView>
  )
}

export default Splash
