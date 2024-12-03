import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import StartButton from './StartButton';
import { View, StyleSheet } from 'react-native';

export default function Button({ type, onPress }) {
  return (
    <View style={styles.container}>
      {type === 'googleLogin' && <GoogleLoginButton onPress={onPress} />}
      {type === 'start' && <StartButton onPress={onPress} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
