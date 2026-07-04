import { Blog } from "@/types/blog";
import { posts } from "@/data/posts";

export async function fetchPosts(): Promise<Blog[]> {
  return posts;
}

export async function fetchPost(id: string): Promise<Blog | undefined> {
  return posts.find((post) => post.id === id);
}