import axios from "axios";

const BASE_URL = "http://26cd-2601-646-c300-4290-8d19-b0fa-5450-b5dd.ngrok.io";

export const getBlogPosts = async () => {
  const response = await axios.get(BASE_URL + "/blogposts");
  return response.data;
};

export const addBlogPost = async (data: any) => {
  const response = await axios.post(BASE_URL + "/blogposts", data);
  return response.data;
};

export const editBlogPost = async (data: any, id: any) => {
  const response = await axios.put(BASE_URL + "/blogposts/" + id, data);
  return response.data;
};

export const deleteBlogPost = async (id: any) => {
  const response = await axios.delete(BASE_URL + "/blogposts/" + id);
  return response.data;
};
