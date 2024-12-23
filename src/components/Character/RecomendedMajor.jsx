import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RecommendedMajor({ major }) {
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{major}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: '#6f1010',
    paddingHorizontal: 24,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 1,
    alignSelf: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
