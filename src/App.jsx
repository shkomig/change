import { useEffect } from 'react'
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

export default function App() {
  const isKidsFilter = window.location.pathname === '/kidsfilter' || window.location.hash === '#/kidsfilter'

  useEffect(() => {
    if (window.location.hash === '#/kidsfilter') {
      window.history.replaceState({}, '', '/kidsfilter')
    }

    if (isKidsFilter) {
      document.title = 'סינון תכנים לילדים במחשב — ערכה חינמית | Change Digital Solutions'
      document.querySelector('meta[name="description"]')?.setAttribute('content', 'ערכת סינון תכנים חינמית למחשב הילדים, עם הסבר התקנה מלא בעברית וללא מנוי.')
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://change-digital.co.il/kidsfilter')
    }
  }, [isKidsFilter])

  if (isKidsFilter) {
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
