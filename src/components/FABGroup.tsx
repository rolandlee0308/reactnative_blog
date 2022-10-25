import * as React from "react";
import { FAB, Portal, Provider, withTheme } from "react-native-paper";

const FABGroup = ({ theme, navigation, route }: any) => {
  const [state, setState] = React.useState({ open: false });
  // const theme = useTheme();
  const onStateChange = ({ open }: any) => setState({ open });
  const { open } = state;
  const actions =
    route.name === "show"
      ? [
          {
            icon: "plus",
            label: "Create Blog",
            onPress: () => navigation.navigate("create"),
          },
          {
            icon: "pencil",
            label: "Edit Blog",
            onPress: () => navigation.navigate("edit", { id: route.params.id }),
          },
        ]
      : [
          {
            icon: "plus",
            label: "Create Blog",
            onPress: () => navigation.navigate("create"),
          },
        ];

  return (
    <FAB.Group
      open={open}
      icon={open ? "minus" : "plus"}
      theme={theme}
      actions={actions}
      onStateChange={onStateChange}
      visible
    />
  );
};

export default withTheme(FABGroup);
