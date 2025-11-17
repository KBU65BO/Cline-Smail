import Reveal from '../components/Reveal.jsx'
import { useLightbox } from '../components/LightboxProvider.jsx'
import sCherry from '../assets/img/staff-cherry.png'
import sTob from '../assets/img/staff-tob.png'
import sAe from '../assets/img/staff-ae.png'
import sNung from '../assets/img/staff-nung.png'
import sBoy from '../assets/img/staff-boy.png'
import sGui from '../assets/img/staff-gui.png'
import sNumaoi from '../assets/img/staff-numaoi.png'
import sAnn from '../assets/img/staff-ann.png'
import sChai from '../assets/img/staff-chai.png'
import sArisza from '../assets/img/staff-arisza.png'

const team = [
  { img:sArisza, name:'Dr. Patcharin Nanthaekaphong (Dr. Cherry)', role:'Prosthodontist & Implant Dentist', bullets:[
    'DDS (Hons), Mahidol University', 'M.Sc. Prosthodontics, Mahidol University', 'Certificates in Surgical & Prosthetic Implant Dentistry'
  ]},
  { img:sTob, name:'Dr. Pabhinvitch Vipatbovonwong (Dr. Tob)', role:'Orthodontist', bullets:[
    'DDS, Khon Kaen University', 'M.Sc. Orthodontics, Khon Kaen University'
  ]},
  { img:sAe, name:'Dr. Assawinee Thimsang (Dr. Ae)', role:'Periodontist', bullets:[
    'DDS (Hons), Mahidol University', 'M.Sc. Periodontics, Mahidol University'
  ]},
  { img:sNung, name:'Dr. Surpun Srikume (Dr. Nung)', role:'Endodontist', bullets:[
    'DDS (Hons), Srinakharinwirot University', 'M.Sc. Endodontics, Srinakharinwirot University'
  ]},
  { img:sBoy, name:'Dr. Woradet Phichaiutkrit (Dr. Boy)', role:'Advanced General Dentistry', bullets:[
    'DDS, Mahidol University', 'M.Sc. General Dentistry, Khon Kaen University'
  ]},
  { img:sGui, name:'Dr. Chaichan Sangsirinakagul (Dr. Gui)', role:'Advanced General Dentistry', bullets:[
    'DDS, Khon Kaen University', 'M.Sc. General Dentistry, Khon Kaen University'
  ]},
  { img:sNumaoi, name:'Dr. Jureeporn Piladist (Dr. Numaoi)', role:'General Dentistry', bullets:[
    'DDS, Chulalongkorn University'
  ]},
  { img:sAnn, name:'Dr. Lalita Rutchakitprakarn (Dr. Ann)', role:'General Dentistry', bullets:[
    'DDS, Thammasat University'
  ]},
  { img:sChai, name:'Dr. Chatchai Tharanont (Dr. Chai)', role:'General Dentistry', bullets:[
    'DDS, Mahidol University'
  ]},
  { img:sCherry, name:'Dr. Arisza', role:'Orthodontist', bullets:[
    'DDS, Khon Kaen University', 'M.Sc. Orthodontics, Khon Kaen University'
  ]},
]

export default function Staff(){
  const { openLightbox } = useLightbox()
  return (
    <>
      <section className="page-hero small">
        <div className="container">
          <Reveal><h1>Our Dentist Team</h1></Reveal>
          <Reveal delay={1}><p>Friendly, English‑speaking professionals with specialist training.</p></Reveal>
        </div>
      </section>

      <section className="container">
        <div className="grid two staff-grid">
          {team.map((m,i)=>(
            <article key={i} className="profile">
              <Reveal delay={(i%3)+1}>
                <div className="profile-media">
                  <img src={m.img} alt={m.name} onClick={() => openLightbox(m.img, m.name)} style={{cursor:'pointer'}} />
                </div>
                <h3>{m.name}</h3>
                <p className="muted">{m.role}</p>
                <ul className="bullets">
                  {m.bullets.map((b,j)=>(<li key={j}>{b}</li>))}
                </ul>
              </Reveal>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
