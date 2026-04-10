import Link from "next/link";

export const metadata = {
  title: "Vision Care Services | Eyes on Central",
  description:
    "Explore our full range of vision care services in St. Petersburg, FL. From comprehensive eye exams and designer eyewear to specialty treatments for dry eye, myopia, and more.",
};

const services = [
  {
    title: "Comprehensive Eye Exams",
    href: "/vision-care/eye-exams",
    description:
      "Thorough evaluations of your eye health and vision using state-of-the-art diagnostic technology.",
    border: "border-cobalt",
  },
  {
    title: "Lenses & Frames",
    href: "/vision-care/lenses-frames",
    description:
      "Designer frames and premium lens options from the world's top eyewear brands.",
    border: "border-yellow",
  },
  {
    title: "Contact Lenses",
    href: "/vision-care/contacts",
    description:
      "Custom-fit contact lenses for every lifestyle, from daily disposables to specialty lenses.",
    border: "border-teal",
  },
  {
    title: "Dry Eye Treatment",
    href: "/vision-care/dry-eye",
    description:
      "Advanced diagnosis and treatment options to restore comfort and healthy tear function.",
    border: "border-cobalt",
  },
  {
    title: "Myopia Control",
    href: "/vision-care/myopia-control",
    description:
      "Specialized programs to slow myopia progression in children using the latest lens technologies.",
    border: "border-yellow",
  },
  {
    title: "Neurolens",
    href: "/vision-care/neurolens",
    description:
      "Innovative contoured prism lenses to relieve digital eye strain, headaches, and neck pain.",
    border: "border-teal",
  },
  {
    title: "Pediatric Eye Care",
    href: "/vision-care/pediatric",
    description:
      "Gentle, thorough vision care designed for infants, children, and teens.",
    border: "border-cobalt",
  },
  {
    title: "Emergency Eye Exams",
    href: "/vision-care/emergency-exams",
    description:
      "Urgent eye care when you need it most, with same-day appointments available.",
    border: "border-yellow",
  },
  {
    title: "Eye Disease Management",
    href: "/vision-care/eye-disease",
    description:
      "Expert monitoring and treatment of glaucoma, cataracts, macular degeneration, and other conditions.",
    border: "border-teal",
  },
];

export default function VisionCarePage() {
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
              <li className="text-navy font-medium">Vision Care</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Vision Care Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            From routine eye exams to specialized treatments, Eyes on Central
            provides comprehensive vision care for patients of all ages in
            St.&nbsp;Petersburg, FL.
          </p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Comprehensive Care Under One Roof
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At Eyes on Central, we offer a complete range of vision care
                services to keep your eyes healthy and your vision clear.
                Whether you need a routine check-up, new glasses or contacts,
                or specialized treatment for a specific condition, our
                experienced team is here to help.
              </p>
              <p>
                Every patient receives personalized attention in our modern,
                welcoming office on Central Avenue. We use advanced diagnostic
                technology to provide accurate assessments and develop tailored
                treatment plans that fit your lifestyle and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE GRID ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Explore Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select a service below to learn more about how we can help you
              see your best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group bg-white rounded-xl p-8 border-l-4 ${service.border} hover:shadow-md transition`}
              >
                <h3 className="font-semibold text-xl text-navy mb-3 group-hover:text-cobalt transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-cobalt text-sm font-semibold">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our team is here to help you achieve and maintain clear, comfortable
            vision. Book your appointment today.
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
