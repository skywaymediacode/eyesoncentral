import Link from "next/link";

export const metadata = {
  title: "Insurance Information | Eyes on Central",
  description:
    "Eyes on Central accepts EyeMed, VSP, Medicare, and most major medical insurance plans. Learn how to verify your vision benefits before your appointment in St. Petersburg, FL.",
};

const acceptedPlans = [
  {
    name: "EyeMed",
    description:
      "One of the nation's largest vision benefits providers. We are a preferred in-network provider for EyeMed members.",
  },
  {
    name: "VSP (Vision Service Plan)",
    description:
      "We proudly accept VSP plans, giving members access to comprehensive eye exams and eyewear benefits.",
  },
  {
    name: "Medicare",
    description:
      "We accept Medicare for medically necessary eye care including disease management, post-surgical care, and diabetic eye exams.",
  },
  {
    name: "Most Major Medical Plans",
    description:
      "We work with most major medical insurance carriers. Contact our office to confirm your specific plan is accepted.",
  },
];

const verifySteps = [
  "Call the member services number on the back of your insurance card.",
  "Confirm that Eyes on Central is an in-network provider under your plan.",
  "Ask about your copay, deductible, and any covered services (exams, lenses, frames, contacts).",
  "Note your authorization or referral requirements if applicable.",
  "Bring your insurance card and any relevant information to your appointment.",
];

export default function InsurancePage() {
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
              <li className="text-navy font-medium">Insurance</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Insurance &amp; Benefits
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Insurance Information
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            We accept a wide range of insurance plans to make quality eye care
            accessible and affordable for you and your family.
          </p>
        </div>
      </section>

      {/* ===== ACCEPTED PLANS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Accepted Insurance Plans
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Eyes on Central is proud to be an in-network provider for many
              popular vision and medical insurance plans. Below are some of
              the plans we accept. If you don&apos;t see your plan listed,
              please call us&mdash;we may still be able to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {acceptedPlans.map((plan, index) => {
              const borders = [
                "border-cobalt",
                "border-yellow",
                "border-teal",
                "border-cobalt",
              ];
              return (
                <div
                  key={plan.name}
                  className={`bg-warm rounded-xl p-8 border-l-4 ${borders[index % borders.length]}`}
                >
                  <h3 className="font-semibold text-xl text-navy mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {plan.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW TO VERIFY ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
                Before Your Visit
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                How to Verify Your Benefits
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We recommend verifying your insurance benefits before your
                appointment to avoid any surprises. Our staff is happy to help
                with the verification process&mdash;just give us a call at{" "}
                <a
                  href="tel:+17278002020"
                  className="text-cobalt font-semibold hover:underline"
                >
                  (727) 800-2020
                </a>
                .
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-yellow">
              <h3 className="text-xl font-bold text-navy mb-4">
                Verification Steps
              </h3>
              <ol className="space-y-3">
                {verifySteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cobalt text-white text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT TO BRING ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              What to Bring
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                To help us process your insurance quickly and accurately,
                please bring the following to your appointment:
              </p>
              <ul className="space-y-2">
                {[
                  "Your vision insurance card",
                  "Your medical insurance card (if applicable)",
                  "A valid photo ID",
                  "Any referral or authorization paperwork from your primary care provider",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-teal shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                If you have both vision and medical insurance, please bring
                both cards. Depending on the nature of your visit, we may bill
                one or both plans to maximize your benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Questions About Your Coverage?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our knowledgeable staff can help you understand your benefits and
            out-of-pocket costs. Give us a call or schedule your visit today.
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
