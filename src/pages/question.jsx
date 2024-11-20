import axios from 'axios';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const url = '';
const questions = [
  {
    id: 1,
    text: '희망하시는 전공이 있나요?',
    answers: ['웹 개발', '앱 개발', '풀스택', '모르겠어요'],
  },
  {
    id: 2,
    text: '어떤 결과물을 더 선호하시나요?',
    answers: ['눈에 바로 보이는 결과물', '보이지 않는 결과물'],
  },
  {
    id: 3,
    text: '개발에서 가장 중요하게 생각하는 것은?',
    answers: [
      '웹사이트을 사용할 때 느끼는 즐거움과 편리함',
      '데이터 처리의 효율성과 보안',
      '애플이 만든 기기에서의 성능 최적화',
      '안드로이드 기기와의 호환성',
    ],
  },
  {
    id: 4,
    text: '이제 전공에 대한 확신이 드시나요?',
    answers: ['네', '아니요'],
  },
];

export default function Question({ navigation }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  function sendData() {
    axios
      .post(`${url}/major`, { answers: selectedAnswers })
      .then((res) => {
        navigation.navigate('Character');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAnswer(questionId, answer) {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>간단한 설문조사를 시작할게요!</Text>
      {questions.map((question) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={styles.question}>{question.text}</Text>
          {question.answers.map((answer, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button_answer}
              onPress={() => handleAnswer(question.id, answer)}
            >
              <Text style={styles.answerText}>{answer}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <TouchableOpacity onPress={sendData} style={styles.button_next}>
        <Text style={styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 117,
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingBottom: 80,
  },
  title: {
    flex: 1,
    marginBottom: 44,
    fontSize: 28,
    fontWeight: 'normal',
    color: '#ffffff',
  },
  questionContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  question: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 24,
  },
  button_answer: {
    backgroundColor: '#666666',
    paddingVertical: 24,
    borderRadius: 8,
    marginTop: 24,
    width: 345,
  },
  answerText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  button_next: {
    marginTop: 52,
    backgroundColor: '#FBF15B',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: 345,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
