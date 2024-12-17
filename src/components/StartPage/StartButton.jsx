import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function StartButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>시작하기</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: 345,
    marginTop: -14,
    backgroundColor: '#FBF15B',

  },
  text: {
    fontFamily: 'Pretendard-SemiBold',
    fontWeight: '600',
    fontSize: 16,
    color: '#111111',
  },
});
