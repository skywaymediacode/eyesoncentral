import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

const services = [
  {
    name: "Eye Exams",
    href: "/vision-care/eye-exams",
    description:
      "Comprehensive eye health evaluations using advanced diagnostic technology.",
  },
  {
    name: "Lenses & Frames",
    href: "/vision-care/lenses-frames",
    description:
      "Designer frames and premium lenses from the world's top brands.",
  },
  {
    name: "Contact Lenses",
    href: "/vision-care/contacts",
    description:
      "Custom-fit contact lenses for every lifestyle and prescription.",
  },
  {
    name: "Dry Eye Treatment",
    href: "/vision-care/dry-eye",
    description:
      "Advanced therapies to restore comfort and tear film health.",
  },
  {
    name: "Myopia Control",
    href: "/vision-care/myopia-control",
    description:
      "Specialized treatments to slow myopia progression in children.",
  },
  {
    name: "Neurolens",
    href: "/vision-care/neurolens",
    description:
      "Innovative lens technology for digital eye strain and headaches.",
  },
  {
    name: "Pediatric Eye Care",
    href: "/vision-care/pediatric",
    description: "Gentle, thorough vision care for children of all ages.",
  },
  {
    name: "Emergency Eye Exams",
    href: "/vision-care/emergency-exams",
    description:
      "Urgent eye care when you need it most—same-day availability.",
  },
  {
    name: "Eye Disease Management",
    href: "/vision-care/eye-disease",
    description:
      "Expert diagnosis and treatment of glaucoma, cataracts, and more.",
  },
];

const borderColors = [
  "border-cobalt",
  "border-yellow",
  "border-teal",
];

const techItems = [
  {
    title: "Digital Retinal Imaging",
    description:
      "High-resolution imaging for early detection of eye disease.",
    border: "border-cobalt",
  },
  {
    title: "OCT Scanning",
    description:
      "Cross-sectional views of retinal layers for comprehensive analysis.",
    border: "border-yellow",
  },
  {
    title: "Corneal Topography",
    description:
      "Detailed mapping of the corneal surface for precise lens fitting.",
    border: "border-cobalt",
  },
  {
    title: "Visual Field Testing",
    description:
      "Comprehensive peripheral vision assessment for glaucoma screening.",
    border: "border-yellow",
  },
];

