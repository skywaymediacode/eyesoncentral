import Link from "next/link";

export const metadata = {
  title: "Dry Eye Treatment | Eyes on Central",
  description:
    "Get relief from dry eye symptoms at Eyes on Central in St. Petersburg, FL. Expert diagnosis and advanced treatment options for chronic dry eye and tear film dysfunction.",
};

const symptoms = [
  "Persistent dryness or grittiness",
  "Burning or stinging sensation",
  "Excessive tearing or watery eyes",
  "Blurred vision that improves with blinking",
  "Red or irritated eyes",
  "Sensitivity to light",
  "Feeling of something in your eye",
  "Discomfort when wearing contact lenses",
];

const causes = [
  {
    title: "Environmental Factors",
    description:
      "Dry air, wind, air conditioning, and prolonged screen time can reduce tear production and increase evaporation.",
    border: "border-cobalt",
  },
  {
    title: "Aging & Hormonal Changes",
    description:
      "Tear production naturally decreases with age. Hormonal changes during menopause can also contribute to dry eye.",
    border: "border-yellow",
  },
  {
    title: "Medications",
    description:
      "Antihistamines, decongestants, blood pressure medications, and antidepressants can reduce tear production as a side effect.",
    border: "border-teal",
  },
  {
    title: "Meibomian Gland Dysfunction",
    description:
      "Blocked oil glands in the eyelids prevent the oily layer of tears from forming, leading to rapid evaporation.",
    border: "border-cobalt",
  },
];

const treatments = [
  {
    title: "Prescription Eye Drops",
    description:
      "Medicated drops that reduce inflammation and stimulate natural tear production for lasting relief.",
  },
  {
    title: "Punctal Plugs",
    description:
      "Tiny devices placed in the tear ducts to slow drainage and keep your natural tears on the eye surface longer.",
  },
  {
    title: "Meibomian Gland Expression",
    description:
      "Therapeutic treatment to clear blocked oil glands and restore the healthy lipid layer of your tear film.",
  },
  {
    title: "Lifestyle & Nutritional Guidance",
    description:
      "Recommendations for screen habits, environmental adjustments, and omega-3 supplementation to support long-term eye comfort.",
  },
];

export default function DryEyePage() {
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
              <li className="text-navy font-medium">Dry Eye</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Vision Care
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Dry Eye Treatment
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Chronic dry eye affects millions of people. At Eyes on Central, we
            identify the root cause of your symptoms and develop a personalized
            treatment plan to restore comfort.
          </p>
        </div>
      </section>

      {/* ===== SYMPTOMS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Common Symptoms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dry eye can present in many ways. If you experience any of the
                following symptoms regularly, it may be time for a dry eye
                evaluation.
              </p>
            </div>

            <div className="bg-warm rounded-2xl p-8">
              <ul className="space-y-3">
                {symptoms.map((symptom) => (
                  <li key={symptom} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cobalt mt-2 shrink-0" />
                    <span className="text-gray-600">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CAUSES ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              What Causes Dry Eye?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the underlying cause is the first step toward
              effective treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {causes.map((cause) => (
              <div
                key={cause.title}
                className={`bg-white rounded-xl p-8 border-l-4 ${cause.border}`}
              >
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {cause.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {cause.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TREATMENTS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Treatment Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of treatments tailored to the severity and type
              of your dry eye condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {treatments.map((treatment) => (
              <div
                key={treatment.title}
                className="bg-warm rounded-xl p-8 border-l-4 border-yellow"
              >
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {treatment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Find Relief From Dry Eye
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Do not let dry eye discomfort control your day. Schedule an
            evaluation and start your path to lasting relief.
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
