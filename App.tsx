import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigation from './app/navigation/RootNavigation';
import { StatusBar } from 'react-native';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </>
  );
}

export default App;
