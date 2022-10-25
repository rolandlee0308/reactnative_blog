import React, { useState } from "react";
import { editBlogPost } from "../../redux/Global/slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import BlogPostForm from "../components/BlogPostForm";

export default function Edit({ route, navigation }: any) {
  const id = route.params.id;
  const { blogPosts } = useAppSelector((state) => state.glob);
  const dispatch = useAppDispatch();
  const blogPost = blogPosts.find((item) => item.id === id);

  return (
    <BlogPostForm
      onSubmit={async (title: string, content: string) => {
        try {
          await dispatch(editBlogPost({ id, title, content }));
            navigation.navigate("show", { id, title });
        } catch (error) {
          console.error(error);
        }
      }}
      initialValues={{ title: blogPost?.title, content: blogPost?.content }}
    />
  );
}
