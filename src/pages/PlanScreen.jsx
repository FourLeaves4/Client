import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import DateDisplay from '../components/DataDisplay';
import TimeDisplay from '../components/TimeDisplay';
import LabeledDivider from '../components/LabeledDivider';
import MascotWithMessage from '../components/MascotWithMessage/MascotWithMessage';
import WeeklyProgressChart from '../components/WeeklyProgressChart';

const PlanScreen = () => {
  // 1️⃣ highlight 값을 관리하는 상태 추가 (기본값은 0%)
  const [highlight, setHighlight] = useState('0%');
  const [weekData, setWeekData] = useState([]); // week 데이터를 관리하는 상태
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false); // 새로고침 상태 관리
  const [error, setError] = useState(null);

  const fetchHighlightData = async () => {
    try {
      // 사용자 ID를 동적으로 설정 (예: userId 변수를 통해)
      const userId = '1'; // 실제 사용자 ID로 대체
      // 🔥 백엔드 API URL (실제 서버 주소로 교체)
      const response = await fetch(
        `https://port-0-server-lz1cq56f81af005d.sel4.cloudtype.app/home/${userId}/plan`
      );
      const data = await response.json(); // JSON 데이터 파싱
      console.log('백엔드 데이터: ', data); // 데이터 확인
      setHighlight(`${data.avg}%`); // avg를 highlight에 적용
      setWeekData(data.week); // 백엔드에서 받아온 week 데이터를 상태에 저장
    } catch (error) {
      console.error('데이터 불러오기 오류: ', error);
      setError('데이터를 가져오는 데 실패했습니다.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false); // 새로고침 상태 해제
    }
  };

  useEffect(() => {
    fetchHighlightData();
  }, []);

  const onRefresh = async () => {
    setIsRefreshing(true); // 로딩 상태 시작
    await fetchHighlightData(); // 데이터 불러오기
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing} // 새로고침 상태
          onRefresh={onRefresh} // 새로고침 핸들러
          tintColor="#ffffff" // 로딩 아이콘 색상
        />
      }
    >
      <DateDisplay />
      <TimeDisplay />
      <LabeledDivider title="이번 주 달성률" />
      {/* MascotWithMessage 컴포넌트 */}
      <MascotWithMessage
        mascotImage={require('../../assets/Mascot1.png')}
        message="이번 주 평균 달성률은"
        highlight={highlight} // 동적 이번 주 평균 달성률 표시
      />
      <LabeledDivider title="요일별 달성률" />
      <WeeklyProgressChart
        week={weekData}
        isLoading={isLoading}
        error={error}
      />
    </ScrollView>
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
