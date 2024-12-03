import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import ProfileCard from '../components/ProfileCard.jsx';

function HomeScreen({ route }) {
  // route를 통해 전달된 캐릭터 데이터 수신
  const { selectedCharacter } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 선택된 캐릭터 정보 표시 */}
      {selectedCharacter && (
        <View style={styles.characterContainer}>
          {/* 캐릭터 이미지 */}
          <Image
            source={selectedCharacter.image}
            style={styles.characterImage}
          />
        </View>
      )}

      {/* "스크롤하여 미션 확인하기" 위에 이미지 추가 */}
      <Image
        source={require('../../assets/chevron-down.png')} // 경로 수정 필요
        style={styles.missionImage}
      />

      {/* 기존 ProfileCard 컴포넌트 */}
      <ProfileCard />

      {/* 추가 콘텐츠 영역 */}
      <View>
        <Text style={styles.additionalText}>스크롤하여 미션 확인하기</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexGrow: 1,
    backgroundColor: '#000', // 배경색 검정
    justifyContent: 'flex-start', // 상단 정렬
    alignItems: 'center', // 가로 중앙 정렬
  },
  characterContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 200,
    //backgroundColor: 'pink',
  },
  characterImage: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  missionImage: {
    width: 24, // 이미지 너비
    height: 24, // 이미지 높이
    resizeMode: 'contain',
    marginBottom: 28,
  },
  additionalText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default HomeScreen;
