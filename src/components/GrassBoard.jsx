import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

export default function GrassBoard() {
  const [grassData, setGrassData] = useState([]); // 초기값을 빈 배열로 설정

  useEffect(() => {
    const fetchGrassData = async () => {
      // 백엔드 API에서 데이터를 받아오는 부분
      // 여기는 예시로 데이터를 직접 설정함함

      const data = {
        today: [1, 1, 1, 0, 1], // 오늘 미션 완료 상태 (3개 완료)
        month: Array(30).fill(0), // 한 달 기준 미션 데이터 (기본값은 0)
      };

      // 오늘 미션 완료 수를 확인
      const completedMissions = data.today.filter(
        (mission) => mission === 1
      ).length;

      // `month` 데이터를 받아온 후, 업데이트된 값으로 상태 업데이트
      const updatedMonthData = [...data.month];
      updatedMonthData[0] = completedMissions; // 첫 번째 칸에 오늘 미션 완료 갯수 반영

      setGrassData(updatedMonthData); // 상태 업데이트
    };

    fetchGrassData(); // 데이터 수신
  }, []); // 빈 배열이므로 컴포넌트가 처음 렌더링될 때만 실행

  return (
    <View style={styles.frame}>
      {grassData.map((value, index) => (
        <View
          key={index}
          style={[
            styles.commonGrass,
            value === 0 && styles.emptyGrass, // 미션을 안 한 경우
            value === 1 && styles.grass1, // 미션 1개 완료
            value === 2 && styles.grass2, // 미션 2개 완료
            value === 3 && styles.grass3, // 미션 3개 완료
            value === 4 && styles.grass4, // 미션 4개 완료
            value === 5 && styles.grass5, // 미션 5개 완료
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: 350,
    height: 200,
    alignItems: 'center',
    gap: 8, // React Native는 gap을 직접 지원하지 않으므로 margin을 사용해야 함
    padding: 18,
    backgroundColor: '#66666633',
    borderRadius: 24,
    overflow: 'hidden',
  },
  commonGrass: {
    width: 28,
    height: 28,
    borderRadius: 14,
    margin: 2, // gap을 대신하는 margin
  },
  emptyGrass: {
    backgroundColor: '#fbf15b1a', // 빈 잔디의 배경색
  },
  grass5: {
    backgroundColor: '#fbf15b',
  },
  grass4: {
    backgroundColor: '#fbf15be6',
  },
  grass3: {
    backgroundColor: '#fbf15bb2',
  },
  grass1: {
    backgroundColor: '#fbf15b4c',
  },
  grass2: {
    backgroundColor: '#fbf15b80',
  },
});
