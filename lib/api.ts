import axios from "axios";
import { Blog } from "@/types/blog";

const API_URL = "http://localhost:3002/posts";

export async function fetchPosts(): Promise<Blog[]> {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function fetchPost(id: string): Promise<Blog> {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
}