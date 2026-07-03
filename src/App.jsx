import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import TechStack from './components/TechStack'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import GiftSection from './components/GiftSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import KidsFilterPage from './pages/KidsFilterPage'

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return hash
}

export default function App() {
  const hash = useHashRoute()

  if (hash === '#/kidsfilter') {
    return <KidsFilterPage />
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <TechStack />
        <Process />
        <About />
        <Contact />
        <GiftSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
