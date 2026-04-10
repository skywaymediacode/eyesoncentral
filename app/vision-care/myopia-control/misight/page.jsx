import Link from "next/link";

export const metadata = {
  title: "MiSight 1 Day Contact Lenses | Eyes on Central",
  description:
    "MiSight 1 day contact lenses for myopia control in children. FDA-approved to slow myopia progression. Learn about candidacy and how they work at Eyes on Central in St. Petersburg, FL.",
};

const benefits = [
  "FDA-approved specifically for slowing myopia progression in children ages 8 to 12 at initiation of treatment",
  "Daily disposable design means no cleaning or overnight storage",
  "Clinically proven to slow the progression of myopia by an average of 59%",
  "Soft, comfortable lens designed for young wearers",
  "Children can participate in sports and activities without glasses",
  "Fresh, hygienic lens every day reduces infection risk",
];

const howItWorks = [
  {
    title: "ActivControl Technology",
    description:
      "MiSight lenses feature concentric rings of two different optical zones. The correction zones provide clear vision, while the treatment zones create myopic defocus on the peripheral retina, which signals the eye to slow its growth.",
  },
  {
    title: "Dual-Focus Design",
    description:
      "Unlike standard contact lenses that only correct vision, MiSight simultaneously corrects your child's distance vision and manages the signal that drives eye elongation.",
  },
  {
    title: "Proven Results",
    description:
      "In a multi-year clinical trial, children wearing MiSight 1 day lenses showed significantly less myopia progression and less axial eye growth compared to children wearing standard single-vision contact lenses.",
  },
];

export default function MiSightPage() {
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
              <li className="text-navy font-medium">MiSight 1 Day</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Myopia Control
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            MiSight 1 Day Contact Lenses
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            The first and only FDA-approved soft contact lens proven to slow the
            progression of myopia in children. MiSight 1 day lenses give your
            child clear vision today while helping protect their sight for the
            future.
          </p>
        </div>
      </section>

      {/* ===== WHAT IS MISIGHT ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              What Is MiSight?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                MiSight 1 day is a daily disposable soft contact lens
                manufactured by CooperVision. It was specifically designed and
                clinically tested for myopia management in children whose
                nearsightedness is progressing.
              </p>
              <p>
                Unlike standard contact lenses that only correct vision, MiSight
                uses ActivControl Technology to address the underlying cause of
                myopia progression &mdash; excessive eye growth. This dual
                approach provides clear vision while actively working to slow
                the rate at which your child&apos;s prescription increases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              How MiSight Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              MiSight lenses use innovative optical technology to correct vision
              and manage eye growth simultaneously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 border-l-4 border-cobalt"
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
                    <span className="w-2 h-2 rounded-full bg-cobalt mt-2 shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-warm rounded-2xl p-8 border-t-4 border-yellow">
              <h3 className="text-xl font-bold text-navy mb-4">
                Is Your Child a Candidate?
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  MiSight may be appropriate for your child if they are between
                  8 and 12 years old at the start of treatment, have been
                  diagnosed with myopia, and their prescription is progressing.
                </p>
                <p>
                  Children should be motivated and responsible enough to handle
                  contact lenses with guidance from a parent. Our doctors will
                  assess your child&apos;s eye health, prescription, and
                  readiness during a comprehensive evaluation.
                </p>
                <p>
                  MiSight treatment can continue beyond age 12 as long as
                  myopia is still progressing and the lenses remain an
                  appropriate option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              What to Expect
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Getting started with MiSight begins with a thorough myopia
                evaluation. Our doctors will measure your child&apos;s
                prescription, axial length (eye length), and overall eye health
                to confirm MiSight is the right choice.
              </p>
              <p>
                During the fitting appointment, your child will learn how to
                insert, remove, and care for their daily lenses. We take the
                time to ensure both child and parent feel confident before
                leaving the office.
              </p>
              <p>
                Follow-up appointments are scheduled regularly to monitor your
                child&apos;s prescription changes, eye growth, and lens comfort.
                These visits help us track the effectiveness of treatment and
                make adjustments as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Slow Your Child&apos;s Myopia Progression
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Find out if MiSight 1 day contact lenses are right for your child.
            Schedule a myopia evaluation at Eyes on Central.
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
