import Link from "next/link";

export const metadata = {
  title: "Macular Degeneration | Eyes on Central",
  description:
    "Learn about age-related macular degeneration (AMD), its types, symptoms, risk factors, and treatment options at Eyes on Central in St. Petersburg, FL.",
};

const symptoms = [
  "Blurred or fuzzy central vision",
  "Straight lines appearing wavy or distorted",
  "Difficulty recognizing faces",
  "Dark or empty areas in the center of vision",
  "Colors appearing less vivid than usual",
  "Needing brighter light for reading or close work",
];

const riskFactors = [
  "Age 50 and older",
  "Family history of AMD",
  "Smoking (doubles the risk)",
  "Caucasian descent",
  "Obesity and cardiovascular disease",
  "Prolonged UV exposure without protection",
];

export default function MacularDegenerationPage() {
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
                <Link href="/vision-care/eye-disease" className="hover:underline">
                  Eye Disease
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy font-medium">Macular Degeneration</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Eye Disease Management
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Macular Degeneration
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Age-related macular degeneration (AMD) is one of the leading causes
            of vision loss in adults over 50. Early detection and proactive
            monitoring are essential to preserving your central vision.
          </p>
        </div>
      </section>

      {/* ===== WHAT IS AMD ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                What Is Age-Related Macular Degeneration?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  AMD affects the macula, the small central area of the retina
                  responsible for sharp, detailed vision. As the macula
                  deteriorates, activities like reading, driving, and recognizing
                  faces become increasingly difficult.
                </p>
                <p>
                  While AMD does not cause total blindness, the loss of central
                  vision can significantly impact daily life. Peripheral (side)
                  vision typically remains intact, but the ability to see fine
                  detail is compromised.
                </p>
              </div>
            </div>

            <div className="bg-warm rounded-2xl p-8 border-t-4 border-cobalt">
              <h3 className="text-xl font-bold text-navy mb-4">
                Two Types of AMD
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-navy mb-2">
                    Dry AMD (Atrophic)
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The most common form, accounting for about 80&ndash;90% of
                    cases. Small yellow deposits called drusen accumulate under the
                    retina, gradually thinning the macula and causing slow,
                    progressive vision loss over years.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">
                    Wet AMD (Neovascular)
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Less common but more serious. Abnormal blood vessels grow
                    beneath the retina and leak fluid or blood, causing rapid
                    damage to the macula. Wet AMD can lead to significant vision
                    loss quickly and requires prompt treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SYMPTOMS & RISK FACTORS ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border-l-4 border-teal">
              <h3 className="text-xl font-bold text-navy mb-4">
                Common Symptoms
              </h3>
              <ul className="space-y-3">
                {symptoms.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-l-4 border-cobalt">
              <h3 className="text-xl font-bold text-navy mb-4">
                Risk Factors
              </h3>
              <ul className="space-y-3">
                {riskFactors.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cobalt mt-2 shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TREATMENT & MONITORING ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Treatment &amp; Monitoring
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-warm rounded-xl p-8 border-l-4 border-cobalt">
              <h3 className="font-semibold text-xl text-navy mb-3">
                Nutritional Support
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Studies like AREDS2 have shown that specific vitamin and mineral
                supplements can slow the progression of intermediate dry AMD. We
                can recommend the right formulation for your situation.
              </p>
            </div>

            <div className="bg-warm rounded-xl p-8 border-l-4 border-yellow">
              <h3 className="font-semibold text-xl text-navy mb-3">
                Anti-VEGF Injections
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                For wet AMD, anti-VEGF medications are injected into the eye to
                slow abnormal blood vessel growth and reduce leakage. We
                coordinate with retinal specialists to ensure timely treatment.
              </p>
            </div>

            <div className="bg-warm rounded-xl p-8 border-l-4 border-teal">
              <h3 className="font-semibold text-xl text-navy mb-3">
                Ongoing Monitoring
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Regular OCT imaging and dilated exams allow us to track changes
                in the macula over time. Home monitoring with an Amsler grid
                helps detect sudden changes between office visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIFESTYLE ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Protecting Your Vision at Home
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                While not all risk factors for AMD can be controlled, lifestyle
                choices play an important role. Quitting smoking, eating a diet
                rich in leafy greens and omega-3 fatty acids, maintaining a
                healthy weight, and wearing UV-protective sunglasses can all help
                reduce your risk.
              </p>
              <p>
                If you have been diagnosed with AMD, we will teach you how to use
                an Amsler grid at home. This simple tool helps you monitor your
                central vision daily so you can alert us immediately if you
                notice any sudden changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Stay Ahead of Macular Degeneration
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Early detection gives you the best chance of preserving your vision.
            Schedule a comprehensive eye exam with our team in
            St.&nbsp;Petersburg.
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
