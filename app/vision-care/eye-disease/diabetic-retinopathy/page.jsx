import Link from "next/link";

export const metadata = {
  title: "Diabetic Retinopathy | Eyes on Central",
  description:
    "Diabetic retinopathy information, stages, treatment options, and the importance of annual diabetic eye exams at Eyes on Central in St. Petersburg, FL.",
};

const stages = [
  {
    stage: "Mild Non-Proliferative",
    description:
      "Small areas of balloon-like swelling (microaneurysms) develop in the retina's blood vessels. Vision is usually unaffected at this stage, but monitoring is essential.",
    border: "border-cobalt",
  },
  {
    stage: "Moderate Non-Proliferative",
    description:
      "As the disease progresses, some blood vessels that nourish the retina become blocked. The retina begins to receive less oxygen and nutrients.",
    border: "border-yellow",
  },
  {
    stage: "Severe Non-Proliferative",
    description:
      "More blood vessels are blocked, depriving significant areas of the retina of blood supply. The body signals for new blood vessels to grow.",
    border: "border-teal",
  },
  {
    stage: "Proliferative Diabetic Retinopathy",
    description:
      "The most advanced stage. New, fragile blood vessels grow along the retina and into the vitreous. These vessels can leak blood, cause scar tissue, and lead to retinal detachment and severe vision loss.",
    border: "border-cobalt",
  },
];

const warningSignals = [
  "Spots or dark strings floating in your vision (floaters)",
  "Blurred or fluctuating vision",
  "Dark or empty areas in your field of vision",
  "Difficulty seeing at night",
  "Colors appearing faded or washed out",
  "Vision loss",
];

export default function DiabeticRetinopathyPage() {
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
              <li className="text-navy font-medium">Diabetic Retinopathy</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Eye Disease Management
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Diabetic Retinopathy
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Diabetes can silently damage the blood vessels in your retina,
            leading to vision loss if left undetected. Annual dilated eye exams
            are critical for every person living with diabetes.
          </p>
        </div>
      </section>

      {/* ===== WHAT IS IT ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                What Is Diabetic Retinopathy?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Diabetic retinopathy is a complication of type&nbsp;1 and
                  type&nbsp;2 diabetes that affects the eyes. Chronically high
                  blood sugar levels damage the tiny blood vessels in the retina,
                  causing them to leak, swell, or close off entirely.
                </p>
                <p>
                  In advanced stages, new abnormal blood vessels grow on the
                  surface of the retina. These fragile vessels can bleed into the
                  eye and cause scar tissue that may lead to retinal detachment.
                </p>
                <p>
                  Diabetic retinopathy can develop in anyone who has diabetes.
                  The longer you have diabetes and the less controlled your blood
                  sugar is, the higher your risk.
                </p>
              </div>
            </div>

            <div className="bg-warm rounded-2xl p-8 border-t-4 border-yellow">
              <h3 className="text-xl font-bold text-navy mb-2">
                Why Annual Exams Matter
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Diabetic retinopathy often has no symptoms in its early stages.
                By the time you notice vision changes, significant damage may
                have already occurred.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A comprehensive dilated eye exam allows your doctor to see the
                retina in detail, detect early changes, and begin treatment
                before vision loss occurs.
              </p>
              <p className="font-semibold text-navy">
                The American Diabetes Association recommends an annual dilated
                eye exam for all diabetic patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STAGES ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Stages of Diabetic Retinopathy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diabetic retinopathy progresses through four stages, each with
              increasing severity and risk to your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stages.map((item, index) => (
              <div
                key={item.stage}
                className={`bg-white rounded-xl p-8 border-l-4 ${item.border}`}
              >
                <span className="text-sm font-semibold text-cobalt">
                  Stage {index + 1}
                </span>
                <h3 className="font-semibold text-xl text-navy mb-3 mt-1">
                  {item.stage}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WARNING SIGNS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Warning Signs to Watch For
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                While early diabetic retinopathy may produce no symptoms, you
                should contact our office promptly if you experience any of the
                following changes in your vision.
              </p>
              <ul className="space-y-3">
                {warningSignals.map((signal) => (
                  <li key={signal} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cobalt mt-2 shrink-0" />
                    <span className="text-gray-600">{signal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Treatment Options
              </h2>
              <div className="space-y-6">
                <div className="bg-warm rounded-xl p-6 border-l-4 border-cobalt">
                  <h3 className="font-semibold text-navy mb-2">
                    Blood Sugar Management
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Controlling blood sugar, blood pressure, and cholesterol is
                    the most important step in slowing or preventing diabetic
                    retinopathy. We work with your primary care doctor or
                    endocrinologist as a team.
                  </p>
                </div>
                <div className="bg-warm rounded-xl p-6 border-l-4 border-yellow">
                  <h3 className="font-semibold text-navy mb-2">
                    Anti-VEGF Injections
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    These medications reduce swelling in the macula (diabetic
                    macular edema) and slow the growth of abnormal blood
                    vessels. Treatment is provided by retinal specialists we
                    work closely with.
                  </p>
                </div>
                <div className="bg-warm rounded-xl p-6 border-l-4 border-teal">
                  <h3 className="font-semibold text-navy mb-2">
                    Laser Treatment &amp; Surgery
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Laser photocoagulation can seal leaking blood vessels and
                    slow new vessel growth. In advanced cases, a vitrectomy may
                    be necessary. We coordinate referrals and post-procedure
                    care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Living with Diabetes? Protect Your Eyes.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Don&apos;t wait for symptoms to appear. Schedule your annual
            diabetic eye exam at Eyes on Central in St.&nbsp;Petersburg to
            safeguard your vision.
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
