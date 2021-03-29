import React from 'react'
import { LogBox, useColorScheme, StatusBar, SafeAreaView } from 'react-native'
import Navigator from '_routes'
import { useDataFunnel, AppContext } from '_services'

LogBox.ignoreAllLogs()
const App = () => {
  const contextHook = useDataFunnel()
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <AppContext.Provider value={contextHook}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigator />
      </SafeAreaView>
    </AppContext.Provider>
  )
}

export default App
