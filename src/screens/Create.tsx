import React, { useState } from "react";
import { addBlogPost } from "../../redux/Global/slice";
import { useAppDispatch } from "../../redux/hooks";

import BlogPostForm from "../components/BlogPostForm";

export default function Create({ navigation }: any) {
  const dispatch = useAppDispatch();
  return (
    <BlogPostForm
      onSubmit={async (title: string, content: string) => {
        try {
          await dispatch(addBlogPost({ title, content }));
          navigation.navigate("Blogs");
        } catch (error) {
          console.error(error);
        }
      }}
    />
  );
}
