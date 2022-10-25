import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import React, { useState } from "react";

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default function BlogPostForm({ onSubmit, initialValues }: any) {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [content, setContent] = useState(initialValues?.content || "");

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        label="Title"
        value={title}
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
        maxLength={100}
        right={<TextInput.Affix text="/100" />}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        label="Content"
        value={content}
        style={styles.input}
        onChangeText={(text) => setContent(text)}
        maxLength={1000}
        right={<TextInput.Affix text="/1000" />}
        multiline
      />
      <Button mode="contained" onPress={() => onSubmit(title, content)}>
        Save Blog Post
      </Button>
    </View>
  );
}
