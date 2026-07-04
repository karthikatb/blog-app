import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: {
    default: "Blogify",
    template: "%s | Blogify",
  },
  description:
    "A modern blog application built with Next.js, React Query, and Tailwind CSS.",
  keywords: [
    "Next.js",
    "React",
    "Blog",
    "Tailwind CSS",
    "React Query",
    "Web Development",
  ],
  authors: [{ name: "Karthika T B" }],
  openGraph: {
    title: "Blogify",
    description:
      "Explore modern web development articles on React, Next.js, TypeScript, UI Design, and more.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}