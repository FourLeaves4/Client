import axios from 'axios';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const url = '';
export default function Question({ navigation }) {
  function sendData(number) {
    axios
      .post(`${url}/major`, {
        answer: number,
      })
      .then((res) => {
        navigation.navigate('Character');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>간단한 설문조사를 시작할게요!</Text>
      <Text style={styles.question}>희망하시는 전공이 있나요?</Text>
      <TouchableOpacity style={styles.button_answer}>
        <Text style={styles.answerText}>웹 개발</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_answer}>
        <Text style={styles.answerText}>앱 개발</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_answer}>
        <Text style={styles.answerText}>풀스택</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_answer}>
        <Text style={styles.answerText}>모르겠어요</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={sendData} style={styles.button_next}>
        <Text style={styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 117,
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'flex-end',
    backgroundColor: '#000000',
    paddingBottom: 80,
  },
  title: {
    flex: 1,
    marginBottom: 44,
    //backgroundColor: 'pink',
    fontSize: 28,
    fontWeight: 'normal',
    //marginBottom: 36,
    alignItems: 'center',
    //justifyContent: 'center',
    color: '#ffffff',
  },
  question: {
    flex: 0.5,
    color: '#ffffff',
    //backgroundColor: 'green',
    alignItems: 'center',
    //justifyContent: 'center',
    fontSize: 24,
    //marginBottom: 24,
    //paddingVertical: 24,
  },
  button_answer: {
    //flex: 0.5,
    backgroundColor: '#666666',
    paddingVertical: 24,
    //paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: 'flex-end',
    marginTop: 24,
    justifyContent: 'flex-end',
    width: 345,
  },
  answerText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  button_next: {
    //flex: 0.5,
    marginTop: 52,
    backgroundColor: '#FBF15B',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    justifyContent: 'flex-end',
    //marginBottom: 10,
    justifyContent: 'flex-end',
    width: 345,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
