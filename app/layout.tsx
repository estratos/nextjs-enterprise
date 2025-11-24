import "styles/tailwind.css"
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Header } from '../components/layout/header'
import { Footer } from '../components/layout/footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Empresa TI - Soluciones Tecnológicas Innovadoras',
    template: '%s | Empresa TI'
  },
  description: 'Somos su partner tecnológico especializado en desarrollo de software, cloud computing y transformación digital.',
  keywords: ['desarrollo software', 'cloud computing', 'consultoría TI', 'transformación digital'],
  authors: [{ name: 'Empresa TI' }],
  openGraph: {
    title: 'Empresa TI - Soluciones Tecnológicas',
    description: 'Partner tecnológico especializado en desarrollo de software y cloud computing',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.className}>
      <body className="min-h-screen bg-white">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}