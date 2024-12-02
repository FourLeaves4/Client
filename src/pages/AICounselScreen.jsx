import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { getAIResponse } from "../api/openai";
import AIProfile from "../components/AIProfile"; // AIProfile 컴포넌트 가져오기

const AICounselScreen = () => {
  const [messages, setMessages] = useState([]); // 채팅 메시지 목록
  const [userMessage, setUserMessage] = useState(""); // 사용자 입력 메시지

  const handleSendMessage = async () => {
    if (userMessage.trim() === "") return;

    const userMsg = { id: Date.now().toString(), text: userMessage, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMsg]);
    setUserMessage("");

    try {
      const aiResponseText = await getAIResponse(userMessage);
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
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "user" ? styles.userMessage : styles.aiMessage,
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
        contentContainerStyle={styles.messagesList}
        ListHeaderComponent={<AIProfile />} // AIProfile을 리스트 헤더로 추가
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="질문을 입력하세요..."
          placeholderTextColor="#ccc"
          value={userMessage}
          onChangeText={setUserMessage}
        />
        <Button title="보내기" onPress={handleSendMessage} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },
  messagesList: {
    padding: 16,
  },
  messageContainer: {
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#007AFF",
  },
  aiMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#333333",
  },
  messageText: {
    color: "#ffffff",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#333333",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: "#fff",
    marginRight: 8,
  },
});

export default AICounselScreen;
