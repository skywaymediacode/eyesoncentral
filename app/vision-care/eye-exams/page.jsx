import Link from "next/link";

export const metadata = {
  title: "Comprehensive Eye Exams | Eyes on Central",
  description:
    "Schedule a comprehensive eye exam at Eyes on Central in St. Petersburg, FL. Advanced diagnostic technology, thorough evaluations, and personalized care for patients of all ages.",
};

const examSteps = [
  {
    step: "1",
    title: "Health & Vision History",
    description:
      "We review your medical history, current medications, and any vision concerns to tailor your examination.",
  },
  {
    step: "2",
    title: "Diagnostic Testing",
    description:
      "Our advanced instruments measure your visual acuity, eye pressure, peripheral vision, and more with precision.",
  },
  {
    step: "3",
    title: "Eye Health Evaluation",
    description:
      "Your doctor examines the internal and external structures of your eyes, checking for signs of disease or abnormalities.",
  },
  {
    step: "4",
    title: "Personalized Care Plan",
    description:
      "We discuss your results, answer your questions, and create a vision care plan tailored to your needs and lifestyle.",
  },
];

const frequencies = [
  { group: "Children (6-17)", recommendation: "Annually" },
  { group: "Adults (18-39)", recommendation: "Every 2 years" },
  { group: "Adults (40-64)", recommendation: "Every 1-2 years" },
  { group: "Seniors (65+)", recommendation: "Annually" },
  { group: "Contact lens wearers", recommendation: "Annually" },
  { group: "Diabetes or high-risk patients", recommendation: "Annually or as directed" },
];

export default function EyeExamsPage() {
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
              <li className="text-navy font-medium">Eye Exams</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Vision Care
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Comprehensive Eye Exams
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            A thorough eye exam is the foundation of great vision and long-term
            eye health. Our detailed evaluations go far beyond reading a chart.
          </p>
        </div>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              What to Expect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your comprehensive eye exam at Eyes on Central follows a
              step-by-step process designed to evaluate every aspect of your
              vision and eye health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examSteps.map((item) => (
              <div
                key={item.step}
                className="bg-warm rounded-xl p-8 border-l-4 border-cobalt"
              >
                <span className="inline-block bg-cobalt text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4">
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

      {/* ===== FREQUENCY ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                How Often Should You Have an Eye Exam?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The American Optometric Association recommends regular eye exams
                based on age, risk factors, and whether you currently wear
                corrective lenses. Early detection of eye conditions like
                glaucoma and macular degeneration can make a significant
                difference in outcomes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-yellow">
              <h3 className="text-xl font-bold text-navy mb-4">
                Recommended Exam Schedule
              </h3>
              <div className="space-y-3">
                {frequencies.map((item) => (
                  <div
                    key={item.group}
                    className="flex items-center justify-between bg-warm rounded-lg px-4 py-3"
                  >
                    <span className="font-medium text-navy">{item.group}</span>
                    <span className="text-cobalt text-sm font-semibold">
                      {item.recommendation}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Advanced Diagnostic Technology
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Eyes on Central invests in the latest diagnostic equipment to
                ensure every exam is thorough, accurate, and comfortable. Our
                technology allows us to detect eye conditions at their earliest
                stages, often before you notice any symptoms.
              </p>
              <p>
                Our office is equipped with digital retinal imaging, optical
                coherence tomography (OCT), corneal topography, automated
                refraction, and visual field testing. These tools provide
                detailed views of your eye health and allow our doctors to make
                precise diagnoses and treatment recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Schedule Your Eye Exam Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Protect your vision with a comprehensive eye exam at Eyes on
            Central. Our experienced doctors are ready to help you see clearly
            and stay healthy.
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
