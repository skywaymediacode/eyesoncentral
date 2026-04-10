import Link from "next/link";

export const metadata = {
  title: "Cataracts | Eyes on Central",
  description:
    "Learn about cataracts, symptoms, causes, when to consider surgery, and our surgical co-management services at Eyes on Central in St. Petersburg, FL.",
};

const symptoms = [
  "Blurred, cloudy, or dim vision",
  "Increasing difficulty with night vision",
  "Sensitivity to light and glare",
  "Seeing halos around lights",
  "Fading or yellowing of colors",
  "Frequent changes in glasses or contact lens prescriptions",
  "Double vision in one eye",
];

const causes = [
  {
    title: "Age-Related Cataracts",
    description:
      "The most common type. Proteins in the lens naturally break down over time, causing gradual clouding. Most people develop some degree of cataract changes by age 60.",
    border: "border-cobalt",
  },
  {
    title: "Secondary Cataracts",
    description:
      "Can develop as a result of other medical conditions such as diabetes, or from prolonged use of certain medications like corticosteroids.",
    border: "border-yellow",
  },
  {
    title: "Traumatic Cataracts",
    description:
      "May form after an eye injury, sometimes years after the original trauma occurred.",
    border: "border-teal",
  },
  {
    title: "Congenital Cataracts",
    description:
      "Present at birth or develop during childhood. These may be hereditary or associated with certain infections or conditions during pregnancy.",
    border: "border-cobalt",
  },
];

const surgeryTimeline = [
  {
    step: "1",
    title: "Pre-Operative Evaluation",
    description:
      "We perform detailed measurements of your eye and discuss your visual goals with the surgeon to help determine the best intraocular lens (IOL) for you.",
  },
  {
    step: "2",
    title: "Surgical Referral",
    description:
      "We partner with experienced, board-certified ophthalmologists in the St. Petersburg area. We will refer you to a surgeon we trust for your procedure.",
  },
  {
    step: "3",
    title: "Post-Operative Care",
    description:
      "After surgery, you return to our office for follow-up visits. We monitor your healing, manage any medications, and update your glasses prescription once your eyes have stabilized.",
  },
];

export default function CataractsPage() {
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
              <li className="text-navy font-medium">Cataracts</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Eye Disease Management
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Cataracts
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Cataracts are a natural part of aging, but they don&apos;t have to
            define your vision. We monitor cataract development, help you
            understand your options, and provide seamless surgical
            co-management when the time is right.
          </p>
        </div>
      </section>

      {/* ===== WHAT ARE CATARACTS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                What Are Cataracts?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A cataract is a clouding of the eye&apos;s natural lens, which
                  sits behind the iris and the pupil. The lens focuses light onto
                  the retina to produce clear images. When proteins in the lens
                  clump together, they create cloudy areas that scatter light and
                  reduce visual clarity.
                </p>
                <p>
                  Cataracts typically develop gradually. In the early stages, you
                  may not notice any change. Over time, the cloudiness increases
                  and begins to interfere with everyday activities like reading,
                  driving, and watching television.
                </p>
              </div>
            </div>

            <div className="bg-warm rounded-2xl p-8 border-t-4 border-teal">
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
          </div>
        </div>
      </section>

      {/* ===== CAUSES ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Types &amp; Causes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              While aging is the most common cause, cataracts can develop for
              several reasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {causes.map((item) => (
              <div
                key={item.title}
                className={`bg-white rounded-xl p-8 border-l-4 ${item.border}`}
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

      {/* ===== WHEN TO CONSIDER SURGERY ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              When Should You Consider Surgery?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                In the early stages, updated glasses or contact lenses,
                brighter lighting, and anti-glare sunglasses can help manage
                symptoms. Surgery is not needed right away.
              </p>
              <p>
                Cataract surgery is typically recommended when your cataracts
                begin to significantly impact your quality of life &mdash; when
                everyday tasks like reading, driving, or working become
                difficult despite corrective lenses.
              </p>
              <p>
                Cataract surgery is one of the most common and successful
                procedures performed today. The cloudy lens is removed and
                replaced with a clear artificial lens (intraocular lens or IOL),
                restoring clear vision for the vast majority of patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SURGICAL CO-MANAGEMENT ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Surgical Co-Management
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We guide you through every step of the cataract surgery process,
              from evaluation to recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {surgeryTimeline.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-8">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cobalt text-white font-bold mb-4">
                  {item.step}
                </span>
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

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Concerned About Cataracts?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Schedule an evaluation to have your lens health assessed. Our
            doctors will help you understand your options and plan the best path
            forward.
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
