import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end', // 텍스트를 아래로 정렬
    height: 120, // Header 높이 축소
    marginBottom: 30, // 아래 여백 추가
    backgroundColor: 'transparent', // 배경색 제거
  },
  title: {
    fontFamily: 'Jaro-Regular',
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: 'Jaro-Regular',
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 28,
    marginTop: 4, // 제목과 부제목 사이의 간격
  },
});
