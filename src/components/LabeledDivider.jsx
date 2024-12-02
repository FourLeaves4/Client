import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LabeledDivider = ({title}) => {
  return (
    <View style={styles.component}>
      {/* "이번 주 달성률" 텍스트 */}
      <Text style={styles.textWrapper}>{title}</Text>
      {/* 왼쪽 선 */}
      <View style={[styles.line, styles.leftLine]} />
      {/* 오른쪽 선 */}
      <View style={[styles.line, styles.rightLine]} />
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    position: "relative",
    width: "100%", // 전체 너비
    height: 30, // 컨테이너 높이
    flexDirection: "row", // 텍스트와 선을 가로로 배치
    alignItems: "center", // 세로 중앙 정렬
    justifyContent: "left", // 텍스트를 중앙에 위치
    marginTop: 20,
  },
  textWrapper: {
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Pretendard-Regular",
    color: "#ffffff", // 흰색 텍스트
    marginHorizontal: 10, // 텍스트와 선 간의 간격
    marginLeft: 24,
  },
  line: {
    height: 1, // 선의 두께
    backgroundColor: "#666666", // 선 색상
    position: "absolute",
    top: "50%", // 선을 컨테이너의 세로 가운데에 위치
  },
  leftLine: {
    width: 16, // 왼쪽 선의 길이
    left: 0, // 화면 왼쪽 정렬
  },
  rightLine: {
    width: 220, // 오른쪽 선의 길이
    right: 0, // 화면 오른쪽 정렬
  },
});

export default LabeledDivider;
