import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function GoogleLoginButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={require('../../../assets/Google_Image.png')} style={styles.icon} />
      <Text style={styles.text}>Google로 로그인</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: 345,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  text: {
    fontFamily: 'Pretendard-SemiBold',
    fontWeight: '600',
    fontSize: 16,
    color: '#000000',
  },
});
