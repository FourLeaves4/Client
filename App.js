import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./src/pages/start";
import Questions from "./src/pages/question";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          options={{ headerShown: false }}
          component={Start}
        />
        <Stack.Screen
          name="Questions"
          options={{ headerShown: false }}
          component={Questions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
