import Link from "next/link";

export const metadata = {
  title: "Myopia Control | Eyes on Central",
  description:
    "Slow myopia progression in children with specialized treatments at Eyes on Central in St. Petersburg, FL. MiSight contact lenses, Stellest spectacle lenses, and more.",
};

const approaches = [
  {
    title: "MiSight Contact Lenses",
    description:
      "FDA-approved daily disposable contact lenses specifically designed to slow myopia progression in children ages 8 to 12. MiSight uses ActivControl technology to provide clear vision while managing eye growth.",
    href: "/vision-care/myopia-control/misight",
    border: "border-cobalt",
  },
  {
    title: "Stellest Spectacle Lenses",
    description:
      "Innovative spectacle lenses by Essilor featuring H.A.L.T. technology, clinically proven to slow myopia progression by 67% compared to standard single vision lenses. An excellent option for children who prefer glasses.",
    href: "/vision-care/myopia-control/stellest",
    border: "border-yellow",
  },
  {
    title: "Atropine Eye Drops",
    description:
      "Low-dose atropine drops used at bedtime have been shown to slow myopia progression in clinical studies. This option can be used alone or in combination with other treatments.",
    border: "border-teal",
  },
  {
    title: "Orthokeratology (Ortho-K)",
    description:
      "Specially designed rigid contact lenses worn overnight to gently reshape the cornea, providing clear vision during the day without glasses or contacts.",
    border: "border-cobalt",
  },
];

const riskFactors = [
  "One or both parents are nearsighted",
  "Significant time spent on near work (reading, screens)",
  "Limited outdoor activity",
  "Myopia diagnosed before age 10",
  "Rapid prescription changes year over year",
];

export default function MyopiaControlPage() {
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
              <li className="text-navy font-medium">Myopia Control</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Vision Care
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Myopia Control
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Myopia (nearsightedness) is increasing rapidly among children. Our
            specialized myopia management programs help slow progression and
            protect your child&apos;s long-term vision.
          </p>
        </div>
      </section>

      {/* ===== WHY IT MATTERS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Why Myopia Control Matters
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Myopia is more than just needing stronger glasses each year.
                  As the eye elongates, the risk of serious conditions later in
                  life increases, including retinal detachment, glaucoma,
                  cataracts, and macular degeneration.
                </p>
                <p>
                  The earlier myopia management begins, the more effectively we
                  can slow progression and reduce these long-term risks. Our
                  doctors work with each family to choose the best approach for
                  their child.
                </p>
              </div>
            </div>

            <div className="bg-warm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy mb-4">
                Risk Factors for Myopia Progression
              </h3>
              <ul className="space-y-3">
                {riskFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cobalt mt-2 shrink-0" />
                    <span className="text-gray-600">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TREATMENT OPTIONS ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our Treatment Approaches
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer multiple evidence-based options for myopia management,
              tailored to your child&apos;s age, lifestyle, and prescription.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approaches.map((approach) => (
              <div
                key={approach.title}
                className={`bg-white rounded-xl p-8 border-l-4 ${approach.border}`}
              >
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {approach.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {approach.description}
                </p>
                {approach.href && (
                  <Link
                    href={approach.href}
                    className="text-cobalt text-sm font-semibold hover:underline"
                  >
                    Learn more &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Protect Your Child&apos;s Vision
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Early intervention is key. Schedule a myopia evaluation to learn
            which treatment options are best for your child.
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
