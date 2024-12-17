import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, FlatList, Dimensions, TouchableOpacity, Animated } from 'react-native';
import Header from '../components/Character/Header';
import CharacterDisplay from '../components/Character/CharacterDisplay';
import Description from '../components/Character/Description';
import CharacterButton from '../components/Character/CharacterButton';
import PaginationDots from '../components/Character/PaginationDots';

const { width } = Dimensions.get('window');

export default function Character({ route, navigation }) {
  const { recommendedMajor } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(null); // 초기 상태는 null
  const flatListRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(1)).current; // Animated 값 초기화
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: 'FrontEnd',
      image: require('../../assets/FrontEndCharacter.png'),
      selectedImage: require('../../assets/FrontEndCharacterSelected.png'),
    },
    {
      id: 2,
      name: 'BackEnd',
      image: require('../../assets/BackEndCharacter.png'),
      selectedImage: require('../../assets/BackEndCharacterSelected.png'),
    },
    {
      id: 3,
      name: 'iOS',
      image: require('../../assets/IOSCharacter.png'),
      selectedImage: require('../../assets/IOSCharacterSelected.png'),
    },
    {
      id: 4,
      name: 'Android',
      image: require('../../assets/AndroidCharacter.png'),
      selectedImage: require('../../assets/AndroidCharacterSelected.png'),
    },
    {
      id: 5,
      name: 'Nova',
      image: require('../../assets/NovaCharacter.png'),
      selectedImage: require('../../assets/NovaCharacterSelected.png'),
    },
  ]);

  useEffect(() => {
    // 추천 캐릭터를 최상단에 추가
    const recommendedCharacter = characters.find(
      (character) => character.name === recommendedMajor
    );

    if (recommendedCharacter) {
      setCharacters((prev) => [
        recommendedCharacter,
        ...prev.filter((c) => c.name !== recommendedMajor),
      ]);
    }
  }, [recommendedMajor]);

  const handleCharacterSelect = (character, index) => {
    // 페이드 아웃 애니메이션
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setSelectedCharacter(character); // 캐릭터 선택
      // 페이드 인 애니메이션
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    // FlatList 자동 스크롤
    flatListRef.current.scrollToIndex({
      animated: true,
      index,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header 업데이트 */}
      <Header
        title={
          selectedCharacter
            ? '이 캐릭터로 하실건가요?'
            : '제 모습을 선택해 주세요.'
        }
        subtitle={selectedCharacter ? selectedCharacter.name : '어떨 것 같아요?'}
        fadeAnim={fadeAnim} // 애니메이션 값 전달
      />

      {/* 캐릭터 슬라이드 */}
      <FlatList
        ref={flatListRef} // FlatList 참조 설정
        horizontal
        pagingEnabled
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[styles.slide]}
            onPress={() => handleCharacterSelect(item, index)}
          >
            <CharacterDisplay
              character={
                selectedCharacter?.id === item.id
                  ? { ...item, image: item.selectedImage }
                  : item
              }
              isRecommended={item.name === recommendedMajor}
              isSelected={selectedCharacter?.id === item.id}
            />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const scrollOffset = event.nativeEvent.contentOffset.x;
          const newIndex = Math.round(scrollOffset / width);
          setCurrentIndex(newIndex);
        }}
        scrollEventThrottle={16}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
      />

      {/* Pagination Dots */}
      <PaginationDots totalDots={characters.length} activeDot={currentIndex} />

      <Description />

      <CharacterButton navigation={navigation} selectedCharacter={selectedCharacter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    padding: 16,
  },
  flatList: {
    flexGrow: 0,
    width: width,
    alignSelf: 'center',
  },
  flatListContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
