import Link from "next/link";
import { Blog } from "@/types/blog";

interface Props {
  post: Blog;
}

export default function FeaturedPost({ post }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-4xl font-bold">Featured Story</h2>

        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
          Editor's Pick
        </span>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="grid lg:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-10">
            <span className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
              {post.category}
            </span>

            <h2 className="text-5xl font-bold leading-tight">
              {post.title}
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              {post.description}
            </p>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>

            <Link
              href={`/post/${post.id}`}
              className="mt-10 w-fit rounded-full bg-black px-8 py-4 text-white transition hover:bg-indigo-600"
            >
              Read Full Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}