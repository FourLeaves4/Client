import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileSection from '../components/profileSection';
import LevelBarSection from '../components/LevelBarSection';

export default function MyScreen() {
  return (
    <View style={styles.container}>
      <ProfileSection />
      <LevelBarSection />
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
  text: {
    color: '#fff',
  },
});
