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
    console.log('sendData 호출됨');
    navigation.navigate('Character');
    /*
    axios
      .post(`${url}/major`, { answers: selectedAnswers })
      .then((res) => {
        console.log('응답 받음', res);
        navigation.navigate('Character');
      })
      .catch((err) => {
        console.log(err);
      });*/
  }

  function handleAnswer(questionId, answer) {
    setSelectedAnswers((prevAnswers) => {
      // 기존에 선택된 답변과 동일하면 취소, 아니면 새로 선택
      if (prevAnswers[questionId] === answer) {
        const { [questionId]: _, ...rest } = prevAnswers;
        return rest;
      } else {
        return { ...prevAnswers, [questionId]: answer };
      }
    });
  }

  // 모든 질문에 대해 답변이 선택되었는지 확인
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
                  isSelected && styles.selectedAnswerBorder, // 선택된 답변 테두리 색 변경
                ]}
                onPress={() => handleAnswer(question.id, answer)}
              >
                <Text
                  style={[
                    styles.answerText,
                    isSelected && styles.selectedAnswerText, // 선택된 답변 글씨 색 변경
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
        disabled={!isAllAnswered} // 답변이 모두 선택되지 않으면 버튼 비활성화
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
    backgroundColor: 'rgba(255, 241, 91, 0.1)', // 배경색만 10% 투명도 적용 (rgba 형식으로 색상과 투명도 설정)
  },
  selectedAnswerBorder: {
    borderColor: '#FBF15B', // 선택된 답변의 테두리 색
    borderWidth: 2,
  },
  answerText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  selectedAnswerText: {
    color: '#FBF15B', // 선택된 답변의 글씨 색
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
    backgroundColor: '#6D6C52', // 비활성화된 버튼 색
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
