import { Plus_Jakarta_Sans, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
})

export const metadata = {
  title: 'Eyes on Central | Optometry in St. Petersburg, FL',
  description: 'Comprehensive eye care in the heart of St. Petersburg. Eye exams, designer eyewear, contact lenses, and specialty vision services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${bricolage.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-white">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
