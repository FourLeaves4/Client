import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function HomeScreen({ route }) {
  const { character } = route.params || {};

  if (!character) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>캐릭터가 선택되지 않았습니다.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <View style={styles.ellipse} />
        <Image source={character.homeImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    width: 450,
    height: 550,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default HomeScreen;
