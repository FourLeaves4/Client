import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BottomTabNavigator from './src/BottomTabNavigator';

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
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
