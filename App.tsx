import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ToastProvider} from 'react-native-toast-notifications';
import {ThemeProvider} from 'styled-components';
import {Routes} from './src/routes';
import theme from './src/theme';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Routes />
        </ToastProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
