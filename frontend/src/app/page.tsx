import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#00244A] to-[#0054AF] text-white">
      <div className="bg-white text-black p-6 rounded-2xl shadow-lg text-center space-y-4">
        <h1 className="text-xl font-bold text-blue-600 hover:underline">
          Hi, I&apos;m a Frontend Developer
        </h1>
        <p className="text-gray-600 text-base">
          I craft responsive, modern web application <strong>Next.js</strong>{" "}
          and <strong>TailwindCSS</strong>
        </p>
        <div>
          <p>
            Email:{" "}
            <a
              href="mailto:mdsajalali2020@gmail.com"
              className="text-blue-500 hover:underline"
            >
              mdsajalali2020@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:01315191997" className="text-blue-500 hover:underline">
              01315191997
            </a>
          </p>
        </div>
        <div className="space-x-4">
          <Link
            href="/users"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            View Users
          </Link>
        </div>
      </div>
    </main>
  );
}
