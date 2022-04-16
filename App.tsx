import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components';
import {Routes} from './src/routes';
import theme from './src/theme';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
