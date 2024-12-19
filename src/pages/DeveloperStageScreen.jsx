import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import ImageComponent from '../components/ImageComponent';

const DeveloperStageScreen = () => {
  const [missionsCompleted, setMissionsCompleted] = useState(0); // 누적 미션 완료 개수
  const [level, setLevel] = useState(1); // 현재 레벨
  const [remainingLevels, setRemainingLevels] = useState(0); // 다음 단계까지 남은 레벨 수
  const [nextStage, setNextStage] = useState(''); // 다음 단계 이름

  useEffect(() => {
    // 백엔드에서 데이터 받아오기
    fetchBackendData();
  }, []);

  useEffect(() => {
    // 레벨이 바뀔 때마다 남은 레벨과 다음 단계 설정
    calculateRemainingLevels(level);
  }, [level]);

  const fetchBackendData = async () => {
    try {
      /* // 예시로 하드코딩한 백엔드 응답 데이터
      const data = {
        num: 1, // 미션 개수
        level: 1, // 백엔드에서 받은 현재 레벨
      }; */
      const response = await fetch('https://your-backend-url.com/api/data'); // 백엔드 URL에 맞게 수정
      const data = await response.json();

      const totalMissions = data.num;
      const userLevel = data.level;

      // 미션 완료 개수와 레벨 상태 업데이트
      setMissionsCompleted(totalMissions);
      setLevel(userLevel);

      // 성공적인 응답을 받은 경우
      console.log('미션 및 레벨 갱신 성공:', data);
    } catch (error) {
      console.error(
        '미션 및 레벨 데이터를 가져오는 중 오류가 발생했습니다:',
        error
      );
    }
  };

  const calculateRemainingLevels = (currentLevel) => {
    let remaining = 0;
    let stage = '';

    // 레벨별로 구체적인 범위 설정
    if (currentLevel >= 1 && currentLevel <= 5) {
      remaining = 6 - currentLevel; // 1~5 레벨이면 6 레벨까지 남음
      stage = '인턴 개발자까지';
    } else if (currentLevel >= 6 && currentLevel <= 10) {
      remaining = 11 - currentLevel; // 6~10 레벨이면 11 레벨까지 남음
      stage = '주니어 개발자까지';
    } else if (currentLevel >= 11 && currentLevel <= 15) {
      remaining = 16 - currentLevel; // 11~15 레벨이면 16 레벨까지 남음
      stage = '미드레벨 개발자까지';
    } else if (currentLevel >= 16 && currentLevel <= 20) {
      remaining = 21 - currentLevel; // 16~20 레벨이면 21 레벨까지 남음
      stage = '시니어 개발자까지';
    } else if (currentLevel >= 21 && currentLevel <= 25) {
      remaining = 26 - currentLevel; // 21~25 레벨이면 26 레벨까지 남음
      stage = '최고 레벨까지';
    } else {
      remaining = 0;
      stage = '🎉 축하합니다! 최고 레벨 달성!! 🎉';
    }

    setRemainingLevels(remaining); // 남은 레벨 갱신
    setNextStage(stage); // 다음 단계 설정
  };

  // 레벨에 맞는 배지 선택
  const getBadge = () => {
    if (level >= 1 && level <= 5) return require('../../assets/badge.png');
    if (level >= 6 && level <= 10) return require('../../assets/badge.png');
    if (level >= 11 && level <= 15) return require('../../assets/badge.png');
    if (level >= 16 && level <= 20) return require('../../assets/badge.png');
    if (level >= 21 && level <= 25) return require('../../assets/badge.png');
  };

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {/* 메인 아이콘 */}
      <ImageComponent />

      {/* 레벨 바 */}
      <View style={styles.levelBar}>
        {Array.from({ length: 5 }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.levelSegment,
              index < missionsCompleted ? styles.activeLevel : null,
            ]}
          />
        ))}
      </View>

      {/* 남은 레벨 텍스트 */}
      <Text style={styles.levelText}>
        <Text style={styles.boldText}>{nextStage} </Text>
        <Text style={styles.highlightedText}>{remainingLevels}Lv</Text>
        <Text style={styles.boldText}> 남음</Text>
      </Text>

      {/* 개발자 단계 카드 */}
      <View style={styles.stagesContainer}>
        {stages.map((stage, index) => (
          <View key={index} style={styles.stageCard}>
            <Image style={styles.stageIcon} source={getBadge()} />
            <View style={styles.stageInfo}>
              <Text style={styles.stageTitle}>{stage.title}</Text>
              <Text style={styles.stageLevel}>{stage.level}</Text>
              <Text style={styles.stageDescription}>{stage.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const stages = [
  {
    title: '입문자',
    level: '1~5 Lev',
    description: '개발 전공을 탐색하며 실력 쌓는 단계',
    icon: require('../../assets/badge.png'),
  },
  {
    title: '인턴 개발자',
    level: '6~10 Lev',
    description: '실무 경험을 쌓는 초보 개발자',
    icon: require('../../assets/badge.png'),
  },
  {
    title: '주니어 개발자',
    level: '11~15 Lev',
    description: '경력이 짧고 경험이 적은 개발자',
    icon: require('../../assets/badge.png'),
  },
  {
    title: '미드레벨 개발자',
    level: '16~20 Lev',
    description: '독립적으로 작업 가능한 중급 개발자',
    icon: require('../../assets/badge.png'),
  },
  {
    title: '시니어 개발자',
    level: '21~25 Lev',
    description: '문제 해결과 팀을 이끄는 고급 개발자',
    icon: require('../../assets/badge.png'),
  },
];

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    padding: 10,
  },
  levelBar: {
    flexDirection: 'row',
    gap: 1,
    marginBottom: 46,
  },
  levelSegment: {
    width: 70,
    height: 10,
    backgroundColor: '#66666659',
    borderRadius: 4,
  },
  activeLevel: {
    backgroundColor: '#FBF15B',
  },
  levelText: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 60,
  },
  boldText: {
    fontWeight: '700',
  },
  highlightedText: {
    color: '#FBF15B',
    fontWeight: '700',
  },
  stagesContainer: {
    width: '100%',
    marginTop: 4,
    borderTopWidth: 2,
    borderTopColor: 'rgba(102, 102, 102, 0.4)',
  },
  stageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderTopColor: '#666666',
    marginBottom: 10,
  },
  stageIcon: {
    width: 74,
    height: 68,
    marginRight: 20,
  },
  stageInfo: {
    flex: 1,
  },
  stageTitle: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 4,
  },
  stageLevel: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 4,
  },
  stageDescription: {
    color: '#FFF',
    fontSize: 13,
  },
});

export default DeveloperStageScreen;
