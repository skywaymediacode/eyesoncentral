import Link from "next/link";

export const metadata = {
  title: "Contact Us | Eyes on Central",
  description:
    "Contact Eyes on Central at (727) 800-2020 or visit us at 1490 Central Ave, St. Petersburg, FL 33705. Mon-Fri 9 AM-5:30 PM, Sat 10 AM-2 PM. Schedule your eye care appointment today.",
};

const hours = [
  { day: "Monday", time: "9:00 AM \u2013 5:30 PM" },
  { day: "Tuesday", time: "9:00 AM \u2013 5:30 PM" },
  { day: "Wednesday", time: "9:00 AM \u2013 5:30 PM" },
  { day: "Thursday", time: "9:00 AM \u2013 5:30 PM" },
  { day: "Friday", time: "9:00 AM \u2013 5:30 PM" },
  { day: "Saturday", time: "10:00 AM \u2013 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
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
              <li className="text-navy font-medium">Contact</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            We&apos;d love to hear from you. Whether you need to schedule an
            appointment, have a question about your care, or want to learn
            more about our services, our team is here to help.
          </p>
        </div>
      </section>

      {/* ===== CONTACT INFO + HOURS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Address Card */}
            <div className="bg-warm rounded-xl p-8 border-l-4 border-cobalt">
              <h2 className="font-semibold text-xl text-navy mb-4">
                Our Location
              </h2>
              <address className="not-italic text-gray-600 leading-relaxed space-y-2">
                <p className="font-semibold text-navy">Eyes on Central</p>
                <p>1490 Central Ave</p>
                <p>St. Petersburg, FL 33705</p>
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1490+Central+Ave+St+Petersburg+FL+33705"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-cobalt text-sm font-semibold hover:underline"
              >
                Get Directions &rarr;
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-warm rounded-xl p-8 border-l-4 border-yellow">
              <h2 className="font-semibold text-xl text-navy mb-4">
                Phone
              </h2>
              <a
                href="tel:+17278002020"
                className="text-2xl font-bold text-navy hover:text-cobalt transition-colors"
              >
                (727) 800-2020
              </a>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                Call us to schedule an appointment, ask about insurance, or
                get answers to your questions. We speak English, Spanish, and
                Haitian Creole.
              </p>
            </div>

            {/* Hours Card */}
            <div className="bg-warm rounded-xl p-8 border-l-4 border-teal">
              <h2 className="font-semibold text-xl text-navy mb-4">
                Office Hours
              </h2>
              <dl className="space-y-2">
                {hours.map((row) => (
                  <div key={row.day} className="flex justify-between text-sm">
                    <dt className="text-gray-600">{row.day}</dt>
                    <dd
                      className={`font-medium ${row.time === "Closed" ? "text-gray-400" : "text-navy"}`}
                    >
                      {row.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP + CONTACT FORM ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Find Us
              </h2>
              <div className="rounded-xl overflow-hidden shadow-sm">
                <iframe
                  title="Eyes on Central location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.574!2d-82.6672!3d27.7706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e17e5f3b8e3d%3A0x0!2s1490+Central+Ave%2C+St.+Petersburg%2C+FL+33705!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-lg text-navy mb-3">
                  Directions &amp; Parking
                </h3>
                <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
                  <p>
                    We are located on Central Avenue between 15th Street and
                    14th Street in the heart of St. Petersburg. Our office is
                    easily accessible from both I-275 and US-19.
                  </p>
                  <p>
                    Free parking is available directly in front of our office
                    and in the adjacent lot. Accessible parking spaces are
                    available near the entrance.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Send Us a Message
              </h2>
              <form className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-cobalt space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="(727) 555-0123"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-transparent resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow text-navy rounded-full px-8 py-3 font-semibold hover:opacity-90 transition text-center"
                >
                  Send Message
                </button>

                <p className="text-gray-400 text-xs text-center">
                  We typically respond within one business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Prefer to Call?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our friendly staff is available during office hours to help you
            schedule your appointment and answer any questions.
          </p>
          <a
            href="tel:+17278002020"
            className="inline-block bg-yellow text-navy rounded-full px-8 py-3 font-semibold hover:opacity-90 transition"
          >
            Call (727) 800-2020
          </a>
        </div>
      </section>
    </>
  );
}
