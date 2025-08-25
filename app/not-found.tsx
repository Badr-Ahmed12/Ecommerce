import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#F7F7F7]">
      <div className="text-center">
        <h1 className="text-9xl font-extralight text-black">404</h1>
        <p className="text-4xl font-bold text-[#222]">Page Not Found</p>
        <p className="text-xl m-10 text-[#666]">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="mt-24 px-6 py-3  hover:bg-[#F5F5F5] transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

