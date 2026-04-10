import Link from "next/link";

export const metadata = {
  title: "Promotions & Special Offers | Eyes on Central",
  description:
    "Check out current promotions and special offers at Eyes on Central in St. Petersburg, FL. Seasonal specials, new patient offers, and more. Contact us for details.",
};

const currentOffers = [
  {
    title: "New Patient Special",
    description:
      "First-time patients receive a comprehensive eye exam at a special introductory rate. Includes a thorough vision and eye health evaluation with our experienced doctors.",
    tag: "New Patients",
    border: "border-cobalt",
  },
  {
    title: "Seasonal Eyewear Sale",
    description:
      "Enjoy special savings on select designer frames and premium lenses. Updated each season with new styles and brands. Ask about current availability when you visit.",
    tag: "Limited Time",
    border: "border-yellow",
  },
  {
    title: "Contact Lens Offer",
    description:
      "Take advantage of special pricing on annual contact lens supplies. Includes a comprehensive fitting and follow-up care to ensure your lenses are a perfect fit.",
    tag: "Contacts",
    border: "border-teal",
  },
  {
    title: "Refer a Friend",
    description:
      "Love your experience at Eyes on Central? Refer a friend or family member and both of you can enjoy special savings on your next visit. Ask our staff for details.",
    tag: "Referral",
    border: "border-cobalt",
  },
];

export default function PromotionsPage() {
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
              <li className="text-navy font-medium">Promotions</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Special Offers
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Promotions &amp; Deals
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Take advantage of our current promotions and make quality eye care
            even more affordable. Offers are updated regularly, so check back
            often.
          </p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Great Eye Care, Great Value
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At Eyes on Central, we are committed to making quality eye
                care accessible to everyone in St.&nbsp;Petersburg. Throughout
                the year, we offer seasonal promotions, new patient specials,
                and exclusive deals on eyewear and services.
              </p>
              <p>
                Promotions change regularly, so the best way to stay up to
                date is to call our office at{" "}
                <a
                  href="tel:+17278002020"
                  className="text-cobalt font-semibold hover:underline"
                >
                  (727) 800-2020
                </a>{" "}
                or stop by for the latest offers. You can also follow us on
                social media for exclusive announcements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CURRENT OFFERS ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Current Offers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our latest promotions below. Contact us for full details,
              terms, and eligibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentOffers.map((offer) => (
              <div
                key={offer.title}
                className={`bg-white rounded-xl p-8 border-l-4 ${offer.border}`}
              >
                <span className="inline-block bg-[#E8EFFE] text-cobalt text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {offer.tag}
                </span>
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {offer.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm">
              Offers subject to change. Cannot be combined with insurance
              benefits unless otherwise noted. Contact our office for full
              details.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STAY UPDATED ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
                Don&apos;t Miss Out
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Stay in the Loop
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  New promotions are released throughout the year, including
                  back-to-school specials, holiday savings, and exclusive
                  offers for our loyal patients.
                </p>
                <p>
                  The easiest way to hear about our latest deals is to follow
                  us on social media or simply ask about current promotions
                  when you call or visit our office.
                </p>
              </div>
            </div>

            <div className="bg-warm rounded-2xl p-8 shadow-sm border-t-4 border-teal">
              <h3 className="text-xl font-bold text-navy mb-4">
                How to Save
              </h3>
              <ul className="space-y-3">
                {[
                  "Ask about current promotions when you call to schedule",
                  "Combine savings with CareCredit financing",
                  "Use your HSA or FSA funds for eligible purchases",
                  "Refer friends and family for referral rewards",
                  "Follow us on social media for flash offers",
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
            Ready to Take Advantage?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our current promotions and
            schedule your appointment.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow text-navy rounded-full px-8 py-3 font-semibold hover:opacity-90 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
