// GoogleLoginButton.jsx
import React from 'react';
import CommonGoogleButton from '../CommonGoogleButton';

export default function GoogleLoginButton({ onPress }) {
  return <CommonGoogleButton onPress={onPress} text="Google로 로그인" />;
}
