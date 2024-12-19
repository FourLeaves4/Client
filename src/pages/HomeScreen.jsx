import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ProfileCard from '../components/ProfileCard';

function HomeScreen({ route }) {
  const { character, missions, today, level, name } = route.params || {};

  // 초기 미션 데이터 설정: 백엔드에서 전달받은 missions와 today를 기반으로 초기 상태 설정
  const initialMissions = missions.map((mission, index) => ({
    id: `mission-${index}`, // 고유 ID 생성
    text: mission,
    completed: today[index] === 1, // today 값이 1이면 완료된 상태로 설정
  }));

  const [missionState, setMissionState] = useState(initialMissions);

  if (!character) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>캐릭터가 선택되지 않았습니다.</Text>
      </View>
    );
  }

  // 미션 완료 처리
  const completeMission = (missionId) => {
    setMissionState((prevMissions) => {
      const updatedMissions = prevMissions.map((mission) =>
        mission.id === missionId ? { ...mission, completed: true } : mission
      );

      // 완료된 미션을 맨 아래로 이동
      const completedMissions = updatedMissions.filter((mission) => mission.completed);
      const incompleteMissions = updatedMissions.filter((mission) => !mission.completed);

      console.log(`${missionId} 미션 완료됨`); // 터미널 출력
      return [...incompleteMissions, ...completedMissions];
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* 상단 캐릭터와 프로필 */}
      <View style={styles.imageWrapper}>
        <ProfileCard />
        <Image source={character.homeImage} style={styles.image} />
        <Text style={styles.characterName}>{character.name}</Text>
        <Text style={styles.level}>현재 레벨: {level}</Text>
      </View>

      {/* 하단 스크롤 가능한 미션 창 */}
      <View style={styles.missionContainer}>
        <Text style={styles.missionTitle}>미션 리포트</Text>
        {missionState.map((mission) => (
          <View key={mission.id} style={styles.missionContent}>
            <Text style={styles.missionText}>{mission.text}</Text>
            <TouchableOpacity
              style={[
                styles.completeButton,
                mission.completed && styles.completedButton,
              ]}
              onPress={() => completeMission(mission.id)}
              disabled={mission.completed} // 완료된 미션은 버튼 비활성화
            >
              <Text
                style={[
                  styles.completeText,
                  mission.completed && styles.completedText,
                ]}
              >
                {mission.completed ? '완료됨' : '완료하기'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
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
  characterName: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  level: {
    fontSize: 18,
    color: '#FFD700',
    marginBottom: 20,
  },
  missionContainer: {
    width: '98%',
    alignSelf: 'center',
    backgroundColor: '#2B2A2A',
    borderRadius: 26,
    padding: 16,
    marginTop: -120,
    paddingBottom: 100,
    paddingTop: 20,
  },
  missionTitle: {
    marginTop: 10,
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
  completedButton: {
    backgroundColor: '#555', // 완료된 버튼 색상 변경
  },
  completeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  completedText: {
    color: '#aaa', // 완료된 버튼 텍스트 색상 변경
  },
});

export default HomeScreen;
