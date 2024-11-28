import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LevelLabel = () => {
  return (
    <View style={styles.label}>
      <Text style={styles.text}>Lv.01</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    position: 'absolute', // 필요한 위치에 고정
    top: 270, // 조정 필요
    right: 20, // 조정 필요
    width: 50, // 적절한 너비
    height: 22,
    justifyContent: 'center', // 세로 정렬
    alignItems: 'center', // 가로 정렬
  },
  text: {
    fontWeight: '400',
    color: '#fbf15bb2',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default LevelLabel;
