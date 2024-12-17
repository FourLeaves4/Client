import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen.jsx';
import AICounselScreen from './pages/AICounselScreen.jsx';
import PlanScreen from './pages/PlanScreen.jsx';
import MyScreen from './pages/MyScreen.jsx';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  // 아이콘을 매핑하는 객체
  const icons = {
    Home: { focused: 'home', unfocused: 'home-outline' },
    'AI Counsel': { focused: 'chatbubble', unfocused: 'chatbubble-outline' },
    Plan: { focused: 'calendar', unfocused: 'calendar-outline' },
    My: { focused: 'person', unfocused: 'person-outline' },
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // route.name을 기반으로 아이콘을 설정
          const iconName = focused
            ? icons[route.name].focused
            : icons[route.name].unfocused;
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FBF15B', // 활성화된 아이콘 색상
        tabBarInactiveTintColor: 'gray', // 비활성화된 아이콘 색상
        tabBarStyle: styles.tabBar, // 탭 바 스타일
        tabBarLabelStyle: styles.tabBarLabel, // 탭 라벨 스타일
        headerShown: false, // Stack Navigator 헤더를 숨김
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: '홈' }}
      />
      <Tab.Screen
        name="AI Counsel"
        component={AICounselScreen}
        options={{ title: '상담' }}
      />
      <Tab.Screen
        name="Plan"
        component={PlanScreen}
        options={{ title: '플랜' }}
      />
      <Tab.Screen name="My" component={MyScreen} options={{ title: 'MY' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#000', // 탭 바 배경색
    paddingBottom: 8, // 탭 바 하단 여백
    paddingTop: 10, // 탭 바 상단 여백
    height: 90, // 탭 바 높이
    borderTopWidth: 1, // 상단 테두리 두께
    borderTopColor: '#333', // 상단 테두리 색상
  },
  tabBarLabel: {
    fontSize: 12, // 텍스트 크기
    fontWeight: 'bold',
  },
});

export default BottomTabNavigator;
