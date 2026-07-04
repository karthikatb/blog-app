"use client";

import { useMemo, useState } from "react";
import { Blog } from "@/types/blog";
import BlogCard from "./BlogCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

interface Props {
  posts: Blog[];
}

export default function BlogList({ posts }: Props) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(posts.map((post) => post.category))),
  ];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = (
        `${post.title} ${post.description} ${post.author}`
      )
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, search, selectedCategory]);

  return (
    <section
      id="articles"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      {/* Search */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Categories */}
      <div
        id="categories"
        className="mt-8 mb-10 scroll-mt-24"
      >
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {/* Articles */}
      {filteredPosts.length === 0 ? (
        <div className="rounded-2xl bg-gray-100 p-10 text-center text-gray-600">
          No articles found.
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      )}
    </section>
  );
}