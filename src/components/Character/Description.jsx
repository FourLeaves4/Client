import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Description() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      이 캐릭터와 함께 개발자로서{'\n'} 성장하고 도전하는 여정을 시작해보세요
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    bottom: 16,
  },
  text: {
    color: '#ACACAC',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    fontFamily: 'Jaro-Regular',
  },
});
