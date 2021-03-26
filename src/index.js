import React from 'react';
import { LogBox } from 'react-native';
import Navigator from '_routes';
import { useDataFunnel, AppContext } from '_services';


LogBox.ignoreAllLogs()
const App = () => {
  const contextHook = useDataFunnel();

  return (
      <AppContext.Provider value={contextHook}>
        <Navigator />
      </AppContext.Provider>
  );
};

export default App;
