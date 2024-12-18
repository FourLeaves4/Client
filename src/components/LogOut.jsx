import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

const LogOutButton = () => {
  const handleLogOut = () => {
    // 확인 메시지 표시
    Alert.alert('로그아웃', '정말 로그아웃 하시겠습니까?', [
      {
        text: '취소',
        style: 'cancel', // 취소 버튼
      },
      {
        text: '확인',
        onPress: () => {
          // 로그아웃 처리 로직 (예: 로그아웃 API 호출)
          alert('로그아웃 되었습니다.');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danger Zone</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogOut}>
        {/* 이미지 아이콘 추가 */}
        <Image source={require('../../assets/Out.png')} style={styles.icon} />
        <Text style={styles.buttonText}>로그아웃 하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    width: 345,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333', // 버튼 배경색
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#d9534f', // 경계선 색상
  },
  icon: {
    width: 16, // 이미지 크기
    height: 16, // 이미지 크기
    marginRight: 10, // 아이콘과 텍스트 간의 간격
  },
  buttonText: {
    fontSize: 16,
    color: '#d9534f', // 텍스트 색상
    fontWeight: 'bold',
  },
});

export default LogOutButton;
