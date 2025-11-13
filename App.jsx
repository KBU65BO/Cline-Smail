import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ContactWidget from './components/ContactWidget.jsx'
import Home from './pages/Home.jsx'
import Service from './pages/Service.jsx'
import Staff from './pages/Staff.jsx'
import Facility from './pages/Facility.jsx'
import Testimonial from './pages/Testimonial.jsx'
import Contact from './pages/Contact.jsx'
import MapPage from './pages/Map.jsx'

function ScrollToTop(){
  const { pathname, hash } = useLocation()
  useEffect(() => {
    // Scroll to top or to hash
    if (hash){
      const el = document.querySelector(hash)
      if (el) { el.scrollIntoView({ behavior: 'smooth' }) }
      else window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])
  return null
}

export default function App(){
  return (
    <div className="app">
      <Header />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </main>
      <Footer />
      <ContactWidget />
    </div>
  )
}
