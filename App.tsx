import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import IndexScreen from "./src/screens/Index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="index">
          <Stack.Screen
            name="index"
            component={IndexScreen}
            options={{ title: "Blogs" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
