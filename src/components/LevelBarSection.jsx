import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

const LevelBarSection = ({ num }) => {
  const [levelProgress, setLevelProgress] = useState(0);

  useEffect(() => {
    if (num !== undefined) {
      const totalMissions = 5; // 총 미션 수
      const progress = num / totalMissions; // 진행 상태 계산
      setLevelProgress(progress); // 레벨 진행 상태 업데이트
    }
  }, [num]); // missionData가 변경될 때마다 실행

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
