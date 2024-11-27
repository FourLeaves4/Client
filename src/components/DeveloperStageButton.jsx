import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ChevronRight from '../../assets/chevron-right.svg'; // SVG 파일 import

const DeveloperStageButton = () => {
  return (
    <TouchableOpacity style={styles.box}>
      <View style={styles.group}>
        <View style={styles.frame}>
          {/* 왼쪽 텍스트 그룹 */}
          <View style={styles.textGroup}>
            <Text style={styles.textWrapper}>💡</Text>
            <Text style={styles.text}>개발자 단계 좀 더 알아보기</Text>
          </View>
          {/* 오른쪽 화살표 아이콘 */}
          <ChevronRight width={24} height={24} fill="#000" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    position: 'relative',
    width: 344,
    height: 60,
    marginTop: 20,
    backgroundColor: '#b7b045',
    borderRadius: 6,
  },
  group: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  frame: {
    flexDirection: 'row', // 가로 정렬
    alignItems: 'center', // 세로 중앙 정렬
    justifyContent: 'space-between', // 좌우 간격
    paddingHorizontal: 16, // 양쪽 여백
    height: '100%',
  },
  textGroup: {
    flexDirection: 'row', // 아이콘과 텍스트 가로 정렬
    alignItems: 'center', // 세로 정렬
  },
  textWrapper: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Pretendard-Regular',
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 22,
  },
  text: {
    color: '#1f1f20c7',
    fontSize: 16,
    fontFamily: 'Pretendard-Regular',
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 22,
    marginLeft: 8, // 아이콘과 텍스트 간격
  },
});

export default DeveloperStageButton;
