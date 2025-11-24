// Usa rutas relativas temporalmente
import { Hero } from '../components/sections/hero'
import { Services } from '../components/sections/services'
import { Solutions } from '../components/sections/solutions'
import { Technologies } from '../components/sections/technologies'
import { Testimonials } from '../components/sections/testimonials'
import { CTA } from '../components/sections/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  )
}