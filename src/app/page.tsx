"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <header className="w-full py-6 px-8 bg-gray-800 shadow-lg">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">
            my<span className="text-green-500">.money</span>
          </h1>
          <nav className="space-x-6">
            <Link
              href="/auth/login"
              className="hover:text-emerald-400 transition"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-24 bg-gradient-to-r from-emerald-500 to-blue-600 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight mb-6">
          Take Control of Your Finances
        </h1>
        <p className="text-2xl font-light mb-8 max-w-2xl mx-auto">
          Experience complete privacy with manual tracking. Benefit from
          automated tax calculations, budgeting tools, and insightful reports,
          all designed to empower your financial journey.
        </p>
        <Link
          href="/auth/register"
          className="bg-white text-emerald-600 hover:text-white hover:bg-emerald-600 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          Get Started for Free
        </Link>
      </section>

      {/* Features Section */}
      <section className="px-4 py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-emerald-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M80 32C35.8 32 0 67.8 0 112L0 400c0 44.2 35.8 80 80 80l352 0c44.2 0 80-35.8 80-80l0-224c0-44.2-35.8-80-80-80L112 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48L80 448c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l384 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 32zM384 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">Budget Management</h3>
            <p className="text-gray-400">
              Create, adjust, and manage your budgets effortlessly. Set spending
              limits to achieve your financial goals and track your progress in
              real time.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-yellow-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M32 184c35.3 0 64-28.7 64-64l0-.5c-18.5-1.4-37.1-4.4-55.8-9.5c-2.2-.6-4.9-.2-6.9 1.2c-.9 .6-1.2 1.1-1.3 1.2c0 0 0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 .1L32 184zm0 192l0 46.3c0 6.8 3.7 10.4 6.2 11.3C57.3 440.8 76.5 445 96 446.8l0-6.8c0-35.3-28.7-64-64-64zm0-32c53 0 96 43 96 96l0 8c44.7-1 91.1-11.7 141.3-24.5c4.3-1.1 8.6-2.2 13-3.3c51.8-13.3 108-27.6 165.7-28.6c.2-52.8 43.1-95.6 96-95.6l0-128c-53 0-96-43-96-96l0-8c-44.7 1-91.1 11.7-141.3 24.5c-4.3 1.1-8.6 2.2-13 3.3c-51.8 13.3-108 27.6-165.7 28.6c-.2 52.8-43.1 95.6-96 95.6l0 128zm503.8 58c2.2 .6 4.9 .2 6.9-1.2c.9-.6 1.2-1.1 1.3-1.2c0 0 0 0 0 0l0-.1 0-71.5c-35.3 0-64 28.7-64 64l0 .5c18.5 1.4 37.1 4.4 55.8 9.5zM480 72c0 35.3 28.7 64 64 64l0-46.3c0-6.8-3.7-10.4-6.2-11.3C518.7 71.2 499.5 67 480 65.2l0 6.8zM0 422.3L0 112.5C0 88.6 25.6 72.8 48.7 79.1c79.8 21.8 159.6 1.5 239.3-18.9c87-22.2 174-44.4 261-11.9c16.9 6.3 27 23.2 27 41.3l0 309.9c0 23.9-25.6 39.7-48.7 33.4c-79.8-21.8-159.6-1.5-239.3 18.9c-87 22.2-174 44.4-261 11.9c-16.9-6.3-27-23.2-27-41.3zM224 256c0 47 31.3 80 64 80s64-33 64-80s-31.3-80-64-80s-64 33-64 80zm64-112c55.6 0 96 53 96 112s-40.4 112-96 112s-96-53-96-112s40.4-112 96-112z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">Expense Tracking</h3>
            <p className="text-gray-400">
              Keep an eye on your spending habits and categorize your expenses.
              Identify trends and make informed decisions to improve your
              financial health.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-pink-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M352 160l0 288c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-288 320 0zm0-32L32 128l0-64c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 64zm32 0l0-64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64l0 64 0 16 0 16L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288 0-16 0-16zM72 224a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72-72a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72-72a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM264 416a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zM80 400c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 400z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">Tax Calculations</h3>
            <p className="text-gray-400">
              Automatically calculate your taxes with our built-in tools. Choose
              your country’s tax brackets and let our app do the math for you.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-indigo-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48L0 400c0 44.2 35.8 80 80 80l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 448c-26.5 0-48-21.5-48-48L32 48zM475.3 155.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L320 265.4l-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 214.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0l144-144z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">Financial Insights</h3>
            <p className="text-gray-400">
              Get detailed reports on your financial activities. Visualize
              income, expenses, and savings to make better financial decisions.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-green-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M16 32c8.8 0 16 7.2 16 16l0 352c0 26.5 21.5 48 48 48l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 480c-44.2 0-80-35.8-80-80L0 48c0-8.8 7.2-16 16-16zM128 144c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zm16 80l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-288 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">Customizable Charts</h3>
            <p className="text-gray-400">
              Create and view various customizable graphs and charts to analyze
              your financial data at a glance. Tailor them to your preferences
              for a more insightful experience.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-blue-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M128 128l0 64 192 0 0-64c0-53-43-96-96-96s-96 43-96 96zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 16 0c44.2 0 80 35.8 80 80l0 160c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 272c0-44.2 35.8-80 80-80l16 0zM32 272l0 160c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48L80 224c-26.5 0-48 21.5-48 48z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">Data Privacy</h3>
            <p className="text-gray-400">
              Your data is yours. We ensure complete privacy by allowing manual
              entry without linking to your bank accounts. Feel secure while
              managing your finances.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-24 bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-emerald-400">
            What Our Users Say
          </h2>
          <blockquote className="text-2xl italic mb-8 text-gray-300">
            "This app has completely transformed the way I manage my finances!
            It's simple, intuitive, and effective."
          </blockquote>
          <p className="text-gray-400">- Happy User</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-10 bg-gray-900 text-center text-gray-400">
        <div className="mb-6 space-x-6">
          <Link
            href="/auth/login"
            className="hover:text-emerald-400 transition"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="hover:text-emerald-400 transition"
          >
            Register
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} my.money. All rights reserved.</p>
      </footer>
    </main>
  );
}
