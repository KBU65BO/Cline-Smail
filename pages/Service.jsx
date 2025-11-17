import Reveal from '../components/Reveal.jsx'
import { useLightbox } from '../components/LightboxProvider.jsx'
import imgGeneral from '../assets/img/service-general.png'
import imgCosmetic from '../assets/img/service-cosmetic.png'
import imgImplant from '../assets/img/service-implant.png'

function PriceTable({ rows }){
  return (
    <div className="table-wrap">
      <table>
        <thead><tr><th>Item</th><th className="t-right">Rate (THB)</th><th>Unit</th></tr></thead>
        <tbody>
          {rows.map((r,i)=>(
            <tr key={i}><td>{r.item}</td><td className="t-right">{r.rate}</td><td>{r.unit}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Service(){
  const { openLightbox } = useLightbox()

  return (
    <>
      <section className="page-hero small">
        <div className="container">
          <Reveal><h1>Services &amp; Fees</h1></Reveal>
          <Reveal delay={1}><p>Transparent pricing and comprehensive care. (Prices in THB; subject to consultation.)</p></Reveal>
        </div>
      </section>

      <section className="container" id="general">
        <Reveal><h2>General Dentistry</h2></Reveal>
        <div className="grid two">
          <Reveal delay={1}>
            <img src={imgGeneral} alt="General dentistry" onClick={() => openLightbox(imgGeneral, 'General dentistry')} />
            <ul className="check">
              <li>Cleaning &amp; polishing (recommend annually)</li>
              <li>Dental fillings (amalgam/composite)</li>
              <li>Tooth extraction</li>
              <li>Fluoride &amp; preventive care</li>
            </ul>
          </Reveal>
          <Reveal delay={2}>
            <PriceTable rows={[
              {item:'Cleaning & Scaling', rate:'900–1,500', unit:'/Person'},
              {item:'Cleaning & Scaling with Airflow', rate:'1,700–2,200', unit:'/Person'},
              {item:'Amalgam Filling', rate:'800–1,700', unit:'/Tooth'},
              {item:'Composite (White) Filling', rate:'900–1,800', unit:'/Tooth'},
              {item:'Tooth Extraction', rate:'900–1,700', unit:'/Tooth'},
              {item:'Impacted Wisdom Extraction', rate:'2,000–5,000', unit:'/Tooth'},
            ]} />
          </Reveal>
        </div>
      </section>

      <section className="container" id="cosmetic">
        <Reveal><h2>Cosmetic &amp; Restoration</h2></Reveal>
        <div className="grid two">
          <Reveal delay={1}>
            <img src={imgCosmetic} alt="Cosmetic & Restoration" onClick={() => openLightbox(imgCosmetic, 'Cosmetic & Restoration')} />
            <ul className="check">
              <li>Teeth whitening (LED/Laser/Zoom2/In‑office &amp; At‑home)</li>
              <li>Crowns &amp; Bridges (ceramic, zirconia, metal-ceramic)</li>
              <li>Veneers (E.max / porcelain)</li>
              <li>Inlay / Onlay (composite, porcelain, metal)</li>
            </ul>
          </Reveal>
          <Reveal delay={2}>
            <PriceTable rows={[
              {item:'Whitening – LED Cool Light', rate:'3,900', unit:'/Person'},
              {item:'Whitening – Laser + Cleaning', rate:'5,500', unit:'/Person'},
              {item:'Whitening – Zoom2 + Cleaning', rate:'9,500', unit:'/Person'},
              {item:'Whitening – At‑Home', rate:'4,500', unit:'/Person'},
              {item:'Crown – Porcelain fused to metal', rate:'9,000', unit:'/Tooth'},
              {item:'Crown – All ceramic (E.max)', rate:'12,500', unit:'/Tooth'},
              {item:'Crown – Zirconia', rate:'15,000', unit:'/Tooth'},
              {item:'Bridge – PFM (3 units)', rate:'27,000', unit:'/3 Teeth'},
              {item:'Bridge – All ceramic (E.max, 3 units)', rate:'37,500', unit:'/3 Teeth'},
              {item:'Veneer – Porcelain (E.max)', rate:'12,500', unit:'/Tooth'},
              {item:'Inlay/Onlay – Composite', rate:'3,000–4,000', unit:'/Tooth'},
            ]} />
          </Reveal>
        </div>
      </section>

      <section className="container" id="implant">
        <Reveal><h2>Dental Implants &amp; Orthodontics</h2></Reveal>
        <div className="grid two">
          <Reveal delay={1}>
            <img src={imgImplant} alt="Implants" onClick={() => openLightbox(imgImplant, 'Implants')} />
            <ul className="check">
              <li>Single implants with crown</li>
              <li>All‑on‑4 concept (full‑arch, immediate loading)</li>
              <li>Removable dentures</li>
              <li>Root canal therapy</li>
              <li>Metal braces, Damon, Invisalign</li>
            </ul>
          </Reveal>
          <Reveal delay={2}>
            <PriceTable rows={[
              {item:'Single implant with zirconia crown', rate:'45,000', unit:'/Tooth'},
              {item:'All‑on‑4 – one trip implant', rate:'By quote', unit:'/Jaw'},
              {item:'Removable Denture', rate:'10,000–20,000', unit:'/Jaw'},
              {item:'Root canal – Incisor/Canine', rate:'6,000–7,000', unit:'/Tooth'},
              {item:'Root canal – Premolar', rate:'7,000–9,000', unit:'/Tooth'},
              {item:'Root canal – Molar', rate:'9,000–12,000', unit:'/Tooth'},
              {item:'Metal braces', rate:'35,000–40,000', unit:'/Person'},
            ]} />
          </Reveal>
        </div>
        <Reveal><p className="muted">* Fees are indicative and may vary based on case complexity and materials.</p></Reveal>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <Reveal>
            <h2>Have a treatment plan already?</h2>
            <p>Send us your x‑rays/photos for a second opinion. We typically reply within 48 hours.</p>
            <a className="btn primary" href="#/contact">Request a Quote</a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
