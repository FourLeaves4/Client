import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const AIProfile = () => {
  return (
    <View style={styles.component}>
      {/* 프로필 이미지 */}
      <Image
        source={{ uri: "https://via.placeholder.com/80" }} // 여기에 프로필 이미지 URL 추가
        style={styles.ellipse}
      />
      {/* AI에게 상담하기 텍스트 */}
      <Text style={styles.textWrapper}>AI에게 상담하기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    position: "relative",
    width: 216,
    height: 147,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 85,
    marginTop: 100,
  },
  ellipse: {
    width: 80,
    height: 80,
    borderRadius: 40, // 원형으로 만들기
    backgroundColor: "#ccc", // 이미지가 없을 경우 기본 배경색
    marginBottom: 30, // 이미지와 텍스트 간격
  },
  textWrapper: {
    fontFamily: "Pretendard-Regular",
    fontWeight: "400",
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 22,
  },
});

export default AIProfile;
