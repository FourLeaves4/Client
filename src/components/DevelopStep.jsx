import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DeveloperStep = () => {
  return (
    <View style={styles.box}>
      <View style={styles.group}>
        {/* 텍스트 그룹 */}
        <View style={styles.textContainer}>
          <Text style={styles.textWrapper}>Your Step is</Text>
          <Text style={styles.textWrapper2}>Junior Developer!</Text>
        </View>
        {/* 이미지 */}
        <Image
          style={styles.element}
          source={require('../../assets/badge.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    position: 'relative',
    width: 345,
    height: 96,
    marginTop: 50, // 필요한 경우 조정
  },
  group: {
    position: 'absolute',
    width: 345,
    height: 96,
    top: 0,
    left: 0,
    backgroundColor: '#66666666',
    borderRadius: 4,
  },
  textContainer: {
    position: 'absolute',
    width: 233,
    height: 34,
    top: 31,
    left: 84,
  },
  textWrapper: {
    position: 'absolute',
    top: 8,
    left: 0,
    fontWeight: '400',
    color: '#d9d9d9',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22, // line-height 대체
  },
  textWrapper2: {
    position: 'absolute',
    top: 6,
    left: 91,
    textShadowColor: '#ffffff21', // -webkit-text-stroke 대체
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontWeight: '400',
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
  element: {
    position: 'absolute',
    width: 74,
    height: 68,
    top: 15,
    left: 4,
    resizeMode: 'cover',
  },
});

export default DeveloperStep;
