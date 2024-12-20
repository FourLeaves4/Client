import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import QuestionCard from '../components/StartPage/QuestionCard';
import PaginationDots from '../components/StartPage/PaginationDots';
import Button from '../components/StartPage/Button';

const { width } = Dimensions.get('window'); // 화면 너비

export default function Start({ navigation }) {
  // 이미지 슬라이드 데이터
  const images = [
    {
      id: 0,
      src: require('../../assets/1st.png'),
      title: 'Example Question_1',
      subtitle: '전공 질문 어쩌구 저쩌구 질문 저쩌구 질문 질문 질문띠',
    },
    {
      id: 1,
      src: require('../../assets/2nd.png'),
      title: 'Example Question_2',
      subtitle: '전공 질문 저쩌구 어쩌구 질문 저쩌구 질문 질문 질문띠',
    },
    {
      id: 2,
      src: require('../../assets/3rd.png'),
      title: 'Example Question_3',
      subtitle: '어쩌구 전공 질문 저쩌구 저쩌구 질문 질문 질문띠',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 이미지 인덱스
  const translateX = useRef(new Animated.Value(0)).current; // 애니메이션 값

  // 1초마다 이미지 변경
  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(translateX, {
        toValue: -(activeIndex + 1) * width, // 다음 이미지로 슬라이드
        duration: 800, // 부드러운 전환 시간
        useNativeDriver: true,
      }).start(() => {
        // 인덱스 업데이트
        const nextIndex = (activeIndex + 1) % images.length;
        setActiveIndex(nextIndex);
        translateX.setValue(-nextIndex * width); // 애니메이션 초기화
      });
    }, 3000); // 이미지 변경 주기 (3초)

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
  }, [activeIndex, translateX]);

  return (
    <View style={styles.container}>
      {/* 슬라이더 컨테이너 */}
      <View style={styles.slider}>
        <Animated.View
          style={{
            flexDirection: 'row',
            transform: [{ translateX }], // 애니메이션 적용
          }}
        >
          {images.map((image) => (
            <View key={image.id} style={{ width }}>
              <QuestionCard
                image={image.src} // 이미지 전달
                title={image.title} // 각 이미지의 제목
                subtitle={image.subtitle} // 각 이미지의 설명
              />
            </View>
          ))}
        </Animated.View>
      </View>

      {/* PaginationDots 컴포넌트 */}
      <PaginationDots totalDots={images.length} activeDot={activeIndex} />

      {/* 버튼 컨테이너 */}
      <View style={styles.buttonWrapper}>
        <Button
          type="googleLogin"
          onPress={() => console.log('Google Login Pressed')}
        />
        <Button
          type="start"
          onPress={() => navigation.navigate('Questions')} // Character 페이지로 이동
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 142,
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
  },
  slider: {
    width: width, // 슬라이더 너비 설정
    height: 300, // 슬라이더 높이 설정
    justifyContent: 'center',
    overflow: 'hidden', // 영역 밖 이미지 숨김
  },
  buttonWrapper: {
    marginTop: 115, // PaginationDots 아래 간격
    alignItems: 'center',
    gap: 14, // 버튼 간 간격
  },
});
