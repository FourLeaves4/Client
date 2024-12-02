import axios from "axios";
import Constants from "expo-constants";

const apiKey = Constants.expoConfig.extra.OPENAI_API_KEY;

export const getAIResponse = async (userMessage) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: userMessage },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    // ChatGPT 응답 반환
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API 에러:", error.response?.data || error.message);
    return "오류가 발생했습니다. 다시 시도해주세요.";
  }
};
