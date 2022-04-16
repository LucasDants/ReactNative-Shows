import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ShowsStackRoutes} from './shows.stack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <ShowsStackRoutes />
    </NavigationContainer>
  );
}
