import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';

// 화면 크기 동적 계산
const screenWidth = Dimensions.get('window').width; // 기기 크기에 맞춘 동적 너비
const screenHeight = Dimensions.get('window').height;

// 색상 배열 (투명도)
const colors = [
  '#fbf15b1a',
  '#fbf15b4c',
  '#fbf15b80',
  '#fbf15bb2',
  '#fbf15be6',
  '#fbf15b',
];

export default function GrassBoard({ month }) {
  // 🖌️ 투명도 색상을 스타일로 반환하는 함수
  const getGrassStyle = useCallback(
    (value) => ({ backgroundColor: colors[value] }),
    []
  );

  // 📟 로딩 중일 때 로딩 인디케이터 표시
  if (!month) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fbf15b" />
      </View>
    );
  }

  return (
    <View style={styles.frame}>
      {month.map((value, index) => (
        <View key={index} style={[styles.commonGrass, getGrassStyle(value)]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: screenWidth * 0.9, // 화면 너비에 맞춘 동적 크기
    height: screenHeight * 0.23, // 화면 높이에 맞춘 비율 (23%)
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#66666633',
    borderRadius: 24,
    overflow: 'hidden',
  },

  commonGrass: {
    width: screenWidth * 0.072, // 너비의 7%로 비율 적용
    height: screenWidth * 0.072, // 정사각형으로 유지
    borderRadius: (screenWidth * 0.072) / 2, // 반지름도 비율로 계산
    margin: screenWidth * 0.014, // 비율 기반의 여백
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66666633',
  },
});
