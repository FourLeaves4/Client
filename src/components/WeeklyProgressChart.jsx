import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const WeeklyProgressChart = ({ week, isLoading, error }) => {
  return (
    <View style={styles.box}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error.message || error}</Text>
        </View>
      ) : (
        <View style={styles.view}>
          {/* 그래프 Y축 라벨 */}
          <View style={styles.labelsContainer}>
            {['100', '80', '60', '40', '20', '0'].map((label, index) => (
              <Text key={index} style={styles.yAxisLabel}>
                {label}
              </Text>
            ))}
          </View>
          {/* 그래프 바 */}
          <View style={styles.barsContainer}>
            {week.map((value, index) => (
              <View key={index} style={styles.barWrapper}>
                <View
                  style={[styles.bar, { height: `${value}%` }]} // 높이를 데이터에 따라 동적으로 설정
                />
                <Text style={styles.xAxisLabel}>
                  {['월', '화', '수', '목', '금', '토', '일'][index]}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 240,
    padding: 16,
    backgroundColor: 'rgba(102, 102, 102, 0.25)',
    borderRadius: 10,
    marginVertical: 16,

    justifyContent: 'flex-end',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 200,
    paddingTop: 16,
  },
  labelsContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: 8,
  },
  yAxisLabel: {
    color: '#fff',
    fontSize: 12,
    padding: 5,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  barsContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
  },
  barWrapper: {
    alignItems: 'center',
    marginHorizontal: 4,
  },
  bar: {
    backgroundColor: '#FBF15B',
    width: 24,
    borderRadius: 16,
  },
  xAxisLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WeeklyProgressChart;
