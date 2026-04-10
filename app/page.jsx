'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  const services = [
    {
      title: 'Comprehensive Eye Exams',
      description: 'Thorough vision and eye health evaluations using the latest diagnostic technology.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      href: '/vision-care/eye-exams',
    },
    {
      title: 'Contact Lens Fittings',
      description: 'Custom fittings for all types of contact lenses, including specialty lenses.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
          <circle cx="12" cy="12" r="8" strokeWidth={1.5} strokeDasharray="4 2" />
        </svg>
      ),
      href: '/vision-care/contact-lenses',
    },
    {
      title: 'Dry Eye Treatment',
      description: 'Advanced therapies to diagnose and treat chronic dry eye syndrome.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-4 4-7 8-7 11a7 7 0 1014 0c0-3-3-7-7-11z" />
        </svg>
      ),
      href: '/vision-care/dry-eye',
    },
    {
      title: 'Myopia Control',
      description: 'Specialized programs to slow the progression of nearsightedness in children.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v4M10 7h4" />
        </svg>
      ),
      href: '/vision-care/myopia-control',
    },
    {
      title: 'Designer Eyewear',
      description: 'Curated collection of premium frames from the world\'s finest brands.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="1" y="8" width="8" height="6" rx="2" strokeWidth={1.5} />
          <rect x="15" y="8" width="8" height="6" rx="2" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeWidth={1.5} d="M9 11h6" />
        </svg>
      ),
      href: '/vision-care/eyeglasses',
    },
    {
      title: 'Emergency Eye Care',
      description: 'Same-day appointments available for urgent eye conditions and injuries.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: '/contact',
    },
  ]

  const galleryImages = [
    { src: '/images/interior_lobby.webp', alt: 'Eyes on Central reception area' },
    { src: '/images/interior_frames.webp', alt: 'Designer eyewear display' },
    { src: '/images/interior_optical.webp', alt: 'Optical showroom' },
    { src: '/images/interior_equipment.webp', alt: 'Modern exam equipment' },
  ]

  return (
    <main>
      {/* Hero Section - Dark Navy */}
      <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5C518' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <ScrollReveal animation="fade-up">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow/10 border border-yellow/30 rounded-full text-yellow text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-yellow rounded-full animate-pulse" />
                  Now Accepting New Patients
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Your Vision,{' '}
                  <span className="text-yellow">Our Focus</span>
                </h1>
                
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Experience exceptional eye care in the heart of St. Petersburg. 
                  From comprehensive exams to designer eyewear, we&apos;re here to help you see life clearly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-yellow text-navy font-semibold rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-yellow/25 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Book an Appointment
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link 
                    href="/vision-care"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Our Services
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-white">5.0 Rating</div>
                        <div className="text-sm text-white/50">Google Reviews</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-cobalt/30 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-white">Same Day</div>
                        <div className="text-sm text-white/50">Appointments</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Image - Dr. Caleb Saint Jean */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/images/doctor_portrait.jpg"
                    alt="Dr. Caleb Saint Jean at Eyes on Central"
                    width={600}
                    height={700}
                    className="w-full h-[500px] lg:h-[600px] object-cover object-top"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  
                  {/* Doctor name overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-yellow text-sm font-medium mb-1">Lead Optometrist</p>
                    <h3 className="text-white text-2xl font-bold">Dr. Caleb Saint Jean, O.D.</h3>
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-xs">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cobalt/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-cobalt" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">Insurance Friendly</h3>
                      <p className="text-sm text-gray-500 mt-1">We accept most major vision insurance plans</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 right-12 w-32 h-32 bg-cobalt/30 rounded-full blur-3xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick Links Bar - Cobalt */}
      <section className="bg-cobalt py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {['Eye Exams', 'Contact Lenses', 'Designer Frames', 'Dry Eye', 'Emergency Care'].map((item) => (
              <Link 
                key={item} 
                href={`/vision-care/${item.toLowerCase().replace(' ', '-')}`}
                className="text-white/80 hover:text-yellow transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Dr. Saint Jean Section */}
      <section className="py-24 bg-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl border-t-4 border-yellow">
                  <Image
                    src="/images/doctor_consulting.jpg"
                    alt="Dr. Caleb Saint Jean consulting with a patient"
                    width={600}
                    height={500}
                    className="w-full h-[450px] object-cover"
                  />
                </div>
                {/* Credentials Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-navy">Board Certified</div>
                      <div className="text-sm text-gray-500">Doctor of Optometry</div>
                    </div>
                  </div>
                </div>
                {/* Decorative */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-cobalt/10 rounded-full blur-3xl" />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div>
                <span className="inline-block px-4 py-1 bg-navy/10 text-navy rounded-full text-sm font-medium mb-4">
                  Meet Your Doctor
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                  Dr. Caleb Saint Jean, O.D.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Dr. Caleb Saint Jean is the lead optometrist at Eyes on Central, bringing a passion for personalized eye care and a commitment to clinical excellence. He provides comprehensive eye examinations, manages ocular disease, and specializes in fitting contact lenses and prescribing specialty eyewear.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Dr. Saint Jean is dedicated to making high-quality vision care accessible to all members of the St. Petersburg community. His warm, patient-first approach ensures that every visit is thorough, comfortable, and tailored to individual needs.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['English', 'Spanish', 'Haitian Creole'].map((lang) => (
                    <span key={lang} className="px-4 py-2 bg-cobalt/10 text-cobalt rounded-full text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
                <Link 
                  href="/about/doctors-staff"
                  className="inline-flex items-center px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-cobalt transition-colors"
                >
                  Learn More About Dr. Saint Jean
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section - White */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-cobalt/10 text-cobalt rounded-full text-sm font-medium mb-4">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                Comprehensive Vision Care
              </h2>
              <p className="text-gray-600 text-lg">
                From routine check-ups to specialized treatments, we offer a full range of optometry services to keep your eyes healthy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} animation="fade-up" delay={index * 100}>
                <Link href={service.href} className="group block h-full">
                  <div className="h-full p-8 bg-warm rounded-xl border border-gray-100 hover:border-cobalt/20 hover:shadow-xl hover:shadow-cobalt/5 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-16 h-16 bg-navy/10 rounded-lg flex items-center justify-center text-navy mb-6 group-hover:bg-navy group-hover:text-yellow transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-cobalt transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center text-cobalt font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eyewear Section - Navy */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <span className="inline-block px-4 py-1 bg-yellow/20 text-yellow rounded-full text-sm font-medium mb-4">
                  Designer Eyewear
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Curated Collection of Premium Frames
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Discover our hand-selected collection of designer eyewear from the world&apos;s most prestigious brands. Each frame is chosen for its quality, style, and craftsmanship.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl font-bold text-yellow mb-1">500+</div>
                    <div className="text-sm text-white/60">Frame Styles</div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl font-bold text-yellow mb-1">50+</div>
                    <div className="text-sm text-white/60">Designer Brands</div>
                  </div>
                </div>
                <Link 
                  href="/vision-care/lenses-frames"
                  className="inline-flex items-center px-6 py-3 bg-yellow text-navy font-semibold rounded-full hover:bg-white transition-colors"
                >
                  Explore Our Collection
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/images/interior_gucci.webp"
                      alt="Gucci frames display"
                      width={300}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/images/interior_raybans.webp"
                      alt="Ray-Ban collection"
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/images/interior_nuance.webp"
                      alt="Designer frames"
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/images/interior_sun.webp"
                      alt="Sunglasses collection"
                      width={300}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery Section - White */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-yellow/20 text-yellow-700 rounded-full text-sm font-medium mb-4">
                Our Space
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                A Modern, Welcoming Environment
              </h2>
              <p className="text-gray-600 text-lg">
                Our newly designed office combines cutting-edge technology with a warm, comfortable atmosphere.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <ScrollReveal key={image.src} animation="fade-up" delay={index * 100}>
                <div className="group relative rounded-xl overflow-hidden aspect-[4/5]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section - Cobalt */}
      <section className="py-24 bg-cobalt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                Advanced Technology
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                State-of-the-Art Diagnostic Equipment
              </h2>
              <p className="text-white/70 text-lg">
                We invest in the latest technology to provide you with the most accurate diagnoses and effective treatments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Retinal Imaging',
                description: 'High-resolution imaging of your retina for early detection of eye diseases.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'OCT Scanning',
                description: 'Cross-sectional imaging of the retina layers for precise diagnosis.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                ),
              },
              {
                title: 'Corneal Topography',
                description: 'Detailed mapping of your cornea for perfect contact lens fits.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
              },
            ].map((tech, index) => (
              <ScrollReveal key={tech.title} animation="fade-up" delay={index * 100}>
                <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                  <div className="w-16 h-16 bg-yellow/20 rounded-lg flex items-center justify-center text-yellow mx-auto mb-6">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                  <p className="text-white/70">{tech.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section - Yellow */}
      <section className="py-24 bg-yellow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div className="text-navy">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Ready to See the Difference?
                </h2>
                <p className="text-navy/70 text-lg mb-8">
                  Schedule your comprehensive eye exam today and experience the Eyes on Central difference. We&apos;re here to help you achieve your best vision.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">612 Central Avenue</div>
                      <div className="text-navy/60">St. Petersburg, FL 33701</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">(727) 800-2020</div>
                      <div className="text-navy/60">Call or Text</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Mon-Fri: 9am - 6pm</div>
                      <div className="text-navy/60">Sat: 9am - 2pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-navy mb-6">Book Your Appointment</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt transition-colors"
                      placeholder="(727) 555-1234"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="eye-exam">Comprehensive Eye Exam</option>
                      <option value="contacts">Contact Lens Fitting</option>
                      <option value="dry-eye">Dry Eye Consultation</option>
                      <option value="glasses">Eyeglasses Fitting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-navy text-white font-semibold rounded-lg hover:bg-cobalt transition-colors"
                  >
                    Request Appointment
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
