import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Description() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        캐릭터 꾸미기 메뉴에서{'\n'}마음에 드는 모습으로 변경할 수 있어요.
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
