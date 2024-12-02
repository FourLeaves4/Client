import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { getAIResponse } from "../api/openai";

const AICounselScreen = () => {
  const [userMessage, setUserMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const handleSendMessage = async () => {
    const response = await getAIResponse(userMessage);
    setAiResponse(response);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>NOVA와 상담하기</Text>
      <TextInput
        style={styles.input}
        placeholder="질문을 입력하세요..."
        value={userMessage}
        onChangeText={setUserMessage}
      />
      <Button title="보내기" onPress={handleSendMessage} />
      {aiResponse ? <Text style={styles.response}>{aiResponse}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#111111",
  },
  label: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 8,
    color: "#fff",
  },
  response: {
    marginTop: 16,
    fontSize: 16,
    color: "#fff",
  },
});

export default AICounselScreen;
