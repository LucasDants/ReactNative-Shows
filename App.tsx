import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ThemeProvider theme={theme}>
        <Text>Movies</Text>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
