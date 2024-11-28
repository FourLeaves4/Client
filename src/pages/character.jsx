import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useFonts } from 'expo-font';

export default function App({ navigation }) {
  // 폰트 로드
  const [fontsLoaded] = useFonts({
    'Jaro-Regular': require('../../assets/Jaro-Regular.ttf'), // 폰트 로드
  });

  // 캐릭터 데이터 배열
  const characters = [
    {
      id: 1,
      name: 'NOVA',
      location_1: '전공 선택이 어려우신 분들과',
      location_2: '나에게 맞는 전공을 찾고 싶으신 분들에게 추천',
      image: require('../../assets/character1.png'), // 첫 번째 캐릭터 이미지
    },
    {
      id: 2,
      name: 'FrontEnd',
      location_1: '웹 개발에 관심이 있거나',
      location_2: '눈에 보이는 결과를 좋아하시는 분들에게 추천',
      image: require('../../assets/character2.png'), // 두 번째 캐릭터 이미지
    },
    {
      id: 3,
      name: 'BackEnd',
      location_1: '서버에 관심이 있거나',
      location_2: 'spring, java 등을 배워보신 분들에게 추천',
      image: require('../../assets/character3.png'), // 세 번째 캐릭터 이미지
    },
    {
      id: 4,
      name: 'iOS',
      location_1: 'swift 언어나 애플에 관심이 있거나',
      location_2: '앱 개발에 관심이 있으신 분들에게 추천',
      image: require('../../assets/character4.png'), // 네 번째 캐릭터 이미지
    },
    {
      id: 5,
      name: 'Android',
      location_1: '안드로이드나',
      location_2: '앱 개발에 관심이 있으신 분들에게 추천',
      image: require('../../assets/character3.png'), // 다섯 번째 캐릭터 이미지
    },
  ];

  // 현재 선택된 캐릭터 인덱스 상태 관리
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(null); // 선택된 캐릭터 상태

  // 화살표 버튼 클릭 이벤트 핸들러
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length); // 다음 캐릭터
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? characters.length - 1 : prevIndex - 1
    ); // 이전 캐릭터
  };

  // 캐릭터 선택 및 선택 취소 함수
  const handleCharacterSelect = (index) => {
    if (selectedCharacter === index) {
      setSelectedCharacter(null); // 이미 선택된 캐릭터를 다시 클릭하면 선택 취소
    } else {
      setSelectedCharacter(index); // 캐릭터 선택
    }
  };

  // 구글 로그인 버튼 클릭 이벤트 핸들러
  const handleLogin = () => {
    if (selectedCharacter === null) {
      Alert.alert('캐릭터 선택', '캐릭터를 선택해주세요');
    } else {
      navigation.navigate('Main', { screen: 'Home' });
    }
  };

  return (
    <View style={styles.container}>
      {/* 왼쪽 상단에 "캐릭터 선택하기" 추가 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{'<    '}캐릭터 선택</Text>
      </View>

      {/* 로고 및 텍스트 표시 */}
      <View style={styles.box}>
        <View style={styles.frame}>
          <View style={styles.iconTextWrapper}>
            <Image
              style={styles.star}
              source={require('../../assets/Star 1.png')}
            />
            <Text style={styles.textWrapper}>
              {characters[currentIndex].name}
            </Text>
          </View>
          <Text style={styles.explain}>
            {characters[currentIndex].location_1}
          </Text>
          <Text style={styles.explain}>
            {characters[currentIndex].location_2}
          </Text>
          <TouchableOpacity style={styles.smallButton}>
            <Text style={styles.smallButtonText}>추천 전공</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 캐릭터 이미지와 화살표 */}
      <View style={styles.characterContainer}>
        <TouchableOpacity onPress={handlePrevious} style={styles.arrowButton}>
          <Image
            style={styles.arrowImage}
            source={require('../../assets/circle-arrow-left.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleCharacterSelect(currentIndex)} // 캐릭터 선택/취소
          style={[
            styles.characterImageWrapper,
            selectedCharacter === currentIndex && styles.selectedCharacter, // 선택된 캐릭터 스타일
          ]}
        >
          <Image
            style={styles.characterImage}
            source={characters[currentIndex].image}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
          <Image
            style={styles.arrowImage}
            source={require('../../assets/circle-arrow-right.png')}
          />
        </TouchableOpacity>
      </View>

      {/* 구글로 시작하기 버튼 */}
      <View style={styles.button}>
        <TouchableOpacity style={styles.button_start} onPress={handleLogin}>
          <Text style={styles.buttonText}>구글로 시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // 배경색을 검정으로 설정
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  headerText: {
    fontSize: 18,
    marginLeft: 12,
    color: '#fff',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    marginRight: 24,
  },
  frame: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  iconTextWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: 32,
    height: 32,
  },
  textWrapper: {
    fontFamily: 'Jaro-Regular',
    color: '#fbf15b',
    fontSize: 40,
    paddingLeft: 10,
    textAlign: 'center',
    marginBottom: 8,
  },
  explain: {
    fontSize: 18,
    color: '#D9D9D9',
    textAlign: 'right',
    marginBottom: 4,
  },
  smallButton: {
    marginTop: 10,
    backgroundColor: '#fbf15b',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  smallButtonText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
  },
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  arrowButton: {
    padding: 10,
  },
  arrowImage: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  characterImageWrapper: {
    marginHorizontal: 32,
  },
  characterImage: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  selectedCharacter: {
    borderColor: '#fbf15b', // 선택된 캐릭터에 테두리 추가
    borderWidth: 4,
  },
  button: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  button_start: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: 345,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
