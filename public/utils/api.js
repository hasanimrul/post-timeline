import axios from "axios";

export const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

export const fetchUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

export const fetchComments = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return response.data;
};
