import React from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import CommonGoogleButton from '../CommonGoogleButton';

export default function CharacterButton({ navigation, selectedCharacter }) {
  // 백엔드 Base URL
  const BASE_URL = 'https://port-0-server-lz1cq56f81af005d.sel4.cloudtype.app';

  const handlePress = async () => {
    if (!selectedCharacter) {
      Alert.alert('경고', '캐릭터를 선택해주세요!');
      return;
    }

    // major 데이터 생성
    const payload = {
      major: selectedCharacter.id, // 선택된 캐릭터의 id를 major로 설정
    };

    try {
      // POST 요청으로 major 데이터 전송
      const response = await axios.post(`${BASE_URL}/profile/major`, payload);
      console.log('백엔드 응답:', response.data);

      // 응답 데이터 구조
      const { missions, today, level, name } = response.data;

      // 성공하면 홈 화면으로 이동
      const homeImages = {
        FrontEnd: require('../../../assets/HomeFrontEndCharacter.png'),
        BackEnd: require('../../../assets/HomeBackEndCharacter.png'),
        iOS: require('../../../assets/HomeIOSCharacter.png'),
        Android: require('../../../assets/HomeAndroidCharacter.png'),
        Nova: require('../../../assets/HomeNovaCharacter.png'),
      };

      const homeImage = homeImages[selectedCharacter.name];

      // 네비게이션으로 홈 화면에 응답 데이터 전달
      navigation.navigate('Main', {
        screen: 'Home',
        params: {
          character: { ...selectedCharacter, homeImage },
          missions, // 미션 데이터
          today,    // 오늘의 상태
          level,    // 사용자 레벨
          name,     // 사용자 이름
        },
      });
    } catch (error) {
      console.error('백엔드 요청 실패:', error.response?.data || error.message);
      Alert.alert('오류', '데이터 전송 중 문제가 발생했습니다.');
    }
  };

  return <CommonGoogleButton onPress={handlePress} text="Google로 시작하기" />;
}
