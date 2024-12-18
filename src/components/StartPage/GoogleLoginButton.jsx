import React from 'react';
import { Alert } from 'react-native';
import CommonGoogleButton from '../CommonGoogleButton';
import { useNavigation } from '@react-navigation/native';

export default function GoogleLoginButton() {
  const navigation = useNavigation();

  // Google OAuth 시작
  const handleGoogleLogin = async () => {
    try {
      // 백엔드에서 제공한 OAuth 요청 URL 호출
      const authUrl = 'https://port-0-server-lz1cq56f81af005d.sel4.cloudtype.app/login/oauth2/code/google';

      // 사용자가 로그인 페이지로 이동
      const response = await fetch(authUrl, {
        method: 'GET',
        credentials: 'include', // 세션 쿠키 포함
      });

      if (response.ok) {
        // 로그인 성공 처리 (예: 메인 화면 이동)
        console.log('Google 로그인 성공');
        navigation.replace('Main'); // 성공 시 메인 화면으로 이동
      } else {
        // 실패 처리
        console.error('Google 로그인 실패');
        Alert.alert('로그인 실패', '다시 시도해주세요.');
      }
    } catch (error) {
      console.error('로그인 요청 오류:', error);
      Alert.alert('로그인 실패', '서버와의 연결에 문제가 있습니다.');
    }
  };

  return <CommonGoogleButton onPress={handleGoogleLogin} text="Google로 로그인" />;
}
