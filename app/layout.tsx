import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-gray-50  dark:bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}

