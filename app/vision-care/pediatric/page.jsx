import Link from "next/link";

export const metadata = {
  title: "Pediatric Eye Care | Eyes on Central",
  description:
    "Gentle, comprehensive pediatric eye care at Eyes on Central in St. Petersburg, FL. Early detection of vision problems, child-friendly exams, and specialized treatments for children of all ages.",
};

const milestones = [
  { age: "6-12 months", exam: "First infant eye assessment" },
  { age: "3 years", exam: "Preschool vision screening" },
  { age: "5-6 years", exam: "School-readiness eye exam" },
  { age: "6-17 years", exam: "Annual comprehensive exam" },
];

const warningSignsSchool = [
  "Squinting or tilting the head to see",
  "Sitting too close to the TV or screen",
  "Frequent eye rubbing",
  "Difficulty reading or losing their place",
  "Covering one eye to see better",
  "Complaints of headaches or tired eyes",
  "Avoiding activities that require near or distance vision",
];

const services = [
  {
    title: "Comprehensive Pediatric Exams",
    description:
      "Age-appropriate evaluations that test visual acuity, eye alignment, focusing ability, and overall eye health using child-friendly techniques and equipment.",
    border: "border-cobalt",
  },
  {
    title: "Vision Therapy Referrals",
    description:
      "If we identify conditions like amblyopia (lazy eye) or strabismus (crossed eyes), we create a treatment plan or refer to specialized vision therapy providers.",
    border: "border-yellow",
  },
  {
    title: "Myopia Management",
    description:
      "Specialized programs including MiSight contact lenses and Stellest spectacle lenses to slow myopia progression in growing children.",
    border: "border-teal",
  },
  {
    title: "Glasses & Contact Lens Fitting",
    description:
      "Durable, stylish frames designed for active children, plus age-appropriate contact lens fittings for older kids and teens.",
    border: "border-cobalt",
  },
];

export default function PediatricPage() {
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
              <li className="text-navy font-medium">Pediatric Eye Care</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Vision Care
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Pediatric Eye Care
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Healthy vision is essential for your child&apos;s development and
            success. Our team provides gentle, thorough eye care in a
            welcoming environment designed to put young patients at ease.
          </p>
        </div>
      </section>

      {/* ===== WHY EARLY EXAMS MATTER ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Why Early Eye Exams Matter
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Many vision problems in children have no obvious symptoms.
                  A child who has never experienced clear vision may not realize
                  anything is wrong. Undetected vision issues can affect
                  learning, social development, and coordination.
                </p>
                <p>
                  Early detection and treatment of conditions like amblyopia,
                  strabismus, and significant refractive errors are most
                  effective when addressed during the critical years of visual
                  development.
                </p>
              </div>
            </div>

            <div className="bg-warm rounded-2xl p-8 border-t-4 border-yellow">
              <h3 className="text-xl font-bold text-navy mb-4">
                Recommended Exam Schedule
              </h3>
              <div className="space-y-3">
                {milestones.map((item) => (
                  <div
                    key={item.age}
                    className="flex items-center justify-between bg-white rounded-lg px-4 py-3"
                  >
                    <span className="font-medium text-navy">{item.age}</span>
                    <span className="text-cobalt text-sm font-semibold">
                      {item.exam}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WARNING SIGNS ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Signs Your Child May Need an Eye Exam
              </h2>
              <p className="text-gray-600 leading-relaxed">
                While annual exams are recommended for all school-age children,
                certain behaviors may indicate a vision problem that needs
                prompt attention.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <ul className="space-y-3">
                {warningSignsSchool.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cobalt mt-2 shrink-0" />
                    <span className="text-gray-600">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Pediatric Services We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our pediatric eye care covers everything from routine screenings
              to specialized treatments for growing eyes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`bg-warm rounded-xl p-8 border-l-4 ${service.border}`}
              >
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
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
            Give Your Child the Gift of Clear Vision
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Schedule a pediatric eye exam today and ensure your child has the
            visual foundation they need to thrive.
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
