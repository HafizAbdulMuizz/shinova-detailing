import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-yellow-400">
          Shinova Detailing
        </h3>

        <p className="text-gray-400 mt-3">
          Premium Car Wash & Detailing Services
        </p>

        <p className="text-gray-500 mt-4">
          © 2026 Shinova Detailing. All Rights Reserved.
        </p>
        <Link
  href="/admin"
  className="text-gray-400 hover:text-yellow-500 transition"
>
  Staff Login
</Link>
      </div>
    </footer>
  );
}