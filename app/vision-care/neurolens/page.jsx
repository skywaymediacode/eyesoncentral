import Link from "next/link";

export const metadata = {
  title: "Neurolens | Eyes on Central",
  description:
    "Relieve digital eye strain, headaches, and neck pain with Neurolens at Eyes on Central in St. Petersburg, FL. Contoured prism lens technology for modern visual demands.",
};

const symptoms = [
  {
    title: "Headaches",
    description:
      "Frequent headaches, especially after extended screen time or reading, that over-the-counter remedies cannot fully resolve.",
  },
  {
    title: "Neck & Shoulder Pain",
    description:
      "Tension in the neck and shoulders that worsens throughout the day, often linked to how your eyes work together.",
  },
  {
    title: "Digital Eye Strain",
    description:
      "Tired, achy eyes after using computers, tablets, or smartphones for prolonged periods during work or leisure.",
  },
  {
    title: "Difficulty Concentrating",
    description:
      "Trouble maintaining focus on tasks, particularly close-up work, that improves when you take breaks from visual activity.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Neurolens Measurement",
    description:
      "We use the Neurolens Measurement Device to precisely map the degree of eye misalignment at various distances.",
  },
  {
    step: "2",
    title: "Customized Prescription",
    description:
      "Based on your measurements, a unique contoured prism prescription is calculated to correct the specific misalignment causing your symptoms.",
  },
  {
    step: "3",
    title: "Lens Fabrication",
    description:
      "Your Neurolens prescription is built into your everyday glasses, so you receive relief without needing a separate device or treatment.",
  },
  {
    step: "4",
    title: "Follow-Up & Adjustment",
    description:
      "We schedule a follow-up visit to ensure your lenses are providing the expected relief and make any necessary adjustments.",
  },
];

export default function NeurolensPage() {
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
              <li className="text-navy font-medium">Neurolens</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Vision Care
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Neurolens
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Neurolens is a breakthrough lens technology that uses contoured
            prism to correct eye misalignment, relieving chronic headaches,
            neck pain, and digital eye strain at the source.
          </p>
        </div>
      </section>

      {/* ===== WHAT IS NEUROLENS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              What Is Neurolens?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Many people experience chronic headaches, neck tension, and eye
                fatigue that traditional glasses or contacts do not fully
                address. Often, the underlying cause is a subtle misalignment
                between the eyes that forces the visual system to work harder
                than it should.
              </p>
              <p>
                Neurolens is the first and only prescription lens that uses
                contoured prism to bring the eyes into alignment. Unlike
                standard prism, which applies the same correction across the
                entire lens, Neurolens varies the prism from the center to the
                edge, matching the way your eyes naturally move between distance
                and near vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SYMPTOMS TREATED ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Symptoms Neurolens Can Treat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              If you experience any of the following, you may be a candidate for
              Neurolens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {symptoms.map((symptom) => (
              <div
                key={symptom.title}
                className="bg-white rounded-xl p-8 border-l-4 border-cobalt"
              >
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {symptom.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {symptom.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting Neurolens at Eyes on Central is a straightforward process
              integrated into your regular eye exam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="bg-warm rounded-xl p-8 border-l-4 border-yellow"
              >
                <span className="inline-block bg-yellow text-navy text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4">
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

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Could Neurolens Help You?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Schedule a Neurolens evaluation to find out if contoured prism
            technology can relieve your headaches, neck pain, or eye strain.
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
