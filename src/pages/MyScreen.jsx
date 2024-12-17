import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileSection from '../components/profileSection';
import LevelBarSection from '../components/LevelBarSection';
import LevelLabel from '../components/LevelLabel';
import DeveloperStep from '../components/DevelopStep';
import DeveloperStageButton from '../components/DeveloperStageButton';
import CompletionLabel from '../components/CompletionLabel';
import GrassBoard from '../components/GrassBoard';
export default function MyScreen() {
  return (
    <View style={styles.container}>
      {/* 상단 섹션: ProfileSection + LevelBarSection */}
      <View style={styles.topSection}>
        <ProfileSection />
        <LevelBarSection />
        <LevelLabel/>
        <DeveloperStep />
        <DeveloperStageButton />
        <CompletionLabel />
        <GrassBoard />

      </View>
      
      {/* 다른 UI 요소들 추가 */}
      <View style={styles.otherContent}>
        {/* 다른 컴포넌트를 여기에 추가 */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  topSection: {
    paddingTop: 50, // 상단 여백
    paddingHorizontal: 20, // 좌우 여백
    marginBottom: 30, // 아래 여백
    borderRadius: 12,
    alignItems: 'center', // 가로축 중앙 정렬
  },
  otherContent: {
    flex: 1,
    // 나머지 콘텐츠를 아래쪽에 위치
  },
});
