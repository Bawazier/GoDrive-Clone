import React from 'react';

import HomeScreen from '../screens/Home';
import NotFoundScreen from '../screens/NotFound';
import SearchPlacesScreen from '../screens/SearchPlaces';
import SetMapPlacesScreen from '../screens/SetMapPlaces';
import ConfirmOrderScreen from '../screens/ConfirmOrder';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchPlaces"
          component={SearchPlacesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SetMapPlaces"
          component={SetMapPlacesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmOrder"
          component={ConfirmOrderScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigations;
