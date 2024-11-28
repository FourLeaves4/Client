import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import ImageComponent from '../components/ImageComponent';

const DeveloperStageScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      {/* 메인 아이콘 */}
      <ImageComponent />

      {/* 레벨 바 */}
      <View style={styles.levelBar}>
        <View style={[styles.levelSegment, styles.activeLevel]} />
        <View style={styles.levelSegment} />
        <View style={styles.levelSegment} />
        <View style={styles.levelSegment} />
        <View style={styles.levelSegment} />
      </View>

      {/* 남은 레벨 텍스트 */}
      <Text style={styles.levelText}>
        <Text style={styles.boldText}>주니어 개발자까지 </Text>
        <Text style={styles.highlightedText}>1Lv</Text>
        <Text style={styles.boldText}> 남음</Text>
      </Text>

      {/* 개발자 단계 카드 */}
      <View style={styles.stagesContainer}>
        {stages.map((stage, index) => (
          <View key={index} style={styles.stageCard}>
            <Image style={styles.stageIcon} source={stage.icon} />
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
    level: '0~5 Lev',
    description: '개발 전공을 탐색하며 실력 쌓는 단계',
    icon: require('../../assets/badge.png'),
  },
  {
    title: '인턴 개발자',
    level: '5~10 Lev',
    description: '실무 경험을 쌓는 초보 개발자',
    icon: require('../../assets/badge.png'),
  },
  {
    title: '주니어 개발자',
    level: '10~15 Lev',
    description: '경력이 짧고 경험이 적은 개발자',
    icon: require('../../assets/badge.png'),
  },
  {
    title: '미드레벨 개발자',
    level: '15~20 Lev',
    description: '독립적으로 작업 가능한 중급 개발자',
    icon: require('../../assets/badge.png'),
  },
  {
    title: '시니어 개발자',
    level: '20~25 Lev',
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
    fontWeight: '',
  },
  highlightedText: {
    color: '#FBF15B',
    fontWeight: '700',
  },
  stagesContainer: {
    width: '100%',
    marginTop: 4, // 카드 상단에 여백
    borderTopWidth: 2, // 구분선 두께
    borderTopColor: 'rgba(102, 102, 102, 0.4)', // 구분선 색상 및 불투명도 (20%)
    
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
