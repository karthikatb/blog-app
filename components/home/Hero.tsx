import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-50 via-white to-indigo-50"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-24 md:flex-row">
        {/* Left Side */}
        <div className="flex-1">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-indigo-600">
            Modern Tech Blog
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
            Build Better
            <br />
            Web Experiences
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Discover premium articles about React, Next.js, TypeScript,
            JavaScript, UI Design and modern frontend development.
          </p>

          <div className="mt-10 flex gap-5">
            <a
              href="#articles"
              className="rounded-full bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700"
            >
              Start Reading
            </a>

            <a
              href="#about"
              className="rounded-full border border-gray-300 px-8 py-4 font-semibold transition hover:bg-gray-100"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-indigo-600">150+</h2>
              <p className="text-gray-600">Articles</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-indigo-600">10K+</h2>
              <p className="text-gray-600">Readers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-indigo-600">25+</h2>
              <p className="text-gray-600">Topics</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
              alt="Developer workspace"
              width={700}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}