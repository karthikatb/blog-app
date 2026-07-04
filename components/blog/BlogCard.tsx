import Link from "next/link";
import { Blog } from "@/types/blog";

interface Props {
  post: Blog;
}

export default function BlogCard({ post }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex h-[320px] flex-col p-6">
        {/* Category */}
        <span className="mb-4 w-fit rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-600">
          {post.category}
        </span>

        {/* Title */}
        <h2 className="text-2xl font-bold leading-tight text-gray-900 transition group-hover:text-indigo-600">
          {post.title}
        </h2>

        {/* Description */}
        <p className="mt-4 flex-1 text-gray-600">
          {post.description}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t pt-4">
          <div>
            <p className="font-semibold text-gray-900">
              {post.author}
            </p>

            <p className="text-sm text-gray-500">
              {post.date} • 5 min read
            </p>
          </div>

          <Link
            href={`/post/${post.id}`}
            className="font-semibold text-indigo-600 transition hover:text-black"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}