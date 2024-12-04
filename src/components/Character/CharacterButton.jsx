import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function CharacterButton({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Main', { screen: 'Home' })}
    >
      <Image
        source={require('../../../assets/Google_Image.png')} // Google 아이콘 이미지 경로
        style={styles.icon}
      />
      <Text style={styles.text}>Google로 시작하기</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row', // 아이콘과 텍스트를 가로로 배치
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // 버튼 배경색
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: 345,
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10, // 텍스트와 아이콘 간격
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // 텍스트 색상
  },
});
