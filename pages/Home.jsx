import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useLightbox } from '../components/LightboxProvider.jsx'
import Reveal from '../components/Reveal.jsx'
import heroImg from '../assets/img/hero.png'
import svcGeneral from '../assets/img/service-general.png'
import svcCosmetic from '../assets/img/service-cosmetic.png'
import svcImplant from '../assets/img/service-implant.png'
import imgReception from '../assets/img/reception.png'
import imgSteril from '../assets/img/sterilization.png'
import imgTreatment from '../assets/img/treatment.png'
import imgXray from '../assets/img/xray.png'
import imgCT from '../assets/img/ct.png'
import imgLab from '../assets/img/lab.png'
import imgMap from '../assets/img/map.png'
import sCherry from '../assets/img/staff-cherry.png'
import sCherryAlt from '../assets/img/staff-arisza2.png'
import sTob from '../assets/img/staff-tob.png'
import sAe from '../assets/img/staff-ae.png'
import sNung from '../assets/img/staff-nung.png'
import sBoy from '../assets/img/staff-boy.png'
import sGui from '../assets/img/staff-gui.png'

const featuredDentists = [
  {
    img: sCherryAlt,
    name: 'Dr. Patcharin Nanthaekaphong (Dr. Cherry)',
    role: 'Prosthodontist & Implant Dentist',
    bullets: [
      'DDS (Hons), Mahidol University',
      'M.Sc. Prosthodontics, Mahidol University',
      'Certificates in Surgical & Prosthetic Implant Dentistry'
    ]
  },
  {
    img: sTob,
    name: 'Dr. Pabhinvitch Vipatbovonwong (Dr. Tob)',
    role: 'Orthodontist',
    bullets: [
      'DDS, Khon Kaen University',
      'M.Sc. Orthodontics, Khon Kaen University'
    ]
  },
  {
    img: sAe,
    name: 'Dr. Assawinee Thimsang (Dr. Ae)',
    role: 'Periodontist',
    bullets: [
      'DDS (Hons), Mahidol University',
      'M.Sc. Periodontics, Mahidol University'
    ]
  },
  {
    img: sNung,
    name: 'Dr. Surpun Srikume (Dr. Nung)',
    role: 'Endodontist',
    bullets: [
      'DDS (Hons), Srinakharinwirot University',
      'M.Sc. Endodontics, Srinakharinwirot University'
    ]
  },
  {
    img: sBoy,
    name: 'Dr. Woradet Phichaiutkrit (Dr. Boy)',
    role: 'Advanced General Dentistry',
    bullets: [
      'DDS, Mahidol University',
      'M.Sc. General Dentistry, Khon Kaen University'
    ]
  },
  {
    img: sGui,
    name: 'Dr. Chaichan Sangsirinakagul (Dr. Gui)',
    role: 'Advanced General Dentistry',
    bullets: [
      'DDS, Khon Kaen University',
      'M.Sc. General Dentistry, Khon Kaen University'
    ]
  }
]

