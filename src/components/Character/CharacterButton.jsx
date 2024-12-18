// CharacterButton.jsx
import React from 'react';
import { Alert, Linking } from 'react-native';
import CommonGoogleButton from '../CommonGoogleButton';

export default function CharacterButton({ navigation, selectedCharacter }) {
  /*
  // 구글 로그인 URL
  const GOOGLE_AUTH_URL =
    'https://port-0-server-lz1cq56f81af005d.sel4.cloudtype.app/login/oauth2/code/google';
  */

  // 캐릭터 선택과 함께 로그인 진행
  const handlePress = async () => {
    if (!selectedCharacter) {
      Alert.alert('경고', '캐릭터를 선택해주세요!');
      return;
    }

    // 홈 이미지 매핑
    const homeImages = {
      FrontEnd: require('../../../assets/HomeFrontEndCharacter.png'),
      BackEnd: require('../../../assets/HomeBackEndCharacter.png'),
      iOS: require('../../../assets/HomeIOSCharacter.png'),
      Android: require('../../../assets/HomeAndroidCharacter.png'),
      Nova: require('../../../assets/HomeNovaCharacter.png'),
    };

    const homeImage = homeImages[selectedCharacter.name];

    // 주석 처리된 구글 로그인 로직
    /*
    try {
      // 외부 브라우저에서 Google 로그인 URL 열기
      const supported = await Linking.canOpenURL(GOOGLE_AUTH_URL);
      if (supported) {
        await Linking.openURL(GOOGLE_AUTH_URL);
      } else {
        Alert.alert('오류', 'Google 로그인 URL을 열 수 없습니다.');
      }
    } catch (error) {
      console.error('Google 로그인 오류:', error);
      Alert.alert('로그인 오류', '서버와 연결 중 문제가 발생했습니다.');
    }
    */

    // 선택된 캐릭터 데이터와 함께 홈 화면으로 이동
    navigation.navigate('Main', {
      screen: 'Home',
      params: { character: { ...selectedCharacter, homeImage } },
    });
  };

  return <CommonGoogleButton onPress={handlePress} text="Google로 시작하기" />;
}
