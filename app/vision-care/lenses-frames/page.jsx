import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Designer Lenses & Frames | Eyes on Central",
  description:
    "Browse designer frames and premium lenses at Eyes on Central in St. Petersburg, FL. Featuring Gucci, Ray-Ban, Oakley, Ray-Ban Meta smart glasses, and Nuance Audio.",
};

const brands = [
  "Gucci",
  "Ray-Ban",
  "Oakley",
  "Ray-Ban Meta",
  "Nuance Audio",
];

const lensTypes = [
  {
    title: "Single Vision",
    description:
      "Designed for one field of vision, ideal for patients who need correction for distance or near vision.",
    border: "border-cobalt",
  },
  {
    title: "Progressive Lenses",
    description:
      "Seamless transition between distance, intermediate, and near vision without visible lines on the lens.",
    border: "border-yellow",
  },
  {
    title: "Blue Light Filtering",
    description:
      "Reduce digital eye strain and filter harmful blue light from screens and artificial lighting.",
    border: "border-teal",
  },
  {
    title: "Photochromic Lenses",
    description:
      "Automatically adjust from clear indoors to tinted outdoors, providing UV protection and convenience.",
    border: "border-cobalt",
  },
  {
    title: "Polarized Sunglasses",
    description:
      "Eliminate glare from reflective surfaces for sharper, more comfortable vision in bright conditions.",
    border: "border-yellow",
  },
  {
    title: "Smart & Audio Frames",
    description:
      "Ray-Ban Meta and Nuance Audio frames combine stylish design with built-in speakers, cameras, and AI features.",
    border: "border-teal",
  },
];

export default function LensesFramesPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-[#E8EFFE] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-cobalt">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/vision-care" className="hover:underline">
                  Vision Care
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy font-medium">Lenses &amp; Frames</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Vision Care
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Designer Lenses &amp; Frames
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Find the perfect combination of style and clarity in our curated
            optical collection. From classic designs to cutting-edge smart
            eyewear, we have something for everyone.
          </p>
        </div>
      </section>

      {/* ===== SHOWROOM & BRANDS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Our Optical Showroom
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Step into our beautifully designed optical showroom on Central
                  Avenue and explore hundreds of frames from the world&apos;s
                  most sought-after brands. Our knowledgeable opticians will
                  help you find the perfect fit for your face shape, lifestyle,
                  and prescription.
                </p>
                <p>
                  Whether you prefer timeless elegance, sporty performance, or
                  the latest smart eyewear technology, our collection is
                  carefully curated to offer exceptional quality and style at
                  every price point.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-navy mb-3">
                  Featured Brands
                </h3>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <span
                      key={brand}
                      className="bg-warm text-navy px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/interior_optical.webp"
                alt="Optical showroom"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== LENS TYPES ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Premium Lens Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a full range of lens types and coatings to match your
              vision needs and daily activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lensTypes.map((lens) => (
              <div
                key={lens.title}
                className={`bg-white rounded-xl p-8 border-l-4 ${lens.border}`}
              >
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {lens.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {lens.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FITTING PROCESS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Expert Frame Fitting
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Choosing the right frames involves more than just picking a
                style you love. Our opticians consider your face shape, skin
                tone, lifestyle, and prescription to recommend frames that look
                great and perform flawlessly.
              </p>
              <p>
                Every pair is professionally adjusted for a precise, comfortable
                fit. We also offer ongoing adjustments and maintenance to keep
                your eyewear in top condition for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Find Your Perfect Pair
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Visit our optical showroom or schedule an appointment to explore our
            collection and receive expert guidance from our team.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow text-navy rounded-full px-8 py-3 font-semibold hover:opacity-90 transition"
          >
            Schedule an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
