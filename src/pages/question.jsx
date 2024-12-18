import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

// 베이스 URL + 엔드포인트
const BASE_URL = 'https://your-backend-server.com'; // 실제 백엔드 베이스 URL
const ENDPOINT = '/auth/major';

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

  function getRecommendedMajor(answers) {
    console.log('선택된 답변: ', answers);

    if (answers[3] === '애플이 만든 기기에서의 성능 최적화') return 'iOS';
    if (answers[3] === '안드로이드 기기와의 호환성') return 'Android';
    if (answers[3] === '데이터 처리의 효율성과 보안') return 'BackEnd';
    if (answers[1] === '웹 개발' || answers[2] === '눈에 바로 보이는 결과물')
      return 'FrontEnd';

    return 'Nova';
  }

  async function sendData() {
    console.log('sendData 호출됨');

    const recommendedMajor = getRecommendedMajor(selectedAnswers);

    const surveyData = {
      answers: selectedAnswers,
      recommendedMajor: recommendedMajor,
      timestamp: new Date().toISOString(),
    };

    try {
      console.log('서버로 데이터 전송 중:', surveyData);

      const response = await axios.post(`${BASE_URL}${ENDPOINT}`, surveyData);

      console.log('서버 응답:', response.data);

      // 서버로 데이터 전송 성공 시 Character 페이지로 이동
      navigation.navigate('Character', { recommendedMajor });
    } catch (error) {
      console.error('데이터 전송 오류:', error);
      Alert.alert('오류', '서버로 데이터를 전송할 수 없습니다.');
    }
  }

  function handleAnswer(questionId, answer) {
    setSelectedAnswers((prevAnswers) => {
      return { ...prevAnswers, [questionId]: answer };
    });
  }

  useEffect(() => {
    console.log('현재 선택된 답변:', selectedAnswers);
  }, [selectedAnswers]);

  const isAllAnswered = questions.every((question) =>
    selectedAnswers.hasOwnProperty(question.id)
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>간단한 설문조사를 시작할게요!</Text>
      {questions.map((question) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={styles.question}>{question.text}</Text>
          {question.answers.map((answer, index) => {
            const isSelected = selectedAnswers[question.id] === answer;
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button_answer,
                  isSelected && styles.selectedAnswerButton,
                  isSelected && styles.selectedAnswerBorder,
                ]}
                onPress={() => handleAnswer(question.id, answer)}
              >
                <Text
                  style={[
                    styles.answerText,
                    isSelected && styles.selectedAnswerText,
                  ]}
                >
                  {answer}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
      <TouchableOpacity
        onPress={sendData}
        style={[styles.button_next, !isAllAnswered && styles.buttonDisabled]}
        disabled={!isAllAnswered}
      >
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
  selectedAnswerButton: {
    backgroundColor: 'rgba(255, 241, 91, 0.1)',
  },
  selectedAnswerBorder: {
    borderColor: '#FBF15B',
    borderWidth: 2,
  },
  answerText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  selectedAnswerText: {
    color: '#FBF15B',
  },
  button_next: {
    marginTop: 52,
    backgroundColor: '#FBF15B',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: 345,
  },
  buttonDisabled: {
    backgroundColor: '#6D6C52',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
