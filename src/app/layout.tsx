import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import HeaderBar from "./components/header-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WoB Sofware",
  description: "Development Game Studio",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string };
}>) {
  return (
    <html>
      <Suspense fallback={<Loading />}>
        <body className={`${inter.className} bg-blue-500 text-white`}>
          <HeaderBar params={params} />
          {children}
        </body>
      </Suspense>
    </html>
  );
}
