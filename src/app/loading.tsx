"use client";
import Image from "next/image";
export default function Loading() {
  return (
    <body className="bg-blue-600 h-screen w-screen grid place-items-center">
      <Image
        src="/vercel.svg"
        alt="Logo"
        className="dark:invert"
        width={100}
        height={100}
        priority
      />
    </body>
  );
}
