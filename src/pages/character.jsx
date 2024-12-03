import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Character/Header';
import CharacterDisplay from '../components/Character/CharacterDisplay';
import Description from '../components/Character/Description';
import CharacterButton from '../components/Character/CharacterButton';

export default function Character({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="제 모습을 선택해 주세요." subtitle="어떨 것 같아요?" />
      <CharacterDisplay/>
      <Description />

      <CharacterButton
        navigation={navigation}// 'HomeScreen'으로 이동
      />
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
  buttonWrapper: {
    marginTop: 30,
    alignItems: 'center',
  },
});
