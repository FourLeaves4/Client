import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import axios from 'axios';

function HomeScreen({ route }) {
  const { character, userId: passedUserId, isNewUser } = route.params || {};
  const userId = passedUserId || 1; // 임시로 1을 기본값으로 사용 (테스트 중)

  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState(''); // 사용자 이름 상태
  const [userLevel, setUserLevel] = useState(1); // 사용자 레벨 상태 추가
  const BASE_URL = 'https://port-0-server-lz1cq56f81af005d.sel4.cloudtype.app';

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        if (isNewUser && character?.major) {
          console.log('POST 요청 URL:', `${BASE_URL}/home/${userId}/mission`);
          const postResponse = await axios.post(
            `${BASE_URL}/home/${userId}/mission`,
            { major: character.major },
            { headers: { 'Content-Type': 'application/json' } }
          );
          console.log('POST 요청 응답:', postResponse.data);
        }

        console.log('GET 요청 URL:', `${BASE_URL}/home/${userId}/mission`);
        const getResponse = await axios.get(`${BASE_URL}/home/${userId}/mission`);
        console.log('GET 요청 응답:', getResponse.data);

        // 사용자 이름과 레벨 상태 업데이트
        setUserName(getResponse.data.name);
        setUserLevel(getResponse.data.level); // 추가: 사용자 레벨 저장

        // 미션 데이터 세팅
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

    fetchMissions();
  }, [userId, character, isNewUser]);

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
      {/* 상단 캐릭터와 프로필 */}
      <View style={styles.imageWrapper}>
        {/* ProfileCard에 userName과 userLevel 전달 */}
        <ProfileCard name={userName} level={userLevel} />
        <Image source={character.homeImage} style={styles.image} />
      </View>

      {/* 하단 스크롤 가능한 미션 창 */}
      <View style={styles.missionContainer}>
        <Text style={styles.missionTitle}>미션 리포트</Text>
        {missions.map((mission) => (
          <View key={mission.id} style={styles.missionContent}>
            <Text style={styles.missionText}>{mission.text}</Text>
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
