import React from 'react';
import { Alert } from 'react-native';
import CommonGoogleButton from '../CommonGoogleButton';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLoginButton({ navigation }) {
  // 세션 상태 확인 함수
  const checkSession = async () => {
    try {
      const response = await fetch('https://your-backend.com/auth/session', {
        method: 'GET',
        credentials: 'include', // 세션 쿠키를 포함해서 요청
      });

      if (response.ok) {
        console.log('세션 유지 확인 성공');
        navigation.replace('Main'); // 세션이 유효하면 메인 화면으로 이동
      } else {
        console.log('세션 만료 또는 로그인 필요');
        Alert.alert('로그인 실패', '세션이 만료되었습니다.');
      }
    } catch (error) {
      console.error('세션 확인 오류:', error);
      Alert.alert('로그인 오류', '세션 상태 확인 중 오류가 발생했습니다.');
    }
  };

  // Google 로그인 함수
  const handleGoogleLogin = async () => {
    console.log('Google 로그인 버튼 클릭됨');
    try {
      // 백엔드에서 Google OAuth를 처리하는 URL로 직접 이동
      const authUrl = 'https://your-backend.com/auth/google';

      // 웹 브라우저에서 OAuth 인증 시작
      const result = await WebBrowser.openBrowserAsync(authUrl);

      // 인증 성공 이후 리다이렉트 처리를 백엔드에서 해줘야 함
      if (result.type === 'cancel') {
        Alert.alert('로그인 실패', '로그인이 취소되었습니다.');
      } else {
        console.log('Google 로그인 성공!');
        // 로그인 성공 후 세션 상태 확인
        await checkSession();
      }
    } catch (error) {
      console.error('Google Login Error:', error);
      Alert.alert('로그인 실패', '다시 시도해주세요.');
    }
  };

  return <CommonGoogleButton onPress={handleGoogleLogin} text="Google로 로그인" />;
}
