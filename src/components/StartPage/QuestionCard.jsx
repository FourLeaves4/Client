import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function QuestionCard({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF', // 텍스트 색상을 흰색으로 설정
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,

  },
  subtitle: {
    fontSize: 16,
    color: '#D9D9D9', // 부제목의 색상을 설정
    textAlign: 'center', // 가운데 정렬
    width: 190, // 텍스트의 최대 너비를 제한
    lineHeight: 24, // 줄 간격 설정
    paddingHorizontal: 10, // 좌우 여백 추가
    marginTop: 2,
  },
});
