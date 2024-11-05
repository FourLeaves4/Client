import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.button_start}
          onPress={() => navigation.navigate('Start')}
        >
          <Text style={styles.buttonText}>시작하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_login}
          onPress={() => navigation.navigate('Start')}
        >
          <Text style={styles.buttonText}>로그인하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 82,
  },
  button_start: {
    backgroundColor: '#FBF15B',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 10,
    width: 345,
  },
  button_login: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 10,
    width: 345,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
