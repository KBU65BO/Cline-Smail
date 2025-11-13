import Reveal from '../components/Reveal.jsx'
import imgReception from '../assets/img/reception.png'
import imgSteril from '../assets/img/sterilization.png'
import imgTreatment from '../assets/img/treatment.png'
import imgXray from '../assets/img/xray.png'
import imgCT from '../assets/img/ct.png'
import imgLab from '../assets/img/lab.png'

export default function Facility(){
  return (
    <>
      <section className="page-hero small">
        <div className="container">
          <Reveal><h1>Our Facilities</h1></Reveal>
          <Reveal delay={1}><p>Bright, clean spaces designed for comfort and safety.</p></Reveal>
        </div>
      </section>

      <section className="container">
        <div className="grid three">
          <Reveal delay={1} as="figure" className="figure-card">
            <img src={imgReception} alt="Reception & Waiting Area" />
            <figcaption>Reception &amp; Waiting Area</figcaption>
          </Reveal>
          <Reveal delay={2} as="figure" className="figure-card">
            <img src={imgSteril} alt="Sterilization Room" />
            <figcaption>Dental Equipment Sterilization Room</figcaption>
          </Reveal>
          <Reveal delay={3} as="figure" className="figure-card">
            <img src={imgTreatment} alt="Treatment Room" />
            <figcaption>Treatment Rooms with modern dental chairs</figcaption>
          </Reveal>
          <Reveal delay={1} as="figure" className="figure-card">
            <img src={imgXray} alt="Digital X-ray" />
            <figcaption>Digital X-ray</figcaption>
          </Reveal>
          <Reveal delay={2} as="figure" className="figure-card">
            <img src={imgCT} alt="3D CT Imaging" />
            <figcaption>3D CT Imaging</figcaption>
          </Reveal>
          <Reveal delay={3} as="figure" className="figure-card">
            <img src={imgLab} alt="Prosthetics Lab" />
            <figcaption>Prosthetics Lab</figcaption>
          </Reveal>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <Reveal>
            <h2>Visit our clinic</h2>
            <p>See the map and nearby landmarks below.</p>
            <a className="btn" href="#/map">Get Directions</a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
