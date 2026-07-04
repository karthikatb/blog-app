import Link from "next/link";
import { BiColorFill } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold">
            Beyond<span className="text-indigo-600">.</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Modern stories for developers, designers and creators.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 font-semibold">Explore</h3>

          <ul className="space-y-3 text-gray-600">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/">Articles</Link>
            </li>

            <li>
              <Link href="/">Categories</Link>
            </li>

            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-4 font-semibold">Categories</h3>

          <ul className="space-y-3 text-gray-600">
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>UI Design</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-semibold">Connect</h3>

          <ul className="space-y-3 text-gray-600">
            <a href="https://github.com/karthikatb/blog_app"><li >GitHub</li></a>
            <a href="Linkedin:https://www.linkedin.com/in/karthika-t-b-bba895327"><li>LinkedIn</li></a>
            
          </ul>
        </div>
      </div>

      <div className="border-t py-6 text-center text-sm text-gray-500">
        © 2026 Beyond. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}