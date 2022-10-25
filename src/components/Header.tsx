import React from "react";
import { useTheme, Appbar, Switch, Text, FAB, Portal, Provider } from "react-native-paper";
import { toggleTheme } from "../../redux/Global/slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const Header = ({ route }: any) => {
  const theme = useTheme();
  const { isThemeDark } = useAppSelector((state) => state.glob);
  const dispatch = useAppDispatch();

  const changeTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}
    >
      <Appbar.Content title={route.name} />
      <Text>Dark mode </Text>
      <Switch color={"red"} value={isThemeDark} onValueChange={changeTheme} />
    </Appbar.Header>
  );
};

//TouchableRipple doesn't work for some reason