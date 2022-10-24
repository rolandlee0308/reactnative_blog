import React from "react";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import merge from "deepmerge";

import IndexScreen from "../screens/Index";
import { Header } from "../components/Header";
import { useAppSelector } from "../../redux/hooks";

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const { isThemeDark } = useAppSelector((state) => state.glob);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="index"
          screenOptions={{ header: (props) => <Header {...props} /> }}
        >
          <Stack.Screen name="index" component={IndexScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
