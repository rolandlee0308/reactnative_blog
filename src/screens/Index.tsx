import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Button, useTheme, IconButton } from "react-native-paper";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addBlogPost, deleteBlogPost } from "../../redux/Global/slice";

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
    paddingVertical: 10,
  },
});

export default function Index({ navigation }: any) {
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
        keyExtractor={(item) => item.id as string}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("show", { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity
                onPress={() => dispatch(deleteBlogPost(item.id))}
              >
                <IconButton icon="delete" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
