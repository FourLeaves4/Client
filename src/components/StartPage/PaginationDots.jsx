import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function PaginationDots({ totalDots, activeDot }) {
  return (
    <View style={styles.container}>
      {[...Array(totalDots)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === activeDot ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12, // Use padding or margin in React Native for consistent spacing
    justifyContent: 'center',
    marginTop: 60,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: '#FFFFFF', // 활성화된 점의 색상
  },
  inactiveDot: {
    backgroundColor: '#828287', // 비활성화된 점의 색상
    opacity: 0.5, // 약간 투명하게
  },
});
