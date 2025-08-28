"use client";

import Link from "next/link";

export default function ErrorPage404() {
  return (
    <div className="max-w-3xl flex flex-col mx-auto size-full mt-8">
      {/* ========== MAIN CONTENT ========== */}
      <main id="content">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
            404
          </h1>
          <p className="mt-3 text-gray-600 dark:text-neutral-400">
            Opps, Maaf halaman yang anda cari belum tersedia
          </p>
          <p className="text-gray-600 dark:text-neutral-400">
            Kami akan segera melakukan pembaharuan untuk kenyamanan dan
            pengalaman explorasi lebih baik
          </p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="/"
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Kembali Ke Beranda
            </Link>
          </div>
        </div>
      </main>
      {/* ========== END MAIN CONTENT ========== */}
    </div>
  );
}
