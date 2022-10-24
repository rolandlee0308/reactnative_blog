import { FlatList, StyleSheet, View } from "react-native";
import { Text, Button, useTheme, IconButton } from "react-native-paper";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addBlogPost } from "../../redux/Global/slice";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
    paddingVertical: 10
  },

});

export default function Index() {
  const { blogPosts } = useAppSelector((state) => state.glob);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  return (
    <View>
      <Button
        mode="contained"
        color={theme?.colors.primary}
        onPress={() => dispatch(addBlogPost())}
      >
        Add Post
      </Button>
      <FlatList
        data={blogPosts}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>
              {item.title}
            </Text>
              <IconButton icon="delete" />
          </View>
        )}
      />
    </View>
  );
}
