import Link from "next/link";

export const metadata = {
  title: "Our Story | Eyes on Central",
  description:
    "Learn about Eyes on Central, St. Petersburg's trusted optometry practice for over 35 years. Personalized eye care in English, Spanish, and Haitian Creole.",
};

const values = [
  {
    title: "Personalized Care",
    description:
      "Every patient receives individualized attention. We take the time to understand your unique vision needs, lifestyle, and health history to craft the best care plan for you.",
    border: "border-cobalt",
  },
  {
    title: "Advanced Technology",
    description:
      "We invest in state-of-the-art diagnostic equipment including digital retinal imaging, OCT scanning, and corneal topography for precise, comfortable eye care.",
    border: "border-yellow",
  },
  {
    title: "Community Focus",
    description:
      "As a cornerstone of Central Avenue for over three decades, we are deeply rooted in the St. Petersburg community and committed to serving our neighbors.",
    border: "border-teal",
  },
  {
    title: "Accessibility",
    description:
      "We believe quality eye care should be available to everyone. Our team speaks English, Spanish, and Haitian Creole to serve our diverse community.",
    border: "border-cobalt",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-[#E8EFFE] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-cobalt">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy font-medium">About</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            About Eyes on Central
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Our Story
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            For over 35 years, Eyes on Central has been a trusted part of the
            St. Petersburg community, delivering exceptional eye care with a
            personal touch.
          </p>
        </div>
      </section>

      {/* ===== HISTORY ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              A Legacy on Central Avenue
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded over 35 years ago, Eyes on Central has been a
                cornerstone of St. Petersburg&apos;s vibrant Central Avenue.
                What began as a small, community-focused optometry practice has
                grown into one of the area&apos;s most trusted destinations for
                comprehensive eye care.
              </p>
              <p>
                Throughout our history, we have remained committed to combining
                modern technology with the kind of personal care that makes
                every patient feel like family. Our practice has evolved with
                the times, embracing advances in diagnostic equipment and lens
                technology, while never losing sight of the relationships that
                matter most.
              </p>
              <p>
                From our welcoming reception area to our curated eyewear
                collection, every detail of Eyes on Central reflects our
                dedication to providing an outstanding patient experience. We
                are proud to be part of the fabric of this community and look
                forward to serving St. Petersburg for many years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Accessible, High-Quality Eye Care for Everyone
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Eyes on Central, our mission is to provide accessible,
                  high-quality eye care to the diverse community we serve. We
                  believe that clear vision is a foundation for a better quality
                  of life, and we work every day to make that possible for our
                  patients.
                </p>
                <p>
                  Understanding that St. Petersburg is a richly diverse city,
                  our team proudly serves patients in three languages: English,
                  Spanish, and Haitian Creole. We are committed to breaking
                  down barriers to care so that every patient can communicate
                  comfortably and receive the attention they deserve.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-yellow">
              <h3 className="text-xl font-bold text-navy mb-4">
                We Speak Your Language
              </h3>
              <div className="space-y-3">
                {[
                  { lang: "English", label: "English" },
                  { lang: "Espa\u00f1ol", label: "Spanish" },
                  { lang: "Krey\u00f2l Ayisyen", label: "Haitian Creole" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 bg-warm rounded-lg px-4 py-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-cobalt" />
                    <span className="font-semibold text-navy">
                      {item.lang}
                    </span>
                    <span className="text-gray-500 text-sm">
                      ({item.label})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES GRID ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Eyes on Central.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className={`bg-warm rounded-xl p-8 border-l-4 ${value.border}`}
              >
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
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
            Meet the People Behind the Care
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Get to know the dedicated doctors and staff who make Eyes on Central
            a place where patients feel right at home.
          </p>
          <Link
            href="/about/doctors-staff"
            className="inline-block bg-yellow text-navy rounded-full px-8 py-3 font-semibold hover:opacity-90 transition"
          >
            Meet Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
