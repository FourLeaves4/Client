import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.box}>
      <View style={styles.group}>
        <View style={styles.frame}>
          <Image style={styles.star} source={require('./img/star-1.png')} />
          <View style={styles.divWrapper}>
            <Text style={styles.textWrapper}>NOVA</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 137,
    height: 46,
  },
  group: {
    position: 'absolute',
    width: 137,
    height: 46,
    top: 0,
    left: 0,
  },
  frame: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 137,
    position: 'relative',
  },
  star: {
    width: 33.51,
    height: 32.7,
  },
  divWrapper: {
    width: 88,
    height: 40,
    marginRight: -2,
  },
  textWrapper: {
    position: 'absolute',
    height: 40,
    top: 0,
    left: 0,
    fontFamily: 'Jaro-Regular', // 사용자 지정 폰트 사용 시 추가 설정 필요
    fontWeight: '400',
    color: '#fbf15b',
    fontSize: 40,
    textAlign: 'right',
    lineHeight: 40,
    includeFontPadding: false, // Android에서 텍스트 정렬 문제 해결
  },
});
