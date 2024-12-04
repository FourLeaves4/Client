import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import ProfileCard from '../components/ProfileCard';

function HomeScreen({ route }) {
  const { character } = route.params || {};

  if (!character) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>캐릭터가 선택되지 않았습니다.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* 상단 캐릭터와 프로필 */}
      <View style={styles.imageWrapper}>
        <ProfileCard />
        <Image source={character.homeImage} style={styles.image} />
      </View>

      {/* 하단 스크롤 가능한 미션 창 */}
      <View style={styles.missionContainer}>
        <Text style={styles.missionTitle}>미션 리포트</Text>
        <View style={styles.missionContent}>
          <Text style={styles.missionText}>😄  전공 공부하기</Text>
          <View style={styles.completeButton}>
            <Text style={styles.completeText}>완료하기</Text>
          </View>
        </View>
        {/* 추가 콘텐츠 */}
        <View style={styles.missionContent}>
          <Text style={styles.missionText}>📘 React 공부하기</Text>
          <View style={styles.completeButton}>
            <Text style={styles.completeText}>완료하기</Text>
          </View>
        </View>
        <View style={styles.missionContent}>
          <Text style={styles.missionText}>💻 프로젝트 완성하기</Text>
          <View style={styles.completeButton}>
            <Text style={styles.completeText}>완료하기</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // 스크롤 가능한 영역 확장
    backgroundColor: '#000',
    paddingBottom: 1, // bottomBar 공간만큼 여백 추가
    marginTop: 24,
  },
  imageWrapper: {
    alignItems: 'center', // 이미지 가로 정렬
    marginBottom: 20, // 아래 여백
  },
  image: {
    width: 200, // 이미지 가로 크기 설정
    height: 500, // 이미지 세로 크기 설정
    resizeMode: 'cover', // 비율 유지하며 크기 조정
  },
  missionContainer: {
    width: '98%',
    alignSelf: 'center',
    backgroundColor: '#2B2A2A',
    borderRadius: 26,
    padding: 16,
    marginTop:-120,
    paddingBottom: 100,
    paddingTop: 20,
  },
  missionTitle: {
    marginTop:10,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    left: 10,
  },
  missionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 34,
    marginBottom: 14,
  },
  missionText: {
    color: '#fff',
    fontSize: 20,
    right: 10,
  },
  completeButton: {
    backgroundColor: '#ADA209',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 18,
    left: 14,
  },
  completeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
