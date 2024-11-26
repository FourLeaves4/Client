import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfileCard.jsx';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ProfileCard />

      {/* 추가 콘텐츠를 여기에 추가할 수 있습니다 */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // 배경색 검정
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
  },
});

export default HomeScreen;
