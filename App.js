import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './src/pages/start';
import Questions from './src/pages/question';
import BottomTabNavigator from './src/BottomTabNavigator';
import Character from './src/pages/character';
import MyScreen from './src/pages/MyScreen';
import DeveloperStageScreen from './src/pages/DeveloperStageScreen';

const Stack = createStackNavigator();
// 스택 네비게이터를 생성하며, 앱에서 사용할 화면들을 쌓는 방식으로 관리
// 화면 간 이동 시 이전 화면이 스택에 유지되어 뒤로가기 버튼을 통해 다시 돌아갈 수 있다.

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
          name="Character"
          options={{ headerShown: false }}
          component={Character}
        />

        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name="MyScreen"
          component={MyScreen}
          options={{ headerShown: false }} // 헤더 숨김
        />
        <Stack.Screen
          name="DeveloperStageScreen"
          component={DeveloperStageScreen}
          options={{ headerShown: false }} // 헤더 숨김
        />
        
      </Stack.Navigator>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
    </NavigationContainer>
  );
}
