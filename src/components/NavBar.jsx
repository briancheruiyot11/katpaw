"use client"; //client side routing

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  //stores current route in pathname
  const pathname = usePathname();
  //Highlights active page
  const linkClass = (path) =>
    pathname === path
      ? "text-purple-800 font-semibold "
      : "text-gray-800 hover:text-purple-600";

  return (
    <nav className="sticky top-0 z-50 bg-lavender shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-purple-800">KatPaw 🐾</div>
      <div className="space-x-6">
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>
        <Link href="/adopt" className={linkClass("/adopt")}>
          Adopt
        </Link>
        <Link href="/my-adoptions" className={linkClass("/my-adoptions")}>
          My Adoptions
        </Link>
        <Link href="/about" className={linkClass("/about")}>
          About
        </Link>
      </div>
    </nav>
  );
}
