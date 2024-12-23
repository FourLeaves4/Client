import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Header from '../components/Character/Header';
import CharacterDisplay from '../components/Character/CharacterDisplay';
import Description from '../components/Character/Description';
import CharacterButton from '../components/Character/CharacterButton';
import PaginationDots from '../components/Character/PaginationDots';

const { width } = Dimensions.get('window');

export default function Character({ route, navigation }) {
  const { recommendedMajor } = route.params;

  // 숫자를 문자열로 매핑
  const majorMap = {
    1: "FrontEnd",
    2: "BackEnd",
    3: "iOS",
    4: "Android",
    5: "Nova",
  };

  // recommendedMajor를 문자열로 변환
  const majorName = majorMap[recommendedMajor] || "Unknown";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(null); // 초기 상태는 null
  const flatListRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(1)).current; // Animated 값 초기화
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: "FrontEnd",
      image: require('../../assets/고화질fe.png'),
      selectedImage: require('../../assets/살려줘.png'),
      major: 1, // FrontEnd의 major 값
    },
    {
      id: 2,
      name: "BackEnd",
      image: require('../../assets/고화질.be.png'),
      selectedImage: require('../../assets/고화질선택be.png'),
      major: 2, // BackEnd의 major 값
    },
    {
      id: 3,
      name: "iOS",
      image: require('../../assets/고화질ios2.png'),
      selectedImage: require('../../assets/고화질선택ios2.png'),
      major: 3, // iOS의 major 값
    },
    {
      id: 4,
      name: "Android",
      image: require('../../assets/고화질ad.png'),
      selectedImage: require('../../assets/고화질선택ad2.png'),
      major: 4, // Android의 major 값
    },
    {
      id: 5,
      name: "Nova",
      image: require('../../assets/고화질nv.png'),
      selectedImage: require('../../assets/고화질선택.nv.png'),
      major: 5, // Nova의 major 값
    },
  ]);  

  useEffect(() => {
    setCharacters((prev) => {
      const recommendedCharacter = prev.find(
        (character) => character.name === majorName
      );

      if (recommendedCharacter) {
        return [
          recommendedCharacter,
          ...prev.filter((c) => c.name !== majorName),
        ];
      }

      return prev;
    });
  }, [majorName]);

  const handleCharacterSelect = (character, index) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setSelectedCharacter(character);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    flatListRef.current.scrollToIndex({
      animated: true,
      index,
    });
  };

  return (
    <View style={styles.container}>
      <Header
        title={
          selectedCharacter
            ? "이 캐릭터로 하실건가요?"
            : "제 모습을 선택해 주세요."
        }
        subtitle={selectedCharacter ? selectedCharacter.name : majorName}
        fadeAnim={fadeAnim}
      />

      <FlatList
        ref={flatListRef}
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
              isRecommended={item.name === majorName}
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

      <PaginationDots totalDots={characters.length} activeDot={currentIndex} />

      <Description />

      <CharacterButton
        navigation={navigation}
        selectedCharacter={selectedCharacter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
    padding: 16,
  },
  flatList: {
    flexGrow: 0,
    width: width,
    alignSelf: "center",
  },
  flatListContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
