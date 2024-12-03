import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function CharacterDisplay() {
  return (
    <View style={styles.container}>
      {/* 합쳐진 캐릭터와 텍스트 이미지 */}
      <Image
        source={require('../../../assets/CharacterWithFontEnd.png')} // 올바른 경로로 변경
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // 필요하면 전체 화면 공간을 차지하도록 설정
    backgroundColor: '#111111', // 디자인에 맞는 배경색
    marginBottom: 30,
  },
  image: {
    width: 393, // 디자인에 맞는 너비로 조정
    height: 546, // 디자인에 맞는 높이로 조정
    resizeMode: 'contain', // 비율 유지
  },
});
