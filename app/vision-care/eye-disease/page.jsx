import Link from "next/link";

export const metadata = {
  title: "Eye Disease Management | Eyes on Central",
  description:
    "Expert diagnosis and management of glaucoma, cataracts, macular degeneration, diabetic eye disease, and other eye conditions at Eyes on Central in St. Petersburg, FL.",
};

const conditions = [
  {
    title: "Glaucoma",
    description:
      "A group of conditions that damage the optic nerve, often caused by elevated eye pressure. Early detection through regular exams is critical because glaucoma typically has no symptoms in its early stages.",
    border: "border-cobalt",
  },
  {
    title: "Cataracts",
    description:
      "Clouding of the eye's natural lens that causes blurred vision, glare sensitivity, and faded colors. We monitor cataract progression and provide surgical co-management when the time is right.",
    border: "border-yellow",
  },
  {
    title: "Macular Degeneration",
    description:
      "Age-related deterioration of the macula, the part of the retina responsible for central vision. We use advanced imaging to detect early changes and recommend treatments to slow progression.",
    border: "border-teal",
  },
  {
    title: "Diabetic Eye Disease",
    description:
      "Diabetes can damage the blood vessels in the retina, leading to diabetic retinopathy and vision loss. Annual dilated exams are essential for all patients with diabetes.",
    border: "border-cobalt",
  },
  {
    title: "Conjunctivitis & Infections",
    description:
      "Bacterial, viral, and allergic conjunctivitis (pink eye) and other ocular infections require accurate diagnosis and prompt treatment to prevent complications.",
    border: "border-yellow",
  },
  {
    title: "Keratoconus",
    description:
      "A progressive condition where the cornea thins and bulges into a cone shape, causing distorted vision. We offer specialty contact lens fittings and referrals for advanced treatments.",
    border: "border-teal",
  },
];

const diagnosticTools = [
  "Optical coherence tomography (OCT)",
  "Digital retinal photography",
  "Visual field testing",
  "Corneal topography",
  "Tonometry (eye pressure measurement)",
  "Slit lamp biomicroscopy",
];

export default function EyeDiseasePage() {
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
              <li className="text-navy font-medium">Eye Disease Management</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Vision Care
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Eye Disease Management
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Early detection and ongoing management of eye diseases are essential
            to preserving your vision. Our experienced doctors use advanced
            technology to monitor, diagnose, and treat a wide range of ocular
            conditions.
          </p>
        </div>
      </section>

      {/* ===== CONDITIONS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Conditions We Manage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team provides expert care for the following eye diseases and
              conditions, among others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition) => (
              <div
                key={condition.title}
                className={`bg-warm rounded-xl p-8 border-l-4 ${condition.border}`}
              >
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {condition.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {condition.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIAGNOSTIC TECHNOLOGY ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Advanced Diagnostic Technology
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Detecting eye disease in its earliest stages requires
                  precision instruments and experienced clinicians. Our office
                  is equipped with the latest diagnostic technology to identify
                  subtle changes before they affect your vision.
                </p>
                <p>
                  These tools allow our doctors to create detailed baseline
                  records and track changes over time, ensuring timely
                  intervention when needed.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-t-4 border-cobalt">
              <h3 className="text-xl font-bold text-navy mb-4">
                Our Diagnostic Tools
              </h3>
              <ul className="space-y-3">
                {diagnosticTools.map((tool) => (
                  <li key={tool} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cobalt mt-2 shrink-0" />
                    <span className="text-gray-600">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPROACH ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Our Approach to Eye Disease Care
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Managing eye disease is an ongoing partnership between you and
                your doctor. We take the time to explain your diagnosis, discuss
                all treatment options, and answer your questions so you can make
                informed decisions about your care.
              </p>
              <p>
                When surgical intervention or specialist referral is needed, we
                work closely with trusted ophthalmologists in the
                St.&nbsp;Petersburg area and provide comprehensive pre- and
                post-operative co-management to ensure the best possible
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Protect Your Vision for the Long Term
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Schedule an appointment for a comprehensive eye health evaluation.
            Early detection is your best defense against vision loss.
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
