import Link from "next/link";

export const metadata = {
  title: "Patient Resources | Eyes on Central",
  description:
    "Access patient resources at Eyes on Central in St. Petersburg, FL. Find insurance information, downloadable forms, financing options, and everything you need for your visit.",
};

const resources = [
  {
    title: "Insurance Information",
    href: "/patients/insurance",
    description:
      "We accept EyeMed, VSP, Medicare, and most major medical plans. Learn how to verify your benefits before your appointment.",
    border: "border-cobalt",
  },
  {
    title: "Patient Forms",
    href: "/patients/forms",
    description:
      "Save time at your visit by completing your new patient, medical history, and HIPAA forms ahead of time.",
    border: "border-yellow",
  },
  {
    title: "Financing Options",
    href: "/patients/financing",
    description:
      "Flexible payment plans, CareCredit, and HSA/FSA accepted so quality eye care fits your budget.",
    border: "border-teal",
  },
];

const bringItems = [
  "Photo ID (driver's license or state-issued ID)",
  "Insurance card(s) — both medical and vision if applicable",
  "Current glasses or contact lenses",
  "A list of current medications and supplements",
  "Any relevant medical records or referral letters",
  "Payment method for copays or balances",
];

export default function PatientsPage() {
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
              <li className="text-navy font-medium">Patients</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Patient Resources
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Everything You Need for Your Visit
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            We want your experience at Eyes on Central to be as smooth and
            comfortable as possible. Find helpful resources below to prepare
            for your appointment.
          </p>
        </div>
      </section>

      {/* ===== RESOURCE CARDS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Quick Links
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access the information and tools you need before, during, and
              after your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className={`group bg-warm rounded-xl p-8 border-l-4 ${resource.border} hover:shadow-md transition`}
              >
                <h3 className="font-semibold text-xl text-navy mb-3 group-hover:text-cobalt transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {resource.description}
                </p>
                <span className="inline-block mt-4 text-cobalt text-sm font-semibold">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT TO BRING ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
                Be Prepared
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                What to Bring to Your Appointment
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Having the right items on hand helps us provide the most
                accurate diagnosis and makes your visit more efficient.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-yellow">
              <h3 className="text-xl font-bold text-navy mb-4">
                Your Visit Checklist
              </h3>
              <ul className="space-y-3">
                {bringItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-cobalt shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEW PATIENTS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
              Welcome
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              New Patient Information
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We love welcoming new patients to Eyes on Central! To ensure
                your first visit goes smoothly, we recommend arriving 15
                minutes early to complete any remaining paperwork. You can also
                save time by downloading and filling out your{" "}
                <Link
                  href="/patients/forms"
                  className="text-cobalt font-semibold hover:underline"
                >
                  patient forms
                </Link>{" "}
                before your appointment.
              </p>
              <p>
                During your initial visit, our team will perform a
                comprehensive eye examination, review your medical and vision
                history, and discuss any concerns you may have. We take the
                time to get to know each patient individually so we can tailor
                our care to your specific needs.
              </p>
              <p>
                If you have questions about{" "}
                <Link
                  href="/patients/insurance"
                  className="text-cobalt font-semibold hover:underline"
                >
                  insurance coverage
                </Link>{" "}
                or{" "}
                <Link
                  href="/patients/financing"
                  className="text-cobalt font-semibold hover:underline"
                >
                  financing options
                </Link>
                , we encourage you to explore those pages or call our office
                at{" "}
                <a
                  href="tel:+17278002020"
                  className="text-cobalt font-semibold hover:underline"
                >
                  (727) 800-2020
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our friendly team is here to help. Contact us today to schedule
            your visit at Eyes on Central.
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
