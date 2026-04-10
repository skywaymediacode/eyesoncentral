import Link from "next/link";

export const metadata = {
  title: "Contact Lenses | Eyes on Central",
  description:
    "Custom-fit contact lenses at Eyes on Central in St. Petersburg, FL. Daily, monthly, toric, multifocal, and specialty contact lens fittings for every lifestyle.",
};

const lensCategories = [
  {
    title: "Daily Disposables",
    description:
      "A fresh pair every day means maximum comfort and convenience with minimal cleaning and maintenance.",
    border: "border-cobalt",
  },
  {
    title: "Monthly Lenses",
    description:
      "Cost-effective lenses designed for extended wear with proper cleaning and care routines.",
    border: "border-yellow",
  },
  {
    title: "Toric Lenses",
    description:
      "Specially designed to correct astigmatism, providing stable, clear vision throughout the day.",
    border: "border-teal",
  },
  {
    title: "Multifocal Lenses",
    description:
      "Seamless near, intermediate, and distance vision for patients with presbyopia who want freedom from reading glasses.",
    border: "border-cobalt",
  },
  {
    title: "Specialty & Scleral Lenses",
    description:
      "Advanced options for keratoconus, post-surgical eyes, and other complex corneal conditions.",
    border: "border-yellow",
  },
  {
    title: "Colored & Cosmetic Lenses",
    description:
      "Enhance or change your eye color while still enjoying clear, corrected vision.",
    border: "border-teal",
  },
];

const fittingSteps = [
  {
    step: "1",
    title: "Consultation",
    description:
      "We discuss your lifestyle, vision needs, and preferences to determine the best lens type for you.",
  },
  {
    step: "2",
    title: "Corneal Measurements",
    description:
      "Precise measurements of your cornea ensure a lens that fits comfortably and provides optimal vision.",
  },
  {
    step: "3",
    title: "Trial Lenses",
    description:
      "You try on lenses during your appointment so we can evaluate fit, comfort, and visual clarity.",
  },
  {
    step: "4",
    title: "Training & Follow-Up",
    description:
      "We teach you proper insertion, removal, and care techniques, then schedule a follow-up to confirm your lenses are working well.",
  },
];

export default function ContactsPage() {
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
              <li className="text-navy font-medium">Contact Lenses</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Vision Care
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Contact Lenses
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Experience the freedom of clear vision without glasses. Our expert
            fittings ensure every patient finds the ideal contact lens for
            their eyes and lifestyle.
          </p>
        </div>
      </section>

      {/* ===== LENS TYPES ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Contact Lens Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We carry a wide selection of contact lenses from leading
              manufacturers to suit every prescription and preference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lensCategories.map((lens) => (
              <div
                key={lens.title}
                className={`bg-warm rounded-xl p-8 border-l-4 ${lens.border}`}
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
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our Fitting Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proper contact lens fitting is essential for comfort, safety,
              and the best possible vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fittingSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl p-8 border-l-4 border-teal"
              >
                <span className="inline-block bg-teal text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4">
                  {item.step}
                </span>
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRANDS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Trusted Brands We Carry
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We work with the industry&apos;s top contact lens manufacturers to
              provide you with lenses that deliver exceptional clarity, comfort,
              and durability. Our selection includes brands such as Acuvue,
              Air Optix, Biofinity, Dailies, CooperVision, and many more.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Not sure which brand is right for you? Our doctors will help you
              find the ideal lens based on your prescription, eye health, and
              personal preferences.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Ready for Contact Lenses?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Schedule a contact lens fitting and experience the freedom of clear,
            comfortable vision every day.
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
