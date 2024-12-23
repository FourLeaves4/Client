// CharacterButton.jsx
import axios from 'axios';
import React from 'react';
import { Alert, Linking } from 'react-native';
import CommonGoogleButton from '../CommonGoogleButton';

const BASE_URL = 'https://port-0-server-lz1cq56f81af005d.sel4.cloudtype.app'; // BASE_URL 추가
export default function CharacterButton({ navigation, selectedCharacter }) {
  
  const handlePress = async () => {
    if (!selectedCharacter) {
      Alert.alert('경고', '캐릭터를 선택해주세요!');
      return;
    }
  
    const homeImages = {
      FrontEnd: require('../../../assets/Fe.png'),
      BackEnd: require('../../../assets/Be.png'),
      iOS: require('../../../assets/io.png'),
      Android: require('../../../assets/Ad.png'),
      Nova: require('../../../assets/Nv.png'),
    };
  
    const homeImage = homeImages[selectedCharacter.name];
  
    // 선택된 캐릭터 데이터와 함께 백엔드로 요청 보내기
    try {
      // 추가: URL과 데이터를 로그로 출력
    console.log(`POST URL: ${BASE_URL}/home/${selectedCharacter.major}/mission`);
    console.log('POST 데이터:', { major: selectedCharacter.major });

      const response = await axios.post(`${BASE_URL}/home/${selectedCharacter.major}/mission`, {
        major: selectedCharacter.major,
      });
  
      console.log('백엔드 응답:', response.data);
  
      // HomeScreen으로 이동
      navigation.navigate('Main', {
        screen: 'Home',
        params: { character: { ...selectedCharacter, homeImage } },
      });
    } catch (error) {
      // console.error('데이터 전송 오류:', error);
      //Alert.alert('오류', '미션 데이터를 가져오는 데 실패했습니다.');
    }
    // 선택된 캐릭터 데이터와 함께 홈 화면으로 이동
    navigation.navigate('Main', {
      screen: 'Home',
      params: { character: { ...selectedCharacter, homeImage } },
    });
  };

  return <CommonGoogleButton onPress={handlePress} text="Google로 시작하기" />;
}
