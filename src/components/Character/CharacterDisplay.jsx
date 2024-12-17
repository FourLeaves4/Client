import React, { useRef, useEffect } from 'react';
import { View, Animated, Text, StyleSheet, Dimensions } from 'react-native';

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
      {isRecommended && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>Rec</Text>
        </View>
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
  badgeContainer: {
    backgroundColor: '#6f1010',
    paddingHorizontal: 24,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 10,
    alignSelf: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
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
