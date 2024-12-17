import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './src/pages/start';
import Questions from './src/pages/question';
import BottomTabNavigator from './src/BottomTabNavigator';
import Character from './src/pages/character';
import MyScreen from './src/pages/MyScreen';
import DeveloperStageScreen from './src/pages/DeveloperStageScreen';

const Stack = createStackNavigator();

const MyDarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000', // 기본 배경을 검정색으로 설정
  },
};

// 로딩 화면 컴포넌트
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // 2초 후 Start 화면으로 이동
    const timer = setTimeout(() => {
      navigation.replace('Start'); // replace를 사용하여 로딩 화면 스택 제거
    }, 2000);

    return () => clearTimeout(timer); // 타이머 정리
  }, [navigation]);

  return (
    <View style={styles.splashContainer}>
      {/* 로고 이미지 사용 시 */}
      <Image source={require('./assets/logo.png')} style={styles.logoImage} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer theme={MyDarkTheme}>
      <Stack.Navigator>
        {/* 로딩 화면 */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} // 헤더 숨김
        />
        {/* Start 화면 */}
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        {/* 나머지 화면 */}
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Character"
          component={Character}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyScreen"
          component={MyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DeveloperStageScreen"
          component={DeveloperStageScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // 로딩 화면 배경색
  },
  logoText: {
    fontSize: 28,
    color: '#fff', // 로고 텍스트 색상
    fontWeight: 'bold',
  },
  logoImage: {
    width: 210,
    //height: 150,
    marginBottom: 20,
  },
});
