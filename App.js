import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Character from './src/pages/Character';
import Start from './src/pages/start';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          options={{ headerShown: false }}
          component={Start}
        />
        <Stack.Screen
          name="Choice"
          options={{ headerShown: false }}
          component={Character}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
