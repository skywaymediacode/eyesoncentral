import Link from "next/link";

export const metadata = {
  title: "Essilor Stellest Lenses | Eyes on Central",
  description:
    "Essilor Stellest spectacle lenses with H.A.L.T. technology for myopia control in children. Learn how they work and if your child is a candidate at Eyes on Central in St. Petersburg, FL.",
};

const benefits = [
  "Clinically proven to slow myopia progression by 67% compared to standard single-vision lenses when worn at least 12 hours a day",
  "No contact lens handling required, ideal for younger or less contact-lens-ready children",
  "Clear, sharp vision with the full correction your child needs",
  "Looks and feels like regular glasses, so children adapt easily",
  "UV protection built into the lens material",
  "Durable and scratch-resistant for active lifestyles",
];

const haltFeatures = [
  {
    title: "1,021 Invisible Lenslets",
    description:
      "The lens surface contains a constellation of tiny lenslets arranged in rings. These are invisible to the eye and do not affect the cosmetic appearance of the glasses.",
  },
  {
    title: "Volume of Myopic Defocus",
    description:
      "Each lenslet creates a small volume of signal in front of the retina. This creates a consistent signal across the lens that tells the eye to slow its growth.",
  },
  {
    title: "Sharp Central Vision",
    description:
      "The center of the lens provides your child's full distance prescription, ensuring clear, comfortable vision for school, sports, and daily activities.",
  },
];

export default function StellestellestPage() {
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
              <li>
                <Link
                  href="/vision-care/myopia-control"
                  className="hover:underline"
                >
                  Myopia Control
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy font-medium">Stellest Lenses</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Myopia Control
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Essilor Stellest Lenses
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Stellest lenses by Essilor use breakthrough H.A.L.T. technology to
            slow myopia progression in children while delivering crisp, clear
            vision &mdash; all in a pair of everyday glasses.
          </p>
        </div>
      </section>

      {/* ===== WHAT ARE STELLEST ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              What Are Stellest Lenses?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Stellest is an innovative spectacle lens designed by Essilor
                specifically for myopia management in children. It combines a
                full optical correction zone for clear vision with a
                proprietary H.A.L.T. (Highly Aspherical Lenslet Target)
                technology that creates a signal to slow the elongation of the
                eye.
              </p>
              <p>
                For families looking for a glasses-based approach to myopia
                control, Stellest offers a clinically proven option that fits
                seamlessly into a child&apos;s daily routine &mdash; no contact
                lenses or eye drops required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== H.A.L.T. TECHNOLOGY ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              H.A.L.T. Technology
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Highly Aspherical Lenslet Target technology is the science behind
              Stellest&apos;s myopia-slowing capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {haltFeatures.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 border-l-4 border-teal"
              >
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Benefits for Your Child
              </h2>
              <ul className="space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-warm rounded-2xl p-8 border-t-4 border-cobalt">
              <h3 className="text-xl font-bold text-navy mb-4">
                Stellest vs. Standard Lenses
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Standard single-vision lenses correct your child&apos;s
                  vision but do nothing to address the progression of myopia.
                  Each year, the prescription often gets stronger.
                </p>
                <p>
                  Stellest lenses look and function like regular glasses while
                  actively working to slow eye growth. Your child gets clear
                  vision with the added benefit of myopia management built into
                  every pair.
                </p>
                <p>
                  Clinical studies showed that children wearing Stellest lenses
                  for at least 12 hours per day experienced 67% slower myopia
                  progression compared to those wearing standard single-vision
                  lenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CANDIDACY ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Is Your Child a Candidate?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Stellest lenses are an excellent option for children who have
                  been diagnosed with myopia and whose prescriptions are
                  progressing. They are especially well suited for children who
                  prefer glasses over contact lenses or who are too young for
                  contact lens wear.
                </p>
                <p>
                  For best results, the lenses should be worn consistently for
                  at least 12 hours per day. Our doctors will discuss wear time
                  expectations and help determine if Stellest is the right fit
                  for your child&apos;s needs and lifestyle.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Getting Started
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The process begins with a comprehensive myopia evaluation,
                  including measurement of your child&apos;s prescription and
                  axial length. Our doctors will review the results and discuss
                  all available treatment options with your family.
                </p>
                <p>
                  If Stellest is the recommended approach, we will fit the
                  lenses into a frame your child loves from our optical
                  collection. Follow-up visits are scheduled to track
                  prescription changes and eye growth over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            A Glasses-Based Solution for Myopia Control
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Find out if Essilor Stellest lenses are the right choice for your
            child. Schedule a myopia evaluation at Eyes on Central.
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
