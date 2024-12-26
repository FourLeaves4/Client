import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import axios from 'axios';

function HomeScreen({ route }) {
  const { character, userId: passedUserId } = route.params || {};
  const userId = passedUserId || 1; // 임시로 1을 기본값 사용

  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [userLevel, setUserLevel] = useState(1);

  const BASE_URL = 'https://port-0-server-lz1cq56f81af005d.sel4.cloudtype.app';

  useEffect(() => {
    const postMajorAndFetchMissions = async () => {
      try {
        // 캐릭터(전공) 정보가 변경될 때마다 POST
        if (character?.major) {
          console.log('POST 요청 URL:', `${BASE_URL}/home/${userId}/mission`);
          const postResponse = await axios.post(
            `${BASE_URL}/home/${userId}/mission`,
            { major: character.major },
            { headers: { 'Content-Type': 'application/json' } }
          );
          console.log('POST 요청 응답:', postResponse.data);
        }

        // POST 후에는 항상 GET으로 미션 데이터 받아오기
        console.log('GET 요청 URL:', `${BASE_URL}/home/${userId}/mission`);
        const getResponse = await axios.get(`${BASE_URL}/home/${userId}/mission`);
        console.log('GET 요청 응답:', getResponse.data);

        // 응답 데이터 상태 업데이트
        setUserName(getResponse.data.name);
        setUserLevel(getResponse.data.level);

        const missionData = getResponse.data.mission.map((mission, index) => ({
          id: `M${index}`,
          text: mission,
          completed: false,
        }));
        setMissions(missionData);
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    };

    // character가 변경될 때마다 실행
    postMajorAndFetchMissions();
  }, [character]);  // <= 의존성 배열에 character와 userId를 포함

  const completeMission = async (missionId) => {
    try {
      // 로컬 상태 먼저 업데이트
      setMissions((prevMissions) => {
        const updatedMissions = prevMissions.map((mission) =>
          mission.id === missionId ? { ...mission, completed: true } : mission
        );

        // 완료된 미션을 맨 아래로 보내는 로직(선택 사항)
        const completedMissions = updatedMissions.filter((mission) => mission.completed);
        const incompleteMissions = updatedMissions.filter((mission) => !mission.completed);
        return [...incompleteMissions, ...completedMissions];
      });

      console.log(`${missionId} 미션 완료됨`);

      // 서버에 완료된 미션 데이터 전달
      const today = missions.map((mission) =>
        mission.id === missionId || mission.completed ? 1 : 0
      );
      console.log('today 배열:', today);

      const response = await axios.post(
        `${BASE_URL}/home/${userId}/mission/value`,
        { today },
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log('미션 완료 POST 요청 성공:', response.data);
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    if (error.response) {
      console.error('응답 오류:', error.response.data);
      Alert.alert('오류', `서버 오류: ${error.response.data.message || '요청 실패'}`);
    } else if (error.request) {
      console.error('요청 오류:', error.request);
      Alert.alert('오류', '서버에 응답이 없습니다. 네트워크를 확인하세요.');
    } else {
      console.error('설정 오류:', error.message);
      Alert.alert('오류', '요청을 보내는 중 문제가 발생했습니다.');
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>미션 로딩 중...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.imageWrapper}>
        <ProfileCard name={userName} level={userLevel} />
        <Image source={character?.homeImage} style={styles.image} />
      </View>

      <View style={styles.missionContainer}>
        <Text style={styles.missionTitle}>미션 리포트</Text>
        {missions.map((mission) => (
          <View key={mission.id} style={styles.missionContent}>
            <Text style={styles.missionText}>{mission.text}</Text>
            <TouchableOpacity
              style={[
                styles.completeButton,
                mission.completed && styles.completedButton,
              ]}
              onPress={() => completeMission(mission.id)}
              disabled={mission.completed}
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
    flexGrow: 1,
    backgroundColor: '#000',
    paddingBottom: 1,
    marginTop: 24,
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 500,
    resizeMode: 'cover',
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
    backgroundColor: '#555',
  },
  completeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  completedText: {
    color: '#aaa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
