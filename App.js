import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Character from "./src/pages/Character";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Choice"
          options={{ headerShown: false }}
          component={Character}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
