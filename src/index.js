import 'react-native-gesture-handler';
import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from './routes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Routes.map(route => <Stack.Screen key={route.name} name={route.name} component={route} />)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
