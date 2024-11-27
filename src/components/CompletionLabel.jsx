import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompletionLabel = () => {
  return (
    <View style={styles.label}>
      <Text style={styles.textWrapper}>415 completed in the last month</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    width: 234,
    height: 19,
    marginTop: 50, // 원하는 위치를 조정
    marginRight: 116,
  },
  textWrapper: {
    fontFamily: 'Pretendard-Medium', // 사용할 폰트
    fontWeight: '500',
    color: '#dddddd',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 19, // 텍스트 높이를 조정
  },
});

export default CompletionLabel;
