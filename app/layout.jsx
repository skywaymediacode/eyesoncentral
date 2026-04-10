import { Poppins } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Eyes on Central | Optometry in St. Petersburg, FL',
  description: 'Comprehensive eye care in the heart of St. Petersburg. Eye exams, designer eyewear, contact lenses, and specialty vision services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased text-gray-900 bg-white">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
