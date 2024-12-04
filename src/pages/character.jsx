import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import Header from '../components/Character/Header';
import CharacterDisplay from '../components/Character/CharacterDisplay';
import Description from '../components/Character/Description';
import CharacterButton from '../components/Character/CharacterButton';
import PaginationDots from '../components/Character/PaginationDots';

const { width } = Dimensions.get('window');

export default function Character({ route, navigation }) {
  const { recommendedMajor } = route.params; // 설문 결과로 전달된 추천 캐릭터
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 인덱스 추적
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: 'FrontEnd',
      image: require('../../assets/FrontEndCharacter.png'),
    },
    {
      id: 2,
      name: 'BackEnd',
      image: require('../../assets/BackEndCharacter.png'),
    },
    {
      id: 3,
      name: 'iOS',
      image: require('../../assets/IOSCharacter.png'),
    },
    {
      id: 4,
      name: 'Android',
      image: require('../../assets/AndroidCharacter.png'),
    },
    {
      id: 5,
      name: 'Nova',
      image: require('../../assets/NovaCharacter.png'),
    },
  ]);

  useEffect(() => {
    // 추천 캐릭터를 최상단에 추가
    const recommendedCharacter = characters.find(
      (character) => character.name === recommendedMajor
    );


  console.log('추천 캐릭터:', recommendedCharacter); // 추천 캐릭터 확인

    if (recommendedCharacter) {
      setCharacters((prev) => [
        recommendedCharacter,
        ...prev.filter((c) => c.name !== recommendedMajor),
      ]);
    }
  }, [recommendedMajor]);

  return (
    <View style={styles.container}>
      <Header title="제 모습을 선택해 주세요." subtitle="어떨 것 같아요?" />

      {/* 캐릭터 슬라이드 */}
      <FlatList
        horizontal
        pagingEnabled
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.slide}>
            <CharacterDisplay character={item} isRecommended={index === 0} />
          </View>
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

      <CharacterButton navigation={navigation} />
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
    flexGrow: 0, // FlatList 높이 조정
    width: width,
    alignSelf: 'center',
  },
  flatListContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width, // 각 슬라이드의 너비를 화면 너비로 설정
    justifyContent: 'center',
    alignItems: 'center',
  },
});
