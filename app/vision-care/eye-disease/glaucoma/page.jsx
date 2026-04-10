import Link from "next/link";

export const metadata = {
  title: "Glaucoma | Eyes on Central",
  description:
    "Learn about glaucoma types, risk factors, diagnostic testing, and treatment options at Eyes on Central in St. Petersburg, FL. Early detection prevents vision loss.",
};

const types = [
  {
    title: "Open-Angle Glaucoma",
    description:
      "The most common type, developing slowly as the drainage angle of the eye becomes less efficient over time. Eye pressure rises gradually and damages the optic nerve without noticeable symptoms until significant vision loss occurs.",
    border: "border-cobalt",
  },
  {
    title: "Angle-Closure Glaucoma",
    description:
      "Occurs when the iris blocks the drainage angle suddenly, causing a rapid spike in eye pressure. This is a medical emergency with symptoms including severe eye pain, headache, nausea, and blurred vision.",
    border: "border-yellow",
  },
  {
    title: "Normal-Tension Glaucoma",
    description:
      "Optic nerve damage occurs even though eye pressure remains within normal range. This type requires careful monitoring and is often detected through optic nerve imaging and visual field testing.",
    border: "border-teal",
  },
  {
    title: "Secondary Glaucoma",
    description:
      "Develops as a result of another eye condition, injury, medication (such as long-term steroid use), or systemic disease. Treatment addresses both the underlying cause and the elevated pressure.",
    border: "border-cobalt",
  },
];

const riskFactors = [
  "Age over 60 (over 40 for African Americans)",
  "Family history of glaucoma",
  "Elevated intraocular pressure",
  "African American, Hispanic, or Asian heritage",
  "Thin corneas",
  "High myopia (nearsightedness)",
  "History of eye injury or surgery",
  "Long-term corticosteroid use",
];

const diagnosticTests = [
  {
    name: "Tonometry",
    detail: "Measures intraocular pressure to identify elevated levels.",
  },
  {
    name: "Optical Coherence Tomography (OCT)",
    detail:
      "Provides detailed cross-section images of the optic nerve and retinal nerve fiber layer.",
  },
  {
    name: "Visual Field Testing",
    detail:
      "Maps peripheral vision to detect blind spots caused by optic nerve damage.",
  },
  {
    name: "Gonioscopy",
    detail:
      "Examines the drainage angle of the eye to determine glaucoma type.",
  },
  {
    name: "Pachymetry",
    detail:
      "Measures corneal thickness, which can influence pressure readings.",
  },
];

export default function GlaucomaPage() {
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
              <li className="text-navy font-medium">Glaucoma</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Eye Disease Management
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Glaucoma
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Known as &ldquo;the silent thief of sight,&rdquo; glaucoma damages
            the optic nerve gradually and often without warning. Regular eye
            exams are the only reliable way to catch it early and protect your
            vision.
          </p>
        </div>
      </section>

      {/* ===== WHAT IS GLAUCOMA ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Understanding Glaucoma
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Glaucoma is a group of eye diseases that damage the optic
                nerve, the vital connection between your eye and brain. In
                most cases, this damage is caused by abnormally high pressure
                inside the eye, though it can also occur at normal pressures.
              </p>
              <p>
                Because glaucoma typically causes no pain and no noticeable
                vision changes in its early stages, many people are unaware
                they have it until permanent damage has occurred. Vision lost
                to glaucoma cannot be restored, which is why early detection
                through comprehensive eye exams is so important.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TYPES ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Types of Glaucoma
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              There are several forms of glaucoma, each with different causes
              and progression patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {types.map((type) => (
              <div
                key={type.title}
                className={`bg-white rounded-xl p-8 border-l-4 ${type.border}`}
              >
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RISK FACTORS & DIAGNOSTIC TESTS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Are You at Risk?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Certain factors increase your likelihood of developing glaucoma.
                If any of these apply to you, regular screening is especially
                important.
              </p>
              <ul className="space-y-3">
                {riskFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cobalt mt-2 shrink-0" />
                    <span className="text-gray-600">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-warm rounded-2xl p-8 border-t-4 border-teal">
              <h3 className="text-xl font-bold text-navy mb-4">
                How We Diagnose Glaucoma
              </h3>
              <div className="space-y-5">
                {diagnosticTests.map((test) => (
                  <div key={test.name}>
                    <h4 className="font-semibold text-navy mb-1">
                      {test.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {test.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TREATMENT ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Treatment Options
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border-l-4 border-cobalt">
              <h3 className="font-semibold text-xl text-navy mb-3">
                Prescription Eye Drops
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Medicated eye drops are typically the first line of treatment,
                working to lower intraocular pressure by either reducing fluid
                production or improving drainage within the eye.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-yellow">
              <h3 className="font-semibold text-xl text-navy mb-3">
                Laser Therapy
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Procedures like selective laser trabeculoplasty (SLT) can
                improve the eye&apos;s drainage system to reduce pressure. We
                coordinate with glaucoma specialists when laser treatment is
                indicated.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-teal">
              <h3 className="font-semibold text-xl text-navy mb-3">
                Surgical Referral
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                When drops and laser therapy are not sufficient, surgical
                options such as trabeculectomy or MIGS (minimally invasive
                glaucoma surgery) may be recommended. We provide co-management
                before and after surgery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Don&apos;t Wait for Symptoms
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Glaucoma can steal your vision before you notice anything is wrong.
            Schedule a comprehensive eye exam at Eyes on Central to protect your
            sight.
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
