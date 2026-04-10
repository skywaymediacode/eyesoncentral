import Link from "next/link";

export const metadata = {
  title: "Emergency Eye Exams | Eyes on Central",
  description:
    "Same-day emergency eye care at Eyes on Central in St. Petersburg, FL. Urgent treatment for eye injuries, sudden vision changes, infections, and more.",
};

const emergencyConditions = [
  "Sudden vision loss or blurry vision",
  "Eye injuries from foreign objects or trauma",
  "Chemical splashes or burns to the eye",
  "Sudden onset of flashes or floaters",
  "Severe eye pain or pressure",
  "Red, swollen, or infected eyes",
  "Contact lens complications",
  "Scratched cornea (corneal abrasion)",
];

const whenToSeek = [
  {
    title: "Sudden Vision Changes",
    description:
      "Any sudden decrease in vision, partial vision loss, or appearance of dark spots or curtain-like shadows requires immediate evaluation to rule out retinal detachment or other serious conditions.",
    border: "border-cobalt",
  },
  {
    title: "Eye Trauma or Injury",
    description:
      "Blunt force, sharp objects, or flying debris can cause serious damage to the eye structures. Do not rub the eye or attempt to remove embedded objects. Seek care right away.",
    border: "border-yellow",
  },
  {
    title: "Chemical Exposure",
    description:
      "If chemicals splash into your eye, flush with clean water for at least 15 minutes and then call us or go to the nearest emergency room immediately.",
    border: "border-teal",
  },
  {
    title: "Flashes & Floaters",
    description:
      "A sudden increase in floaters, especially accompanied by flashes of light or a shadow in your peripheral vision, could indicate a retinal tear or detachment.",
    border: "border-cobalt",
  },
];

export default function EmergencyExamsPage() {
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
                <Link href="/vision-care" className="hover:underline">
                  Vision Care
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy font-medium">Emergency Exams</li>
            </ol>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-cobalt mb-4">
            Vision Care
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Emergency Eye Exams
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Eye emergencies can happen without warning. Eyes on Central offers
            same-day emergency appointments to diagnose and treat urgent eye
            conditions quickly and effectively.
          </p>
        </div>
      </section>

      {/* ===== SAME-DAY CARE ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Same-Day Emergency Appointments
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  When you experience an eye emergency, time matters. Our team
                  reserves appointment slots each day specifically for urgent
                  cases. Call us as soon as symptoms appear and we will work
                  to see you the same day.
                </p>
                <p>
                  Our office is equipped with the diagnostic tools needed to
                  assess and treat a wide range of emergency conditions,
                  including digital retinal imaging, slit lamp examination, and
                  tonometry. Many emergency situations can be managed right
                  here, avoiding a costly trip to the emergency room.
                </p>
              </div>
            </div>

            <div className="bg-warm rounded-2xl p-8 border-t-4 border-yellow">
              <h3 className="text-xl font-bold text-navy mb-4">
                Conditions We Treat Urgently
              </h3>
              <ul className="space-y-3">
                {emergencyConditions.map((condition) => (
                  <li key={condition} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cobalt mt-2 shrink-0" />
                    <span className="text-gray-600">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHEN TO SEEK CARE ===== */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              When to Seek Emergency Eye Care
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Knowing when to seek urgent care can protect your vision and
              prevent lasting damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whenToSeek.map((item) => (
              <div
                key={item.title}
                className={`bg-white rounded-xl p-8 border-l-4 ${item.border}`}
              >
                <h3 className="font-semibold text-xl text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT TO DO ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              What to Do in an Eye Emergency
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Stay calm and avoid rubbing or pressing on the injured eye. If
                a foreign object is embedded, do not attempt to remove it. For
                chemical exposure, flush the eye with clean water for at least
                15 minutes before seeking care.
              </p>
              <p>
                Call our office immediately. Our staff will guide you on the
                best next steps and schedule you for the earliest available
                appointment. If your emergency occurs outside office hours and
                you believe it is sight-threatening, please go to your nearest
                emergency room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#E8EFFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Need Urgent Eye Care?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Do not wait. Call Eyes on Central for a same-day emergency eye
            appointment. We are here to protect your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow text-navy rounded-full px-8 py-3 font-semibold hover:opacity-90 transition"
          >
            Call for an Emergency Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
