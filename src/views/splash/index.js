import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme } from 'react-native'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <Text>ESTA É A TELA SPLASH</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
