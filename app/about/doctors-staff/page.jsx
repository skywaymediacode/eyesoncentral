import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Doctors & Staff | Eyes on Central",
  description:
    "Meet Dr. Caleb Saint Jean and the friendly team at Eyes on Central. Compassionate eye care in English, Spanish, and Haitian Creole.",
};

export default function DoctorsStaffPage() {
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
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy font-medium">Doctors &amp; Staff</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            The Eyes on Central Team
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Our Doctors &amp; Staff
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Dedicated professionals committed to your vision health and comfort,
            serving our community with expertise and warmth.
          </p>
        </div>
      </section>

      {/* ===== DR. CALEB SAINT JEAN ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="border-t-4 border-yellow rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/doctor_portrait.jpg"
                alt="Dr. Caleb Saint Jean, Doctor of Optometry"
                width={400}
                height={500}
                className="object-cover w-full"
              />
            </div>

            {/* Bio */}
            <div>
              <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
                Doctor of Optometry
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Dr. Caleb Saint Jean, O.D.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dr. Caleb Saint Jean is the lead optometrist at Eyes on
                  Central, bringing a passion for personalized eye care and a
                  commitment to clinical excellence. He provides comprehensive
                  eye examinations, manages ocular disease, and specializes in
                  fitting contact lenses and prescribing specialty eyewear.
                </p>
                <p>
                  Dr. Saint Jean is dedicated to making high-quality vision care
                  accessible to all members of the St. Petersburg community. His
                  warm, patient-first approach ensures that every visit is
                  thorough, comfortable, and tailored to individual needs.
                </p>
                <p>
                  Beyond clinical expertise, Dr. Saint Jean is deeply connected
                  to the diverse population he serves. He takes pride in
                  building lasting relationships with patients and their
                  families, helping them achieve their best possible vision at
                  every stage of life.
                </p>
              </div>

              {/* Languages */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
                  Languages Spoken
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["English", "Spanish", "Haitian Creole"].map((lang) => (
                    <span
                      key={lang}
                      className="bg-[#E8EFFE] text-cobalt rounded-full px-4 py-1.5 text-sm font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DR. DEBORAH FLANAGAN (RETIRED) ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio — left on this section for visual variety */}
            <div>
              <div className="inline-block bg-yellow/20 text-navy rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                Retired
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Dr. Deborah Flanagan, O.D.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dr. Deborah Flanagan is the founding doctor of Eyes on Central.
                  Over the course of more than three decades, she built the
                  practice from the ground up into one of St. Petersburg&apos;s
                  most respected optometry offices.
                </p>
                <p>
                  Her vision for the practice was simple but powerful: provide
                  exceptional, compassionate eye care to every patient who walks
                  through the door. That founding philosophy continues to guide
                  Eyes on Central today.
                </p>
                <p>
                  Now retired, Dr. Flanagan&apos;s legacy lives on in the
                  practice&apos;s commitment to personalized care, community
                  involvement, and clinical excellence. We are grateful for the
                  foundation she built and the standard of care she established.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="border-t-4 border-teal rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/doctors_together.jpg"
                alt="Dr. Deborah Flanagan and Dr. Caleb Saint Jean together at Eyes on Central"
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STAFF ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Our Optical Staff
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Behind every great patient experience is our friendly and
              knowledgeable optical staff. From helping you choose the perfect
              frames to processing your insurance and ensuring your lenses are
              just right, our team is here to make every visit seamless.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you need guidance selecting from our designer eyewear
              collection, assistance with contact lens orders, or help
              understanding your vision benefits, our staff brings expertise and
              genuine care to every interaction.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Ready to Meet Our Team?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Schedule your appointment today and experience the personalized care
            that has made Eyes on Central a trusted name for over 35 years.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-yellow text-navy rounded-full px-8 py-3 font-semibold hover:opacity-90 transition"
            >
              Request Appointment
            </Link>
            <Link
              href="tel:7278002020"
              className="inline-block rounded-full border-2 border-cobalt text-cobalt px-8 py-3 font-semibold hover:bg-cobalt hover:text-white transition"
            >
              Call (727) 800-2020
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
