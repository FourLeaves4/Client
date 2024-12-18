import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

const LevelBarSection = () => {
  //const missionData = [1, 1, 0, 0, 0];
  const [missionData, setMissionData] = useState([]); // missionData 상태
  const [levelProgress, setLevelProgress] = useState(0);

  useEffect(() => {
    // 백엔드에서 데이터 가져오기
    fetch('https://your-backend-api.com/mission') // 실제 API URL로 변경
      .then((response) => response.json()) // 응답을 JSON으로 변환
      .then((data) => {
        const missionData = data.today; // 백엔드에서 반환된 데이터에서 'today' 필드 가져오기
        setMissionData(missionData); // 상태 업데이트
      })
      .catch((error) => {
        console.error('Error fetching mission data:', error);
      });
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  useEffect(() => {
    if (missionData && missionData.length > 0) {
      const completedMissions = missionData.filter((item) => item === 1).length; // 완료된 미션 개수
      const totalMissions = missionData.length; // 총 미션 개수
      const progress = completedMissions / totalMissions; // 레벨 진행 상태 계산
      setLevelProgress(progress); // 레벨 진행 상태 업데이트
    }
  }, [missionData]); // missionData가 변경될 때마다 실행

  return (
    <View style={styles.box}>
      <View style={styles.view}>
        <View
          style={[
            styles.div,
            { width: 335 * levelProgress }, // 레벨 진행 상태에 따라 너비 변경
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 345,
    height: 20,
  },
  view: {
    position: 'absolute', // 'fixed' 대신 'absolute'
    width: 345,
    height: 20,
    top: 0,
    left: 0,
    backgroundColor: '#66666699',
    borderRadius: 12,
  },
  div: {
    position: 'absolute',
    height: 10,
    top: 5,
    left: 5,
    backgroundColor: '#fbf15b',
    borderRadius: 15,
  },
});

export default LevelBarSection;
