import {
  NavigationContainer,
  NavigationRouteContext,
} from "@react-navigation/native";
import { Choice } from "./src/pages/Choice";

export function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Choice" component={Choice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
