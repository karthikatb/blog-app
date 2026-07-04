import LikeButton from "@/components/blog/LikeButton";
import CommentBox from "@/components/blog/CommentBox";
import { getReadingTime } from "@/lib/readingTime";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchPost, fetchPosts } from "@/lib/api";


interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetails({ params }: Props) {
  const { id } = await params;

  const post = await fetchPost(id);
  

  if (!post) {
    notFound();
  }
  const readingTime = getReadingTime(post.content);

  const relatedPosts = (await fetchPosts())
    .filter((p) => p.id !== id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="h-[450px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-6 py-16">
        <span className="rounded-full bg-indigo-100 px-4 py-2 font-semibold text-indigo-600">
          {post.category}
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900">
          {post.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-6 text-gray-500">
          <span>{post.author}</span>
          <span>{post.date}</span>
          <span>{readingTime}</span>
        </div>

        <p className="mt-10 text-lg leading-9 text-gray-700">
          {post.content}
        </p>
        <div className="mt-10 flex items-center gap-4">
  <LikeButton postId={post.id} />
</div>

        <Link
          href="/"
          className="mt-12 inline-block rounded-full bg-black px-8 py-4 text-white transition hover:bg-indigo-600"
        >
          ← Back to Home
        </Link>
        <CommentBox postId={post.id} />
      </article>

      {/* Related Articles */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-10 text-4xl font-bold">
          Related Articles
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {relatedPosts.map((item) => (
            <Link
              key={item.id}
              href={`/post/${item.id}`}
              className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <span className="text-sm font-semibold text-indigo-600">
                  {item.category}
                </span>

                <h3 className="mt-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {item.author} • {item.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}