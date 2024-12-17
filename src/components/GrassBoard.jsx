import React from 'react';
import { View, StyleSheet } from 'react-native';

const grassData = [
  3, 2, 1, 0, 0, 1, 4, 3, 5, 6, 0, 2, 1, 3, 4,
  2, 1, 0, 0, 3, 5, 6, 2, 1, 0, 4, 3, 5, 6, 4,
];

export default function GrassBoard() {
  return (
    <View style={styles.frame}>
      {grassData.map((value, index) => (
        <View
          key={index}
          style={[
            styles.commonGrass,
            value === 0 && styles.emptyGrass, // 빈 잔디 스타일 추가
            value === 1 && styles.grass1,
            value === 2 && styles.grass2,
            value === 3 && styles.grass3,
            value === 4 && styles.grass4,
            value === 5 && styles.grass5,
            value === 6 && styles.grass6,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: 350,
    height: 200,
    alignItems: 'center',
    gap: 8, // React Native는 gap을 직접 지원하지 않으므로 margin을 사용해야 함
    padding: 12,
    backgroundColor: '#66666633',
    borderRadius: 24,
    overflow: 'hidden',
  },
  commonGrass: {
    width: 28,
    height: 28,
    borderRadius: 14,
    margin: 2, // gap을 대신하는 margin
  },
  emptyGrass: {
    backgroundColor: 'rgba(251, 241, 91, 0.1)', // 빈 잔디의 배경색
  },
  grass1: {
    backgroundColor: '#fbf15b',
  },
  grass2: {
    backgroundColor: '#fbf15be6',
  },
  grass3: {
    backgroundColor: '#fbf15b1a',
  },
  grass4: {
    backgroundColor: '#fbf15bb2',
  },
  grass5: {
    backgroundColor: '#fbf15b4c',
  },
  grass6: {
    backgroundColor: '#fbf15b80',
  },
});
