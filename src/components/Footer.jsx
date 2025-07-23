"use client";

import Link from "next/link"; //ensure page navigation without reloads

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700  border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
        {/* Column 1: Logo & Name */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">KatPaw 🐾</h2>
          <p className="mt-2 text-sm">Where every paw finds a loving home.</p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/adopt" className="hover:text-blue-500">
                Adopt
              </Link>
            </li>
            <li>
              <Link href="/my-adoptions" className="hover:text-blue-500">
                My Adoptions
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p className="text-sm">Email: katpaw@adopt.com</p>
          <p className="text-sm">Phone: +254 700 000 000</p>
          <p className="text-sm">Location: Nairobi, Kenya</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t">
        &copy; 2025 KatPaw. All rights reserved.
      </div>
    </footer>
  );
}
