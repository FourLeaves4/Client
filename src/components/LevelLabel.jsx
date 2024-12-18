import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LevelLabel = () => {
  const [level, setLevel] = useState(0); // 초기 레벨을 0으로 설정

  useEffect(() => {
    // 백엔드 엔드포인트에서 데이터 가져오기
    fetch('https://your-backend-url.com/api/level') // 실제 URL로 변경
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // 응답이 JSON 형식이어야 함
      })
      .then((data) => {
        setLevel(data.level); // 응답에서 level 값을 추출하여 상태에 설정
      })
      .catch((error) => {
        console.error('Error fetching level:', error); // 에러 로그 출력
      });
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  return (
    <View style={styles.label}>
      {/* 레벨 표시 */}
      <Text style={styles.text}>Lv.{level}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    top: 270,
    right: 20,
    width: 50,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    color: '#fbf15bb2',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default LevelLabel;
