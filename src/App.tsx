import Nav from './components/Nav'
import Hero from './components/Hero'
import LogoCloud from './components/LogoCloud'
import Platform from './components/Platform'
import HowItWorks from './components/HowItWorks'
import Security from './components/Security'
import Integrations from './components/Integrations'
import Metrics from './components/Metrics'
import Testimonial from './components/Testimonial'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#platform"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-iris-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <LogoCloud />
        <Platform />
        <HowItWorks />
        <Security />
        <Integrations />
        <Metrics />
        <Testimonial />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
