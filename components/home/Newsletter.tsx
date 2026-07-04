export default function Newsletter() {
  return (
    <section className="mx-auto my-24 max-w-6xl rounded-3xl bg-black px-8 py-20 text-center text-white">
      <p className="text-indigo-400 font-semibold uppercase tracking-widest">
        Newsletter
      </p>

      <h2 className="mt-4 text-5xl font-bold">
        Stay Updated
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
        Subscribe to receive the latest articles on React, Next.js,
        TypeScript, UI Design and modern frontend development.
      </p>

      <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-full px-6 py-4 text-black outline-none"
        />

        <button className="rounded-full bg-indigo-600 px-8 py-4 font-semibold transition hover:bg-indigo-700">
          Subscribe
        </button>
      </div>
    </section>
  );
}