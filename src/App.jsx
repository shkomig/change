import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import TechStack from './components/TechStack'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
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
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
