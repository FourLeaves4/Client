import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MessageBox = ({ message, highlight }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.message}>
          {message} <Text style={styles.highlight}>{highlight}</Text>
        </Text>
        <Text style={styles.subMessage}>조금만 더 힘내볼까요? 🔥</Text>
      </View>
      <Image source={require("../../../assets/Mascot.png")} style={styles.triangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  messageBox: {
    backgroundColor: "rgba(102, 102, 102, 0.3)", // 메시지 박스 배경색
    borderRadius: 8,
    padding: 8,
    maxWidth: 243,
  },
  message: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Pretendard-Regular",
  },
  highlight: {
    color: "#fbf15b",
    fontSize: 16,
  },
  subMessage: {
    color: "#cecdcd",
    fontSize: 12,
    fontFamily: "Pretendard-Regular",
    marginTop: 4,
  },
  triangle: {
    width: 45,
    height: 13,
    marginTop: -4,
    marginLeft: 10,
    resizeMode: "contain",
  },
});

export default MessageBox;
