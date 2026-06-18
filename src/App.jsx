import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import TrustSection from './components/TrustSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
