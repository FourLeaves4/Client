import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Character from './src/pages/Character';
import Start from './src/pages/start';
import Questions from './src/pages/question';
import Login from './src/pages/Login';

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
        <Stack.Screen
          name="Questions"
          options={{ headerShown: false }}
          component={Questions}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
