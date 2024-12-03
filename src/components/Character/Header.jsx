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
    justifyContent: 'center',
    height: 240, // 컴포넌트 전체 높이
    marginBottom: 20, // 하단 여백
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
    lineHeight: 32,
    marginTop: 8, // 제목과 부제목 사이의 간격
  },
});
