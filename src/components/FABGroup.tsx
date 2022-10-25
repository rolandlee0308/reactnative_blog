import * as React from "react";
import { FAB, Portal, Provider, withTheme } from "react-native-paper";

const FABGroup = ({ theme, navigation }: any) => {
  const [state, setState] = React.useState({ open: false });
  // const theme = useTheme();
  const onStateChange = ({ open }: any) => setState({ open });
  const { open } = state;
  return (
    <FAB.Group
      open={open}
      icon={open ? "minus" : "plus"}
      theme={theme}
      actions={[{ icon: "plus", onPress: () => navigation.navigate('create') }]}
      onStateChange={onStateChange}
      visible
    />
  );
};

export default withTheme(FABGroup);