const hours = [
  { day: "Monday", time: "9:00 AM – 5:30 PM" },
  { day: "Tuesday", time: "9:00 AM – 5:30 PM" },
  { day: "Wednesday", time: "9:00 AM – 5:30 PM" },
  { day: "Thursday", time: "9:00 AM – 5:30 PM" },
  { day: "Friday", time: "9:00 AM – 5:30 PM" },
  { day: "Saturday", time: "10:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function HomePage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <ScrollReveal direction="right">
            <div>
              <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
                Optometry in St. Petersburg
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
                See St. Pete{" "}
                <span className="relative inline-block">
                  Clearly.
                  <span className="block bg-yellow h-1 mt-1 rounded-full" />
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                Trusted eye care for the whole family. From comprehensive exams
                to designer eyewear, Eyes on Central has been St. Pete&apos;s
                vision destination for over 35 years.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="bg-yellow text-navy rounded-full px-8 py-3 font-semibold hover:scale-105 hover:shadow-lg hover:opacity-90 transition-all duration-300"
                >
                  Request Appointment
                </Link>
                <Link
                  href="tel:7278002020"
                  className="rounded-full border-2 border-cobalt text-cobalt px-8 py-3 font-semibold hover:bg-cobalt hover:text-white hover:scale-105 transition-all duration-300"
                >
                  Call (727) 800-2020
                </Link>
              </div>
              <div className="flex gap-8">
                {[
                  { stat: "35+", label: "Years of Care" },
                  { stat: "9", label: "Specialty Services" },
                  { stat: "3", label: "Languages Spoken" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-cobalt font-bold text-3xl">
                      {item.stat}
                    </p>
                    <p className="text-sm text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>

            {/* Right */}
            <ScrollReveal direction="left" delay={200}>
            <div className="relative bg-navy rounded-2xl aspect-[4/5] overflow-hidden group">
              <Image
                src="/images/interior_mural.jpg"
                alt="Eyes on Central interior with colorful mural"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS BAR ===== */}
      <section className="bg-yellow py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Patient Forms", href: "/patients/forms" },
              { label: "Browse Eyewear", href: "/vision-care/lenses-frames" },
              { label: "Shop Contacts", href: "/vision-care/contacts" },
            ].map((link, i) => (
              <ScrollReveal key={link.label} direction="up" delay={i * 150}>
              <Link
                href={link.href}
                className="bg-white text-navy rounded-full px-6 py-2 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block"
              >
                {link.label} →
              </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Comprehensive Vision Care
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From routine exams to specialized treatments, we offer a full
              spectrum of eye care services for every member of your family.
            </p>
          </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} direction="up" delay={i * 100}>
              <div
                className={`bg-white rounded-xl p-6 shadow-sm border-l-4 hover:shadow-lg hover:-translate-y-1 hover:border-l-[6px] transition-all duration-300 ${borderColors[i % 3]}`}
              >
                <h3 className="font-semibold text-lg text-navy mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-cobalt font-medium text-sm hover:underline"
                >
                  Learn More →
                </Link>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT / DOCTOR ===== */}
      <section className="bg-[#E8EFFE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — portrait */}
            <ScrollReveal direction="left">
            <div className="relative">
              <div className="border-t-4 border-yellow rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/doctor_portrait.jpg"
                  alt="Dr. Caleb Saint Jean"
                  width={600}
                  height={700}
                  className="object-cover w-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            </ScrollReveal>

            {/* Right — bio */}
            <ScrollReveal direction="right" delay={200}>
            <div>
              <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
                Meet Your Doctor
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Dr. Caleb Saint Jean, O.D.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                With a passion for personalized eye care, Dr. Saint Jean brings
                both expertise and warmth to every patient interaction.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fluent in English, Spanish, and Haitian Creole, he&apos;s
                committed to making quality vision care accessible to our
                diverse St. Petersburg community.
              </p>
              <Link
                href="/about/doctors-staff"
                className="text-cobalt font-semibold hover:underline"
              >
                Meet Our Team →
              </Link>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== INTERIOR GALLERY ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Inside Our Practice
            </h2>
          </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4">
            {/* Tall image spanning 2 rows */}
            <ScrollReveal direction="up" delay={0} className="row-span-2">
            <div className="relative rounded-xl overflow-hidden min-h-[400px] lg:min-h-0 h-full group">
              <Image
                src="/images/interior_sun.webp"
                alt="Sunlit eyewear display"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
              <Image
                src="/images/interior_frames.webp"
                alt="Frame collection wall"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
              <Image
                src="/images/interior_equipment.webp"
                alt="Advanced eye care equipment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300}>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
              <Image
                src="/images/interior_shelves.webp"
                alt="Organized frame displays"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={400}>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
              <Image
                src="/images/interior_reception.webp"
                alt="Welcoming reception area"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== EYEWEAR ===== */}
      <section className="bg-yellow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <ScrollReveal direction="right">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                Designer Eyewear Collection
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                Curated frames from the world&apos;s most sought-after brands.
                Find your perfect pair with our expert stylists.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Gucci", "Ray-Ban", "Oakley", "Ray-Ban Meta", "Nuance Audio"].map(
                  (brand) => (
                    <span
                      key={brand}
                      className="bg-navy text-white rounded-full px-4 py-1.5 text-sm font-medium"
                    >
                      {brand}
                    </span>
                  )
                )}
              </div>
              <Link
                href="/vision-care/lenses-frames"
                className="text-navy font-semibold hover:underline"
              >
                Explore Our Collection →
              </Link>
            </ScrollReveal>

            {/* Right */}
            <ScrollReveal direction="left" delay={200}>
              <div className="grid grid-cols-2 gap-4">
              {[
                {
                  src: "/images/interior_gucci.webp",
                  alt: "Gucci frames display",
                },
                {
                  src: "/images/interior_raybans.webp",
                  alt: "Ray-Ban collection",
                },
                {
                  src: "/images/interior_smart.webp",
                  alt: "Smart eyewear technology",
                },
                {
                  src: "/images/interior_nuance.webp",
                  alt: "Nuance Audio frames",
                },
              ].map((img) => (
                <div
                  key={img.alt}
                  className="relative rounded-xl overflow-hidden aspect-square hover:scale-105 transition-transform duration-500"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                Advanced Technology
              </h2>
              <p className="text-gray-600 mb-8">
                We invest in cutting-edge diagnostic equipment to deliver
                precise, comfortable, and efficient eye care.
              </p>
              <div className="space-y-4">
                {techItems.map((item) => (
                  <div
                    key={item.title}
                    className={`bg-white rounded-xl p-5 border-l-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${item.border}`}
                  >
                    <h3 className="font-semibold text-navy mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right */}
            <ScrollReveal direction="left" delay={200} className="lg:col-span-2">
              <Image
                src="/images/interior_equipment.webp"
                alt="State-of-the-art diagnostic equipment"
                width={500}
                height={600}
                className="object-cover w-full rounded-2xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CONTACT / HOURS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — info card */}
            <ScrollReveal direction="right">
            <div className="bg-warm rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-navy mb-6">Visit Us</h2>
              <div className="mb-6">
                <p className="text-gray-700">1490 Central Ave</p>
                <p className="text-gray-700">St. Petersburg, FL 33705</p>
              </div>
              <p className="text-gray-700 font-semibold mb-8">
                (727) 800-2020
              </p>
              <div>
                {hours.map((row, i) => (
                  <div
                    key={row.day}
                    className={`flex justify-between py-3 ${
                      i < hours.length - 1
                        ? "border-b border-dotted border-gray-300"
                        : ""
                    }`}
                  >
                    <span className="text-gray-700">{row.day}</span>
                    <span className="text-gray-900 font-medium">
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>

            {/* Right — image + buttons */}
            <ScrollReveal direction="left" delay={200}>
            <div className="flex flex-col">
              <div className="rounded-2xl overflow-hidden mb-6 group">
                <Image
                  src="/images/exterior.webp"
                  alt="Eyes on Central exterior"
                  width={600}
                  height={400}
                  className="object-cover w-full rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://maps.google.com/?q=1490+Central+Ave+St+Petersburg+FL+33705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow text-navy rounded-full px-6 py-3 font-semibold hover:scale-105 hover:shadow-lg hover:opacity-90 transition-all duration-300"
                >
                  Get Directions
                </Link>
                <Link
                  href="/contact"
                  className="bg-cobalt text-white rounded-full px-6 py-3 font-semibold hover:scale-105 hover:shadow-lg hover:opacity-90 transition-all duration-300"
                >
                  Request Appointment
                </Link>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
