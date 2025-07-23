"use client"; //client side routing

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  //stores current route in pathname
  const pathname = usePathname();
  //Highlights active page
  const linkClass = (path) =>
    pathname === path
      ? "text-blue-500 font-semibold "
      : "text-gray-700 hover:text-blue-500";

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">KatPaw :feet:</div>
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
