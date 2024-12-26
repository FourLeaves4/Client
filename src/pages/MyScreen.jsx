import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  RefreshControl,
} from 'react-native';
import ProfileSection from '../components/profileSection';
import LevelBarSection from '../components/LevelBarSection';
import LevelLabel from '../components/LevelLabel';
import DeveloperStep from '../components/DevelopStep';
import DeveloperStageButton from '../components/DeveloperStageButton';
import CompletionLabel from '../components/CompletionLabel';
import GrassBoard from '../components/GrassBoard';
import LogOut from '../components/LogOut';

export default function MyScreen() {
  // 사용자 ID를 동적으로 설정 (예: userId 변수를 통해)
  const userId = '1'; // 실제 사용자 ID로 대체
  // 🔥 백엔드 API URL (실제 서버 주소로 교체)
  // 상태로 백엔드 데이터를 저장할 변수 설정
  const [profileData, setProfileData] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadData = () => {
    setIsRefreshing(true); // 새로고침 시작
    // API 호출 예시 (백엔드 URL에 맞게 수정)
    fetch(
      `https://port-0-server-lz1cq56f81af005d.sel4.cloudtype.app/home/${userId}/profile`
    )
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data); // 데이터를 상태에 저장
        setIsRefreshing(false); // 새로고침 종료
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsRefreshing(false); // 새로고침 종료
      });
  };
  // useEffect를 사용하여 컴포넌트가 마운트될 때 데이터 로드
  useEffect(() => {
    loadData();
  }, []);

  // 데이터가 없으면 로딩 중 표시
  if (!profileData) {
    return <Text>Loading...</Text>;
  }
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={loadData} // 새로고침 시 loadData 함수 호출
        />
      }
    >
      <View style={styles.container}>
        {/* 상단 섹션: ProfileSection + LevelBarSection */}
        <View style={styles.topSection}>
          <ProfileSection name={profileData.name} email={profileData.email} />
          <LevelBarSection num={profileData.num} />
          <LevelLabel level={profileData.level} />
          <DeveloperStep level={profileData.level} />
          <DeveloperStageButton />
          <CompletionLabel sum={profileData.sum} />
          <GrassBoard month={profileData.month} />
        </View>

        {/* 다른 UI 요소들 추가 */}
        <View style={styles.otherContent}>
          {/* 다른 컴포넌트를 여기에 추가 */}
          <LogOut />
        </View>
      </View>
    </ScrollView>
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
  scrollContainer: {
    paddingBottom: 40, // 스크롤 시 아래 여유 공간 추가
  },
});
