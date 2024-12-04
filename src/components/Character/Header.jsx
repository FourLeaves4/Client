import React from 'react';
import { View, Animated, Text, StyleSheet } from 'react-native';

export default function Header({ title, subtitle, fadeAnim }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
        {subtitle}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end', // 텍스트를 아래로 정렬
    height: 120, // Header 높이 축소
    marginBottom: 20, // 아래 여백 추가
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
    marginTop: 6, // 제목과 부제목 사이의 간격
  },
});
