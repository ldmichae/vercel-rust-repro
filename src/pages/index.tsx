import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const buttonClass =
  "border-2 border-white px-6 py-2 hover:bg-white hover:text-black cursor-pointer";

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-8 py-32 px-16 bg-black sm:items-start">
        <h2 className="text-xl">Mixed Runtime Issue Repro</h2>
        <p>Open network tab to view API responses</p>
        <button onClick={() => fetch("/api/hello")} className={buttonClass}>
          Node API Route
        </button>
        <button onClick={() => fetch("/api/simple")} className={buttonClass}>
          Rust API Route
        </button>
      </main>
    </div>
  );
}
