import Link from "next/link";

export const metadata = {
  title: "Patient Forms | Eyes on Central",
  description:
    "Download and complete patient forms before your visit to Eyes on Central in St. Petersburg, FL. New patient registration, medical history, and HIPAA forms available.",
};

const forms = [
  {
    title: "New Patient Registration Form",
    description:
      "Required for all first-time patients. Includes personal information, emergency contacts, and basic health background.",
    border: "border-cobalt",
  },
  {
    title: "Medical History Form",
    description:
      "Helps our doctors understand your complete health picture, including current medications, allergies, and past surgeries or eye conditions.",
    border: "border-yellow",
  },
  {
    title: "HIPAA Privacy Notice & Consent",
    description:
      "Federal law requires us to provide you with a notice of our privacy practices. This form acknowledges your receipt and understanding of our policies.",
    border: "border-teal",
  },
  {
    title: "Insurance & Billing Authorization",
    description:
      "Authorizes Eyes on Central to bill your insurance on your behalf and outlines our payment policies.",
    border: "border-cobalt",
  },
];

export default function FormsPage() {
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
                <Link href="/patients" className="hover:underline">
                  Patients
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy font-medium">Forms</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Patient Forms
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Save Time at Your Visit
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Complete your paperwork before you arrive so you can spend more
            time focused on your eye care and less time in the waiting room.
          </p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              How It Works
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We offer our patient forms for download so you can fill them
                out at your convenience before your appointment. Simply
                download the forms you need, print and complete them at home,
                and bring them with you to your visit.
              </p>
              <p>
                If you prefer, you can also complete your forms when you
                arrive at our office. We ask that you plan to arrive 15
                minutes early to allow enough time for paperwork if you
                haven&apos;t completed it in advance.
              </p>
              <p>
                If you have trouble downloading the forms or have any
                questions, please call our office at{" "}
                <a
                  href="tel:+17278002020"
                  className="text-cobalt font-semibold hover:underline"
                >
                  (727) 800-2020
                </a>{" "}
                and we will be happy to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORMS LIST ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Available Forms
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The following forms are available for download and completion
              prior to your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forms.map((form) => (
              <div
                key={form.title}
                className={`bg-white rounded-xl p-8 border-l-4 ${form.border}`}
              >
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {form.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {form.description}
                </p>
                <span className="inline-block text-cobalt text-sm font-semibold">
                  Download PDF &darr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIPS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
                Helpful Tips
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Completing Your Forms
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Please fill out all required fields as completely and
                  accurately as possible. Having thorough information helps our
                  doctors provide you with the best care.
                </p>
                <p>
                  If you are completing forms for a minor, a parent or legal
                  guardian must sign where indicated. Don&apos;t forget to
                  bring your insurance cards and a photo ID along with your
                  completed forms.
                </p>
              </div>
            </div>

            <div className="bg-warm rounded-2xl p-8 shadow-sm border-t-4 border-teal">
              <h3 className="text-xl font-bold text-navy mb-4">
                What You&apos;ll Need
              </h3>
              <ul className="space-y-3">
                {[
                  "Your full legal name and date of birth",
                  "Current home address and phone number",
                  "Insurance plan details and member ID",
                  "List of current medications and dosages",
                  "Known allergies (medications and otherwise)",
                  "Previous eye doctor's name and contact info",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-teal shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Need Help With Your Forms?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our team is ready to assist you. Call us or stop by and we will
            help you get everything filled out.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow text-navy rounded-full px-8 py-3 font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
