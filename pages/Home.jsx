import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import heroImg from '../assets/img/hero.png'
import svcGeneral from '../assets/img/service-general.png'
import svcCosmetic from '../assets/img/service-cosmetic.png'
import svcImplant from '../assets/img/service-implant.png'

export default function Home(){
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <Reveal delay={1} className="hero-copy">
            <h1>Confident, healthy smiles</h1>
            <p>Comprehensive dental care in Pattaya—cosmetic, implants and general dentistry—delivered by an experienced, English-speaking team.</p>
            <div className="hero-cta">
              <Link to="/service" className="btn primary pulse">View Services</Link>
              <Link to="/contact" className="btn">Book an Appointment</Link>
            </div>
            <ul className="badges">
              <li>18+ years experience</li>
              <li>5,000+ patients annually</li>
              <li>Treatment warranty</li>
            </ul>
          </Reveal>
          <Reveal delay={2} className="hero-media">
            <img src={heroImg} alt="Dental Smile Pattaya" />
          </Reveal>
        </div>
      </section>

      <section className="why">
        <div className="container">
          <Reveal><h2>Why choose us</h2></Reveal>
          <div className="grid three">
            <Reveal delay={1} className="card">
              <h3>Affordable quality</h3>
              <p>Significant savings—often 50–70% compared to local prices—without compromising standards.</p>
            </Reveal>
            <Reveal delay={2} className="card">
              <h3>One-stop clinic</h3>
              <p>From check-ups to veneers, crowns, implants and whitening, everything under one roof.</p>
            </Reveal>
            <Reveal delay={3} className="card">
              <h3>Experienced team</h3>
              <p>Caring dentists with international training and up-to-date technology.</p>
            </Reveal>
            <Reveal delay={1} className="card">
              <h3>Patient-first</h3>
              <p>We focus on comfort, hygiene, and long‑term oral health—so you walk away smiling.</p>
            </Reveal>
            <Reveal delay={2} className="card">
              <h3>Modern technology</h3>
              <p>3D imaging (CT), advanced sterilization and proven materials.</p>
            </Reveal>
            <Reveal delay={3} className="card">
              <h3>Treatment warranty</h3>
              <p>Peace of mind with aftercare and clear guarantees for eligible treatments.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="focus">
        <div className="container">
          <Reveal><h2>Our service areas</h2></Reveal>
          <div className="grid three">
            <Reveal as={Link} to="/service#general" delay={1} className="tile">
              <img src={svcGeneral} alt="General dentistry" />
              <div>
                <h3>General Dentistry</h3>
                <p>Check-up, cleaning &amp; polishing, fillings, fluoride and preventive care.</p>
                <span className="tile-cta">Explore</span>
              </div>
            </Reveal>
            <Reveal as={Link} to="/service#cosmetic" delay={2} className="tile">
              <img src={svcCosmetic} alt="Cosmetic and restoration" />
              <div>
                <h3>Cosmetic &amp; Restoration</h3>
                <p>Crowns, bridges, veneers and smile makeovers to enhance function &amp; aesthetics.</p>
                <span className="tile-cta">Explore</span>
              </div>
            </Reveal>
            <Reveal as={Link} to="/service#implant" delay={3} className="tile">
              <img src={svcImplant} alt="Dental implant" />
              <div>
                <h3>Dental Implants</h3>
                <p>Single tooth to full-arch options including All‑on‑4 concepts.</p>
                <span className="tile-cta">Explore</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <Reveal>
            <h2>Ready for a brighter smile?</h2>
            <p>Send us your x-rays/photos and we’ll reply within 48 hours.</p>
            <Link to="/contact" className="btn primary">Contact Us</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}


