import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../redux/hooks";

export default function Index() {
  const { temp } = useAppSelector((state) => state.glob);
  return (
    <View>
      <Text>Index</Text>
      <Text>{temp}</Text>
    </View>
  );
}
