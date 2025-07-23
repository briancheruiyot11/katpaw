import React from "react";

export default function AboutPage() {
  return (
    <main className=" bg-gray-100 px-4 md:px-10 py-16">
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-gray-800 text-5xl font-extrabold mb-4">
          About KatPaw 🐾
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Where every pawfinds a loving home.
        </p>
      </section>

      {/* Story Section */}
      <section className="text-gray-700 max-w-4xl mx-auto space-y-6 text-lg leading-relaxed mb-20">
        <p>
          <strong>KatPaw</strong> was founded in 2024 as a grassroots initiative
          to rescue, rehabilitate, and rehome stray and abandoned cats. What
          began in a humble backyard has become a trusted sanctuary that’s
          helped over <strong>300 cats</strong> find loving homes.
        </p>
        <p>
          Today, CatPaw is powered by passionate volunteers, adopters, and
          animal lovers who believe that every cat deserves a life filled with
          care, safety, and affection.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gray-700 rounded-xl shadow-md p-6">
          <h2 className="text-2xl text-gray-400 font-semibold mb-3 text-center">
            Our Mission
          </h2>
          <p>
            At KatPaw, our mission is simple but sacred: to offer every cat the
            love we would want for our own. We rescue the forgotten, heal the
            wounded, and match each soul with a heart that sees them — not for
            what they've been through, but for who they are. Every purr, every
            pawprint, is a promise that they are safe now, and they are home.
          </p>
        </div>
        <div className="bg-gray-700 rounded-xl shadow-md p-6">
          <h2 className="text-2xl text-gray-400 font-semibold mb-3 text-center">
            Our Vision
          </h2>
          <p>
            We envision a world where every whisker has worth, every tail finds
            a trail home, and no paw is left behind. At KatPaw, we dream of
            communities where hearts are open, homes have room, and cats aren’t
            just rescued but they’re re-written into love stories.
          </p>
        </div>
      </section>

      {/* Adoption Process */}
      <section className="max-w-4xl mx-auto mb-20">
        <h1 className="text-gray-800 text-4xl text-center font-bold mb-6">
          How to Adopt
        </h1>
        <br />
        <h3 className="text-gray-800  text-2xl font-bold mb-4">
          Adoption Process
        </h3>
        <ol className="list-decimal list-inside space-y-3 text-lg text-darkgray-700 mb-10">
          <li className="flex items-start gap-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              1
            </span>
            <div>
              <h3 className="font-semibold text-gray-700 text-lg">
                Browse Available Cats
              </h3>
              <p className="text-gray-400  text-sm">
                Look through our catalog of cats waiting for adoption.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              2
            </span>
            <div>
              <h3 className="font-semibold text-gray-700 text-lg">
                Submit Application
              </h3>
              <p className="text-gray-400 text-sm">
                Fill out our adoption form with honest and clear details.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              3
            </span>
            <div>
              <h3 className="font-semibold text-gray-700 text-lg">
                Application Review
              </h3>
              <p className="text-gray-400 text-sm">
                Our team reviews your application (typically within 48 hours).
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              4
            </span>
            <div>
              <h3 className="font-semibold text-gray-700 text-lg">
                Meet & Greet
              </h3>
              <p className="text-gray-400 text-sm">
                Schedule a time to meet your potential new cat.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              5
            </span>
            <div>
              <h3 className="font-semibold text-gray-700 text-lg">
                Finalize Adoption
              </h3>
              <p className="text-gray-400 text-sm">
                Complete paperwork, pay the fee, and welcome your cat home!
              </p>
            </div>
          </li>
        </ol>
        <h3 className="text-gray-800 text-xl font-semibold mb-2">
          Before You Adopt
        </h3>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-purple-600 text-lg">〽️</span>
            <span>We may call you to verify your application details.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 text-lg">〽️</span>
            <span>You must provide a trusted local vet’s contact.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 text-lg">〽️</span>
            <span>
              Post-adoption visits are scheduled to check cat wellbeing.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 text-lg">〽️</span>
            <span>
              If mistreatment is found or info is falsified, adoption will be
              revoked with no refunds.
            </span>
          </li>
        </ul>
      </section>
    </main>
  );
}
