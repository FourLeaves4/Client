import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { getAIResponse } from "../api/openai";
import AIProfile from "../components/AIProfile";

const AICounselScreen = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  // 초기 메시지 1초 후 표시
  useEffect(() => {
    const timer = setTimeout(() => {
      const initialMessage = {
        id: "init",
        text: "안녕하세요! 무엇을 도와드릴까요?",
        sender: "ai",
      };
      setMessages([initialMessage]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async () => {
    if (userMessage.trim() === "") return;

    const userMsg = { id: Date.now().toString(), text: userMessage, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMsg]);
    setUserMessage("");

    // 로딩 상태 시작
    setIsLoading(true);

    try {
      const aiResponseText = await getAIResponse(userMessage);

      // AI 응답 추가
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    } catch (error) {
      console.error("AI 응답 처리 중 에러:", error);
      const errorResponse = {
        id: (Date.now() + 2).toString(),
        text: "죄송합니다. 현재 요청을 처리할 수 없습니다.",
        sender: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, errorResponse]);
    } finally {
      // 로딩 상태 종료
      setIsLoading(false);
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === "user" ? styles.userBubble : styles.aiBubble,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
        ListHeaderComponent={<AIProfile />}
      />

      {/* 로딩 상태 표시 */}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#4CAF50" />
          <Text style={styles.loadingText}>AI가 응답 중입니다...</Text>
        </View>
      )}

      {/* 입력 및 버튼 */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="AI에게 상담하기..."
          placeholderTextColor="#aaa"
          value={userMessage}
          onChangeText={setUserMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>보내기</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  chatContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 12,
    marginVertical: 8,
    borderRadius: 16,
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#4CAF50",
  },
  aiBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#333",
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#222",
    backgroundColor: "#111",
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: "#222",
    color: "#fff",
  },
  sendButton: {
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 20,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  loadingText: {
    color: "#aaa",
    fontSize: 14,
    marginLeft: 8,
  },
});

export default AICounselScreen;
