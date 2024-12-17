import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function Header({ title, subtitle }) {
  const fadeAnim = useRef(new Animated.Value(1)).current; // 초기 투명도 1
  const [displayedTitle, setDisplayedTitle] = useState(title);
  const [displayedSubtitle, setDisplayedSubtitle] = useState(subtitle);

  useEffect(() => {
    // 텍스트 전환 애니메이션
    Animated.timing(fadeAnim, {
      toValue: 0, // 완전히 사라지도록
      duration: 200, // 사라지는 시간
      useNativeDriver: true,
    }).start(() => {
      setDisplayedTitle(title);
      setDisplayedSubtitle(subtitle);

      // 새로운 텍스트 페이드 인
      Animated.timing(fadeAnim, {
        toValue: 1, // 다시 보이도록
        duration: 200, // 나타나는 시간
        useNativeDriver: true,
      }).start();
    });
  }, [title, subtitle]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        {displayedTitle}
      </Animated.Text>
      <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
        {displayedSubtitle}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end', // 텍스트를 아래로 정렬
    height: 120, // Header 높이 축소
    marginBottom: 20, // 아래 여백 추가
  },
  title: {
    fontFamily: 'Jaro-Regular',
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: 'Jaro-Regular',
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 28,
    marginTop: 4, // 제목과 부제목 사이의 간격
  },
});
