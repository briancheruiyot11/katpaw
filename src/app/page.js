"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className=" max-w-5xl mx-auto px-6 py-12">
      {/* LOGO SECTION */}
      <section className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">
          KatPaw 🐾
        </h1>
        <p className="text-darkgray-600 text-lg">
          Where every paw finds a loving home.
        </p>
      </section>

      {/* OUR FIRST RESCUE */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
        {/* IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?_gl=1*vbnq66*_ga*MTIzNjg0MDE5My4xNzUzMTg3Nzc1*_ga_8JE65Q40S6*czE3NTMxODc3NzQkbzEkZzEkdDE3NTMxODgxOTckajIwJGwwJGgw"
            alt="Our first rescue"
            width={1500}
            height={1000}
            className="rounded-xl shadow-md object-cover w-full h-auto"
          />
        </div>

        {/* STORY */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our First Rescue
          </h2>
          <p className="text-darkgray-700 mb-4">
            Meet Bella, a brave little soul we found hiding under a car during
            the rainy season. Malnourished and scared, she slowly found trust
            again in the warmth of our foster home. Today, she’s healthy,
            playful, and looking for a forever family.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Find your purr-fect companion
          </h2>
          <p className="text-darkgray-700 mb-4">
            Adopt a cat today and change two lives forever. <br />
            {/**Adopt now button redirects to adopt page */}
            <Link href="/adopt">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-6">
                Adopt Now
              </button>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
