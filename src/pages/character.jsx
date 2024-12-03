import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Character Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // 배경색 검정
  },
  text: {
    fontSize: 24,
    color: '#fbf15b', // 글자색 노란색
    fontWeight: 'bold',
  },
});
