import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function PaginationDots({ totalDots, activeDot }) {
  return (
    <View style={styles.dotsContainer}>
      {Array.from({ length: totalDots }).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, activeDot === index && styles.activeDot]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#666666',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#FBF15B', // 활성화된 점 색상
  },
});
