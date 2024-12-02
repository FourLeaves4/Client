import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MessageBox = ({ message, highlight }) => {
  return (
    <View style={styles.container}>
      {/* 메시지 박스 */}
      <View style={styles.overlapGroup}>
        <View style={styles.textContainer}>
          {/* 메시지 텍스트 */}
          <Text style={styles.message}>
            <Text style={styles.textWrapper}>{message} </Text>
            <Text style={styles.highlight}>{highlight}</Text>
          </Text>
          {/* 서브 메시지 */}
          <Text style={styles.subMessage}>조금만 더 힘내볼까요? 🔥</Text>
        </View>
      </View>
      {/* 삼각형 (꼬리) */}
      <Image
        source={require("../../../assets/MessageBox.png")} // 삼각형 이미지 경로
        style={styles.polygon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 243,
    height: 85,
    marginBottom: 50,
  },
  overlapGroup: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 243,
    height: 71,
    backgroundColor: "rgba(102, 102, 102, 0.3)", // 투명한 배경
    borderRadius: 8,
  },
  textContainer: {
    position: "absolute",
    top: 17,
    left: 22,
    width: 188,
    height: 38,
  },
  message: {
    fontSize: 14,
    fontFamily: "Pretendard-Regular",
    color: "#ffffff",
  },
  textWrapper: {
    color: "#ffffff", // 일반 텍스트 색상
  },
  highlight: {
    color: "#fbf15b", // 강조된 텍스트 색상
    fontSize: 16,
  },
  subMessage: {
    fontSize: 12,
    fontFamily: "Pretendard-Regular",
    color: "#cecdcd", // 서브 메시지 색상
    marginTop: 4,
  },
  polygon: {
    position: "absolute",
    width: 45,
    height: 13,
    top: 71,
    left: 9,
    resizeMode: "contain", // 이미지 크기 비율 유지
  },
});

export default MessageBox;
