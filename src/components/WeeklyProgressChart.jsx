import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WeeklyProgressChart = () => {
  // 각 요일별 데이터 (임시 데이터)
  const data = [80, 100, 60, 40, 20, 100, 50]; // 각 요일별 퍼센트

  return (
    <View style={styles.box}>
      <View style={styles.view}>
        {/* 그래프 Y축 라벨 */}
        <View style={styles.labelsContainer}>
          {["100", "80", "60", "40", "20", "0"].map((label, index) => (
            <Text key={index} style={styles.yAxisLabel}>
              {label}
            </Text>
          ))}
        </View>
        {/* 그래프 바 */}
        <View style={styles.barsContainer}>
          {data.map((value, index) => (
            <View key={index} style={styles.barWrapper}>
              <View
                style={[styles.bar, { height: `${value}%` }]} // 높이를 데이터에 따라 동적으로 설정
              />
              <Text style={styles.xAxisLabel}>
                {["월", "화", "수", "목", "금", "토", "일"][index]}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 240,
    padding: 16,
    backgroundColor: "rgba(102, 102, 102, 0.25)",
    borderRadius: 10,
    marginVertical: 16,
    marginTop: 14,
  },
  view: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 200,
  },
  labelsContainer: {
    width: 30,
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
  },
  yAxisLabel: {
    color: "#fff",
    fontSize: 12,
    textAlign: "right",
    marginBottom: 18,
  },
  barsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginTop: 20,
    paddingBottom: 2,
  },
  barWrapper: {
    alignItems: "center",
    flex: 1,
  },
  bar: {
    width: 12,
    backgroundColor: "#fbf15b",
    borderRadius: 6,
  },
  xAxisLabel: {
    marginTop: 8,
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
});

export default WeeklyProgressChart;