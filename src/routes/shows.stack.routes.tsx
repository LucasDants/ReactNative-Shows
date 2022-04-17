import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Shows} from '../screens/Shows';
import {Show} from '../screens/Show';
import {Episode} from '../screens/Episode';

const {Navigator, Screen} = createNativeStackNavigator();

export function ShowsStackRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Shows" component={Shows} />
      <Screen name="Show" component={Show} />
      <Screen name="Episode" component={Episode} />
    </Navigator>
  );
}
