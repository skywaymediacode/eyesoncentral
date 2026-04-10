import Link from "next/link";

export const metadata = {
  title: "Financing Options | Eyes on Central",
  description:
    "Affordable eye care financing at Eyes on Central in St. Petersburg, FL. CareCredit accepted, flexible payment plans, HSA and FSA eligible. Quality vision care that fits your budget.",
};

const options = [
  {
    title: "CareCredit",
    description:
      "CareCredit is a healthcare credit card that offers special financing on purchases of $200 or more. Choose a plan that works for you with low monthly payments and promotional interest-free periods.",
    border: "border-cobalt",
  },
  {
    title: "Flexible Payment Plans",
    description:
      "We offer in-house payment plans for qualifying patients. Talk with our billing team to set up a schedule that makes your care manageable and stress-free.",
    border: "border-yellow",
  },
  {
    title: "HSA & FSA Accepted",
    description:
      "Use your Health Savings Account (HSA) or Flexible Spending Account (FSA) to pay for eye exams, prescription eyewear, contact lenses, and more. These pre-tax dollars can significantly reduce your out-of-pocket costs.",
    border: "border-teal",
  },
  {
    title: "Insurance Benefits",
    description:
      "We accept EyeMed, VSP, Medicare, and most major medical plans. Our staff will help you understand and maximize your vision and medical benefits.",
    border: "border-cobalt",
  },
];

export default function FinancingPage() {
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
              <li className="text-navy font-medium">Financing</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Financing Options
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Affordable Eye Care for Everyone
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Quality vision care should never be out of reach. We offer
            multiple financing and payment options to fit every budget.
          </p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Making Eye Care Accessible
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At Eyes on Central, we believe that financial concerns should
                never prevent anyone from receiving the eye care they need.
                That&apos;s why we offer a variety of payment and financing
                options to make our services as accessible as possible.
              </p>
              <p>
                Whether you have insurance, are self-pay, or need a payment
                plan, our billing team will work with you to find the most
                affordable way to get the care you deserve. We are always
                transparent about costs and happy to discuss your options
                before any treatment begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OPTIONS GRID ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Payment &amp; Financing Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the options below to find the payment solution that
              works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {options.map((option) => (
              <div
                key={option.title}
                className={`bg-white rounded-xl p-8 border-l-4 ${option.border}`}
              >
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADDITIONAL INFO ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
                Good to Know
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Accepted Payment Methods
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In addition to the financing options above, we accept all
                major forms of payment for your convenience.
              </p>
            </div>

            <div className="bg-warm rounded-2xl p-8 shadow-sm border-t-4 border-yellow">
              <h3 className="text-xl font-bold text-navy mb-4">
                We Accept
              </h3>
              <ul className="space-y-3">
                {[
                  "Cash",
                  "Personal checks",
                  "Visa, Mastercard, American Express, Discover",
                  "CareCredit healthcare credit card",
                  "HSA and FSA debit cards",
                  "Insurance (EyeMed, VSP, Medicare, and more)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow shrink-0" />
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
            Have Questions About Payment?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our billing team is happy to walk you through your options and
            help you find the most affordable path to great eye care.
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