export default function Home(){
  const { openLightbox } = useLightbox()
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
            <img src={heroImg} alt="Dental Smile Pattaya" onClick={() => openLightbox(heroImg, 'Dental Smile Pattaya')} />
          </Reveal>
        </div>
      </section>

      <section className="hero-banner">
        <div className="container">
            <div className="hero-banner-inner">
            <img src="/clinic.jpg" alt="Dental consultation" onClick={() => openLightbox('/clinic.jpg', 'Dental consultation')} />
          </div>
        </div>
      </section>

      <section className="focus">
        <div className="container">
          <Reveal><h2>Our service areas</h2></Reveal>
          <div className="grid three">
            <Reveal as={Link} to="/service#general" delay={1} className="tile">
              <img src={svcGeneral} alt="General dentistry" onClick={() => openLightbox(svcGeneral, 'General Dentistry')} />
              <div>
                <h3>General Dentistry</h3>
                <p>Check-up, cleaning &amp; polishing, fillings, fluoride and preventive care.</p>
                <span className="tile-cta">Explore</span>
              </div>
            </Reveal>
            <Reveal as={Link} to="/service#cosmetic" delay={2} className="tile">
              <img src={svcCosmetic} alt="Cosmetic and restoration" onClick={() => openLightbox(svcCosmetic, 'Cosmetic & Restoration')} />
              <div>
                <h3>Cosmetic &amp; Restoration</h3>
                <p>Crowns, bridges, veneers and smile makeovers to enhance function &amp; aesthetics.</p>
                <span className="tile-cta">Explore</span>
              </div>
            </Reveal>
            <Reveal as={Link} to="/service#implant" delay={3} className="tile">
              <img src={svcImplant} alt="Dental implant" onClick={() => openLightbox(svcImplant, 'Dental Implants')} />
              <div>
                <h3>Dental Implants</h3>
                <p>Single tooth to full-arch options including All‑on‑4 concepts.</p>
                <span className="tile-cta">Explore</span>
              </div>
            </Reveal>
          </div>
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

      <section className="facility-gallery">
        <div className="container">
          <Reveal><h2>Our Facilities</h2></Reveal>
          <div className="grid three facility-grid">
            <Reveal delay={1} as="figure" className="figure-card">
              <img src={imgReception} alt="Reception & Waiting Area" onClick={() => openLightbox(imgReception, 'Reception & Waiting Area')} />
              <figcaption>Reception &amp; Waiting Area</figcaption>
            </Reveal>
            <Reveal delay={2} as="figure" className="figure-card">
              <img src={imgSteril} alt="Sterilization Room" onClick={() => openLightbox(imgSteril, 'Sterilization Room')} />
              <figcaption>Sterilization Room</figcaption>
            </Reveal>
            <Reveal delay={3} as="figure" className="figure-card">
              <img src={imgTreatment} alt="Treatment Room" onClick={() => openLightbox(imgTreatment, 'Treatment Room')} />
              <figcaption>Treatment Room</figcaption>
            </Reveal>
            <Reveal delay={1} as="figure" className="figure-card">
              <img src={imgXray} alt="Digital X-ray" onClick={() => openLightbox(imgXray, 'Digital X-ray')} />
              <figcaption>Digital X-ray</figcaption>
            </Reveal>
            <Reveal delay={2} as="figure" className="figure-card">
              <img src={imgCT} alt="3D CT Imaging" onClick={() => openLightbox(imgCT, '3D CT Imaging')} />
              <figcaption>3D CT Imaging</figcaption>
            </Reveal>
            <Reveal delay={3} as="figure" className="figure-card">
              <img src={imgLab} alt="Prosthetics Lab" onClick={() => openLightbox(imgLab, 'Prosthetics Lab')} />
              <figcaption>Prosthetics Lab</figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="team-highlight">
        <div className="container">
          <Reveal><h2>Our Dentist Team</h2></Reveal>
          <Reveal delay={1}><p>English-speaking specialists across every branch of dentistry, ready to take care of your smile.</p></Reveal>
          <div className="staff-highlight">
            {featuredDentists.map((doc, i) => (
              <Reveal key={doc.name} delay={(i % 3) + 1} className="profile-card">
                <figure>
                  <img
                    src={doc.img}
                    alt={doc.name}
                    onClick={() => openLightbox(doc.img, doc.name)}
                    style={{ cursor: 'pointer' }}
                  />
                </figure>
                <h3>{doc.name}</h3>
                <p className="muted">{doc.role}</p>
                <ul className="bullets">
                  {doc.bullets.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <div className="team-highlight__cta">
            <Link to="/staff" className="btn">Meet the full team</Link>
          </div>
        </div>
      </section>

      <section className="home-map">
        <div className="container">
          <Reveal><h2>Map &amp; Directions</h2></Reveal>
          <Reveal delay={1}><p>Find us easily—near Walking Street (≈700 m) and TukCom (≈300 m).</p></Reveal>
          <Reveal className="map-wrap card" delay={1}>
            <iframe title="Dental Smile Pattaya Map" width="100%" height="360" loading="lazy" style={{border:0}}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=12.9220523,100.882001&z=16&output=embed"></iframe>
          </Reveal>
          <div className="grid two landmarks">
            <Reveal delay={1} className="card">
              <h3>Coordinates</h3>
              <p><strong>Lat/Lng:</strong> 12.9220523, 100.882001</p>
              <img src={imgMap} alt="Street view near clinic" onClick={() => openLightbox(imgMap, 'Clinic location street view')} style={{cursor:'pointer'}} />
            </Reveal>
            <Reveal delay={2} className="card">
              <h3>Nearby landmarks</h3>
              <ul className="bullets">
                <li>TukCom (IT &amp; Mobile mall) ~300 m</li>
                <li>Walking Street Pattaya ~700 m</li>
                <li>Pattaya Beach ~700 m</li>
                <li>Royal Garden Plaza ~750 m</li>
                <li>Central Festival Pattaya Beach ~2 km</li>
                <li>Sukhumvit Road ~2 km</li>
                <li>Suvarnabhumi Bangkok Airport ~120 km</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* lightbox is provided globally by LightboxProvider */}

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


