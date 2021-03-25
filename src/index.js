import React from 'react';
import { Root } from 'native-base';
import Navigator from '_routes';
import { useDataFunnel, AppContext } from '_services';


console.disableYellowBox = true;
const App = () => {
  const contextHook = useDataFunnel();

  return (
    <Root>
      <AppContext.Provider value={contextHook}>
        <Navigator />
      </AppContext.Provider>
    </Root>
  );
};

export default App;
