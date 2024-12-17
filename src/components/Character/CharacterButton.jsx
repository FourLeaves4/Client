// CharacterButton.jsx
import React from 'react';
import { Alert } from 'react-native';
import CommonGoogleButton from '../CommonGoogleButton';

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

  return <CommonGoogleButton onPress={handlePress} text="Google로 시작하기" />;
}
