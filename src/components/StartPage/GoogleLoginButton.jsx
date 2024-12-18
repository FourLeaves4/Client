import React from 'react';
import { Alert, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommonGoogleButton from '../CommonGoogleButton';
import { useNavigation } from '@react-navigation/native';

export default function GoogleLoginButton() {
  const navigation = useNavigation();

  // 구글 로그인 URL
  const GOOGLE_AUTH_URL =
    'https://port-0-server-lz1cq56f81af005d.sel4.cloudtype.app/login/oauth2/code/google';

  // 토큰 저장 함수
  const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem('authToken', token);
      console.log('토큰 저장 성공:', token);
    } catch (error) {
      console.error('토큰 저장 실패:', error);
      Alert.alert('오류', '로그인 상태를 저장할 수 없습니다.');
    }
  };

  // Google 로그인 버튼 핸들러
  const handleGoogleLogin = async () => {
    try {
      // 외부 브라우저로 로그인 URL 열기
      const supported = await Linking.canOpenURL(GOOGLE_AUTH_URL);
      if (supported) {
        await Linking.openURL(GOOGLE_AUTH_URL);

        // 백엔드 서버에서 반환된 토큰 받기
        const response = await fetch(
          'https://port-0-server-lz1cq56f81af005d.sel4.cloudtype.app/validate-token',
          { method: 'GET' }
        );

        if (response.ok) {
          const { token } = await response.json(); // 백엔드에서 반환된 토큰
          await storeToken(token); // 토큰 저장
          navigation.replace('Main'); // 로그인 성공 후 메인 화면 이동
        } else {
          console.error('토큰 검증 실패');
          Alert.alert('로그인 실패', '토큰 검증에 실패했습니다.');
        }
      } else {
        Alert.alert('오류', 'Google 로그인 페이지를 열 수 없습니다.');
      }
    } catch (error) {
      console.error('Google 로그인 오류:', error);
      Alert.alert('로그인 오류', '서버 연결에 실패했습니다.');
    }
  };

  return <CommonGoogleButton onPress={handleGoogleLogin} text="Google로 로그인" />;
}
