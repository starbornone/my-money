"use client";

import Link from "next/link";

export default function RegisterSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Registration Successful
        </h2>
        <p className="text-gray-400 mb-6">
          Please check your email to verify your account.
        </p>
        <Link
          href="/auth/login"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}
