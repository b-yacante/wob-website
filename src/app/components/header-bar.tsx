import Link from "next/link";

export default function HeaderBar({ params }: { params: { slug?: string } }) {
  const currentPath = `/${params.slug}`;
  console.log(params.slug);
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
              currentPath === "/" ? "bg-blue-800" : ""
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
