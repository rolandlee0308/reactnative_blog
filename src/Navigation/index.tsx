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
  Portal,
} from "react-native-paper";
import merge from "deepmerge";

import IndexScreen from "../screens/Index";
import ShowScreen from "../screens/Show";
import CreateScreen from "../screens/Create";
import EditScreen from "../screens/Edit";
import { Header } from "../components/Header";
import { useAppSelector } from "../../redux/hooks";
import FABGroup from "../components/FABGroup";

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const { isThemeDark } = useAppSelector((state) => state.glob);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Blogs">
          <Stack.Screen
            name="Blogs"
            options={{ header: (props) => <Header {...props} /> }}
          >
            {(props) => (
              <>
                <IndexScreen {...props} />
                <FABGroup {...props} />
              </>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="show"
            options={({ route }: any) => ({ title: route.params.title })}
          >
            {(props) => (
              <>
                <ShowScreen {...props} />
                <FABGroup {...props} />
              </>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="create"
            component={CreateScreen}
            options={{ title: "Create Blog Post" }}
          />
          <Stack.Screen
            name="edit"
            component={EditScreen}
            options={{ title: "Edit Blog Post" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
