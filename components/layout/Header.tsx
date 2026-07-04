"use client";

import { Search, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-black tracking-tight transition hover:text-indigo-600"
        >
          Beyond<span className="text-indigo-600">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 md:flex">
          <a href="#home" className="font-medium transition hover:text-indigo-600">
            Home
          </a>

          <a
            href="#articles"
            className="font-medium transition hover:text-indigo-600"
          >
            Articles
          </a>

          <a
            href="#categories"
            className="font-medium transition hover:text-indigo-600"
          >
            Categories
          </a>

          <a
            href="#about"
            className="font-medium transition hover:text-indigo-600"
          >
            About
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <a
            href="#articles"
            className="rounded-full bg-gray-100 p-3 transition hover:bg-indigo-100"
          >
            <Search size={18} />
          </a>

          <button className="rounded-full bg-gray-100 p-3 transition hover:bg-indigo-100 md:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}