import About from "@/components/home/About";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/home/Newsletter";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import FeaturedPost from "@/components/home/FeaturedPost";
import BlogList from "@/components/blog/BlogList";
import { fetchPosts } from "@/lib/api";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <>
      <Header />

      <Hero />

      <FeaturedPost post={posts[0]} />

      <BlogList posts={posts.slice(1)} />

      <About />

      <Newsletter />

      <Footer />
    </>
  );
}