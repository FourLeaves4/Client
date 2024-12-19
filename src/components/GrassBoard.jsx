import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';

// 화면 크기 동적 계산
const screenWidth = Dimensions.get('window').width; // 기기 크기에 맞춘 동적 너비
const screenHeight = Dimensions.get('window').height;

// 색상 배열 (투명도)
const colors = [
  '#fbf15b1a',
  '#fbf15b4c',
  '#fbf15b80',
  '#fbf15bb2',
  '#fbf15be6',
  '#fbf15b',
];

// 🌐 백엔드 API URL (user_id는 동적으로 설정)
const API_URL = (userId) => `https://your-backend-url.com/${userId}/profile`;

export default function GrassBoard({ userId }) {
  const [grassData, setGrassData] = useState([]); // 초기값을 빈 배열로 설정
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  // 📡 백엔드 API 호출
  useEffect(() => {
    const fetchGrassData = async () => {
      try {
        /* // 백엔드 API에서 데이터를 받아오는 부분
        const data = {
          month: [
            3, 5, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 5, 4, 0, 3, 0, 0, 0,
            0, 0, 5, 4, 3, 2, 1, 0,
          ],
        }; */

        const response = await fetch(API_URL(userId)); // userId를 동적으로 URL에 포함
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // JSON 데이터 파싱

        if (data && data.month) {
          setGrassData(data.month); // 상태에 'month' 데이터 저장
        } else {
          throw new Error('Invalid response: month data is missing');
        }
      } catch (error) {
        console.error('Error fetching grass data:', error); // 에러 메시지 출력
      } finally {
        setLoading(false); // 로딩 상태 해제
      }
    };

    fetchGrassData(); // 데이터 요청
  }, [userId]); // // userId가 변경되면 데이터 요청

  // 🖌️ 투명도 색상을 스타일로 반환하는 함수
  const getGrassStyle = useCallback(
    (value) => ({ backgroundColor: colors[value] }),
    []
  );

  // 📟 로딩 중일 때 로딩 인디케이터 표시
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fbf15b" />
      </View>
    );
  }

  return (
    <View style={styles.frame}>
      {grassData.map((value, index) => (
        <View key={index} style={[styles.commonGrass, getGrassStyle(value)]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: screenWidth * 0.9, // 화면 너비에 맞춘 동적 크기
    height: screenHeight * 0.23, // 화면 높이에 맞춘 비율 (23%)
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#66666633',
    borderRadius: 24,
    overflow: 'hidden',
  },

  commonGrass: {
    width: screenWidth * 0.072, // 너비의 7%로 비율 적용
    height: screenWidth * 0.072, // 정사각형으로 유지
    borderRadius: (screenWidth * 0.072) / 2, // 반지름도 비율로 계산
    margin: screenWidth * 0.014, // 비율 기반의 여백
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66666633',
  },
});
