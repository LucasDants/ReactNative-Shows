import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Shows} from '../screens/Shows';

const {Navigator, Screen} = createNativeStackNavigator();

export function ShowsStackRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="shows" component={Shows} />
    </Navigator>
  );
}
