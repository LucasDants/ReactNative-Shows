import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Shows} from '../screens/Shows';
import {Show} from '../screens/Show';
import {Episode} from '../screens/Episode';
import {LockScreen} from '../screens/LockScreen';
import {Favorites} from '../screens/Favorites';

const {Navigator, Screen} = createNativeStackNavigator();

export function ShowsStackRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="LockScreen" component={LockScreen} />
      <Screen
        name="Shows"
        component={Shows}
        options={{gestureEnabled: false}}
      />
      <Screen name="Show" component={Show} />
      <Screen name="Episode" component={Episode} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
}
