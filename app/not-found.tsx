import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-yellow-600">404</h1>
        <p className="text-4xl font-bold">Page Not Found</p>
        <p className="text-xl m-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="mt-24 px-6 py-3 text-yellow-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

