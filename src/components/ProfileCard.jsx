import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <View style={styles.overlap}>
        <Text style={styles.textWrapper}>다귀찮을 띄</Text>
        <Text style={styles.subText} numberOfLines={1} ellipsizeMode="tail">
          Your Step is Junior Developer!
        </Text>
      </View>
      <View style={styles.overlapGroup}>
        <Image
          source={require('../../assets/프로필.png')} // 메인 이미지 경로
          style={styles.image}
        />
        <Image
          source={require('../../assets/badge.png')} // 서브 이미지 경로
          style={styles.element}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 234,
    height: 73,
    marginRight: 110,
    marginTop: 40,
  },
  overlap: {
    position: 'absolute',
    width: 159, // 기존 너비 유지
    height: 48,
    top: 12,
    left: 75,
  },
  textWrapper: {
    position: 'absolute',
    width: 101,
    top: 0,
    left: 0,
    fontFamily: 'Pretendard-SemiBold',
    fontWeight: '600',
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 20,
  },
  subText: {
    position: 'absolute',
    top: 26, // 살짝 조정
    left: 12,
    fontFamily: 'Jaro-Regular',
    fontWeight: '400',
    color: '#acacac',
    fontSize: 12.5, // 폰트 크기 살짝 줄임
    textAlign: 'center',
    lineHeight: 14,
    width: '100%', // 부모 컨테이너 너비에 맞춤
    whiteSpace: 'nowrap', // 줄바꿈 방지
  },
  overlapGroup: {
    position: 'absolute',
    width: 70,
    height: 73,
    top: 0,
    left: 0,
  },
  image: {
    position: 'absolute',
    width: 65,
    height: 65,
    top: 0,
    left: 5,
    resizeMode: 'cover',
  },
  element: {
    position: 'absolute',
    width: 34,
    height: 34,
    top: 39,
    left: 0,
    resizeMode: 'cover',
  },
});
