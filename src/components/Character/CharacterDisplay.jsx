import React, { useRef, useEffect } from 'react';
import { View, Animated, Text, StyleSheet, Dimensions } from 'react-native';

// RecommendedMajor 컴포넌트를 가져와 재사용 가능
import RecommendedMajor from '../Character/RecomendedMajor';

export default function CharacterDisplay({ character, isRecommended, isSelected }) {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isSelected]);

  return (
    <View style={[styles.container]}>
      {/* RecommendedMajor 사용 */}
      {isRecommended && (
        <RecommendedMajor major="추천 캐릭터" />
      )}
      <Animated.Image
        source={isSelected ? character.selectedImage : character.image}
        style={[styles.image, { opacity: fadeAnim }]}
      />
      <Text style={styles.name}>{character.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#111111',
    marginTop: 130,
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 28,
    color: '#FFFFFF',
    marginTop: 10,
  },
});
