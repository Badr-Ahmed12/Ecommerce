import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clothora",
  description: "Clothora application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        {children}
      </body>
    </html>
  );
}

