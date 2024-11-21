import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './src/pages/start';
import Questions from './src/pages/question';
import BottomTabNavigator from './src/BottomTabNavigator';
import Character from './src/pages/character';

const Stack = createStackNavigator();

const MyDarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000', // 기본 배경을 검정색으로 설정함
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyDarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          options={{ headerShown: false }}
          component={Start}
        />
        <Stack.Screen
          name="Questions"
          options={{ headerShown: false }}
          component={Questions}
        />
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name="Character"
          options={{ headerShown: false }}
          component={Character}
        />
      </Stack.Navigator>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
    </NavigationContainer>
  );
}
