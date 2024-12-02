import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // 현재 시간을 매초 업데이트하는 타이머 설정
    const timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours} : ${minutes} : ${seconds}`);
    }, 1000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.label}>
      <Text style={styles.textWrapper}>{currentTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    justifyContent: "center",
    alignItems: "flex-start", // 왼쪽 정렬
    marginLeft: 16,
    paddingVertical: 14, // 텍스트 상하 여백 추가
  },
  textWrapper: {
    fontFamily: "Pretendard-Bold",
    fontWeight: "700",
    color: "#666666", // 글자 색상
    fontSize: 40,
    lineHeight: 38,
    letterSpacing: 0,
  },
});

export default TimeDisplay;
