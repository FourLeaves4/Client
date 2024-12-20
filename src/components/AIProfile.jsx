import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AIProfile = () => {
  return (
    <View style={styles.component}>
      {/* 마스코트 프로필 이미지 */}
      <Image
        source={require('../../assets/Ai.png')} // 로컬 이미지 파일 불러오기
        style={styles.ellipse}
      />
      {/* AI에게 상담하기 텍스트 */}
      <Text style={styles.textWrapper}>AI에게 상담하기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    position: 'relative',
    width: 216,
    height: 147,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 76,
    marginTop: 100,
    marginBottom: 40,
  },
  ellipse: {
    borderRadius: 40, // 원형으로 만들기
    marginBottom: 30, // 이미지와 텍스트 간격
  },
  textWrapper: {
    fontFamily: 'Pretendard-Regular',
    fontWeight: '400',
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default AIProfile;
