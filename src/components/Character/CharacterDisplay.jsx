import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

export default function CharacterDisplay({ character, isRecommended }) {
  return (
    <View style={[styles.container]}>
      {isRecommended && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>AI</Text>
        </View>
      )}
      <Image source={character.image} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width, // 화면 너비
    height: Dimensions.get('window').height * 0.7, // 화면 높이의 70% 차지
    backgroundColor: '#111111', // 배경색
    marginTop: 130,
  },
  badgeContainer: {
    backgroundColor: '#6f1010',
    paddingHorizontal: 24,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 20, // 뱃지와 제목 사이 간격 설정
    alignSelf: 'center',
  },
  
  badgeText: {
    color: '#FFFFFF', // 텍스트 색상 (흰색)
    fontSize: 14, // 텍스트 크기
    fontWeight: 'bold', // 굵은 텍스트
    textAlign: 'center', // 텍스트 중앙 정렬
  },
  image: {
    width: '90%', // 부모 컨테이너의 90% 차지
    height: '90%', // 부모 컨테이너의 90% 차지
    resizeMode: 'contain', // 이미지 비율 유지
  },
  name: {
    fontSize: 28, // 글자 크기를 더 키움
    color: '#FFFFFF',
    marginTop: 10,
  },
});
