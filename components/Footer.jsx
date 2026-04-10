import Link from "next/link";

const visionCareLinks = [
  { label: "Eye Exams", href: "/vision-care/eye-exams" },
  { label: "Lenses & Frames", href: "/vision-care/lenses-frames" },
  { label: "Contact Lenses", href: "/vision-care/contact-lenses" },
  { label: "Dry Eye Treatment", href: "/vision-care/dry-eye-treatment" },
  { label: "Myopia Control", href: "/vision-care/myopia-control" },
  { label: "Neurolens", href: "/vision-care/neurolens" },
  { label: "Pediatric Eye Care", href: "/vision-care/pediatric-eye-care" },
  { label: "Emergency Eye Exams", href: "/vision-care/emergency-eye-exams" },
  { label: "Eye Disease Management", href: "/vision-care/eye-disease-management" },
];

const patientLinks = [
  { label: "Insurance", href: "/patients/insurance" },
  { label: "Patient Forms", href: "/patients/forms" },
  { label: "Financing", href: "/patients/financing" },
  { label: "Promotions", href: "/promotions" },
];

const aboutLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Doctors & Staff", href: "/about/doctors-staff" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D2B6E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Eyes on Central
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Comprehensive eye care in the heart of St. Petersburg. Serving our
              community with personalized vision solutions for over 35 years.
            </p>
            <p className="text-white/80 text-sm mb-1">
              1490 Central Ave, St. Petersburg, FL 33705
            </p>
            <p className="text-white/80 text-sm">
              <a
                href="tel:7278002020"
                className="hover:text-[#F5C518] transition-colors"
              >
                (727) 800-2020
              </a>
            </p>
          </div>

          {/* Column 2 - Vision Care */}
          <div>
            <h4 className="text-white font-semibold mb-4">Vision Care</h4>
            <ul className="space-y-2">
              {visionCareLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-sm hover:text-[#F5C518] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Patients */}
          <div>
            <h4 className="text-white font-semibold mb-4">Patients</h4>
            <ul className="space-y-2">
              {patientLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-sm hover:text-[#F5C518] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - About */}
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-sm hover:text-[#F5C518] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/80 text-sm">
            &copy; 2026 Eyes on Central. All rights reserved.
          </p>
          <p className="text-white/80 text-sm">
            Powered by vision, driven by care.
          </p>
        </div>
      </div>
    </footer>
  );
}
