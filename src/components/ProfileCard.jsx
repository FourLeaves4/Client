import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileCard({ name }) {
  const navigation = useNavigation(); // navigation 훅 초기화
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('MyScreen')}
    >
      <View style={styles.overlap}>
        {/* name 값을 표시 */}
        <Text style={styles.textWrapper}>{name}</Text>
        <Text style={styles.subText} numberOfLines={1} ellipsizeMode="tail">
          Your Step is Junior Developer!
        </Text>
      </View>
      <View style={styles.overlapGroup}>
        <Image
          source={require('../../assets/profile1.png')} // 메인 이미지 경로
          style={styles.image}
        />
        <Image
          source={require('../../assets/badge1.png')} // 서브 이미지 경로
          style={styles.element}
        />
      </View>
    </TouchableOpacity>
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
    width: 159,
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
    top: 26,
    left: 12,
    fontFamily: 'Jaro-Regular',
    fontWeight: '400',
    color: '#acacac',
    fontSize: 12.5,
    textAlign: 'center',
    lineHeight: 14,
    width: '100%',
    whiteSpace: 'nowrap',
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
    left: 8,
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
