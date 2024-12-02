import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DateDisplay = () => {
  // 현재 날짜 계산
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // 날짜 포맷팅
  const month = months[today.getMonth()];
  const day = today.getDate();
  const dayOfWeek = days[today.getDay()];

  // 날짜 접미사 설정 (st, nd, rd, th)
  const suffix =
    day === 1
      ? "st"
      : day === 2
      ? "nd"
      : day === 3
      ? "rd"
      : "th";

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>
        <Text style={styles.monthText}>{month} </Text>
        <Text style={styles.dayText}>{day + suffix}</Text>
        <Text style={styles.dayOfWeekText}> {dayOfWeek}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 70,
    marginLeft: 20,
    marginBottom: 16,
  },
  dateText: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Pretendard-SemiBold",
    color: "#FFFFFF", // 기본 흰색
  },
  monthText: {
    color: "#FFFFFF", // 월 텍스트 색상
  },
  dayText: {
    color: "#fbf15b", // 날짜 텍스트 색상 (노란색)
  },
  dayOfWeekText: {
    color: "#FFFFFF", // 요일 텍스트 색상
  },
});

export default DateDisplay;
