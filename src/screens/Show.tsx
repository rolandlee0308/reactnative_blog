import { View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { useAppSelector } from "../../redux/hooks";

export default function Show({ route }: any) {
  const { id } = route.params;
  const { blogPosts } = useAppSelector((state) => state.glob);

  const temp = blogPosts.find((item) => item.id === id);
  return (
    <View>
      <Text>{temp?.content}</Text>
    </View>
  );
}
