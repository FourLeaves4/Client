import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, Alert } from 'react-native';

export default function CharacterButton({ navigation, selectedCharacter }) {
  const handlePress = () => {
    if (!selectedCharacter) {
      Alert.alert('경고', '캐릭터를 선택해주세요!');
      return;
    }

    const homeImages = {
      FrontEnd: require('../../../assets/HomeFrontEndCharacter.png'),
      BackEnd: require('../../../assets/HomeBackEndCharacter.png'),
      iOS: require('../../../assets/HomeIOSCharacter.png'),
      Android: require('../../../assets/HomeAndroidCharacter.png'),
      Nova: require('../../../assets/HomeNovaCharacter.png'),
    };

    const homeImage = homeImages[selectedCharacter.name];

    navigation.navigate('Main', {
      screen: 'Home',
      params: { character: { ...selectedCharacter, homeImage } },
    });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image
        source={require('../../../assets/Google_Image.png')}
        style={styles.icon}
      />
      <Text style={styles.text}>Google로 시작하기</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: 345,
    marginBottom: 30,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
