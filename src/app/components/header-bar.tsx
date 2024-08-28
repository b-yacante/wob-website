"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderBar() {
  const currentPath = usePathname();
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-10">
        <Link href="/news" className="text-xl font-bold">
          Logo
        </Link>
        <nav className="mx-10 space-x-10">
          <Link
            href="/news"
            className={`hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded ${
              currentPath === "/news" ? "bg-blue-800" : ""
            }`}
          >
            News
          </Link>
          <Link
            href="games"
            className={`hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded ${
              currentPath === "/games" ? "bg-blue-800" : ""
            }`}
          >
            Games
          </Link>
          <Link
            href="/about"
            className={`hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded ${
              currentPath === "/about" ? "bg-blue-800" : ""
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
