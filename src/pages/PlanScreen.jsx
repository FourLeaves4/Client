import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DateDisplay from '../components/DataDisplay';
import TimeDisplay from '../components/TimeDisplay';
import LabeledDivider from '../components/LabeledDivider';
import MascotWithMessage from '../components/MascotWithMessage/MascotWithMessage';
import WeeklyProgressChart from '../components/WeeklyProgressChart';

const PlanScreen = () => {
  // 1️⃣ highlight 값을 관리하는 상태 추가 (기본값은 0%)
  const [highlight, setHighlight] = useState('0%');

  // 백엔드에서 avg 데이터 불러오기
  useEffect(() => {
    const fetchHighlightData = async () => {
      try {
        // 🔥 백엔드 API URL (실제 서버 주소로 교체)
        const response = await fetch(
          'https://your-backend-url.com/api/highlight'
        );
        const data = await response.json(); // JSON 데이터 파싱
        console.log('백엔드 데이터: ', data); // 데이터 확인
        setHighlight(`${data.avg}%`); // avg를 highlight에 적용
      } catch (error) {
        console.error('데이터 불러오기 오류: ', error);
      }
    };

    fetchHighlightData();
  }, []);

  return (
    <View style={styles.container}>
      <DateDisplay />
      <TimeDisplay />
      <LabeledDivider title="이번 주 달성률" />
      {/* MascotWithMessage 컴포넌트 */}
      <MascotWithMessage
        mascotImage={require('../../assets/Mascot.png')}
        message="이번 주 평균 달성률은"
        highlight={highlight} // 동적 이번 주 평균 달성률 표시
      />
      <LabeledDivider title="요일별 달성률" />
      <WeeklyProgressChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
});

export default PlanScreen;
