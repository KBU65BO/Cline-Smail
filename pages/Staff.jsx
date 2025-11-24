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

const clinicians = {
  cherry: {
    id: 'cherry',
    img: sArisza,
    name: 'Dr. Patcharin Nanthaekaphong (Dr. Cherry)',
    role: 'Prosthodontist & Implant Dentist',
    short: 'Dr. Cherry',
    accent: '#fb7185',
    shadow: 'rgba(251,113,133,.25)',
    bullets: [
      'DDS (Hons), Mahidol University',
      'M.Sc. Prosthodontics, Mahidol University',
      'Certificates in Surgical & Prosthetic Implant Dentistry'
    ]
  },
  tob: {
    id: 'tob',
    img: sTob,
    name: 'Dr. Pabhinvitch Vipatbovonwong (Dr. Tob)',
    role: 'Orthodontist',
    short: 'Dr. Tob',
    accent: '#38bdf8',
    shadow: 'rgba(56,189,248,.25)',
    bullets: [
      'DDS, Khon Kaen University',
      'M.Sc. Orthodontics, Khon Kaen University'
    ]
  },
  ae: {
    id: 'ae',
    img: sAe,
    name: 'Dr. Assawinee Thimsang (Dr. Ae)',
    role: 'Periodontist',
    short: 'Dr. Ae',
    accent: '#facc15',
    shadow: 'rgba(250,204,21,.25)',
    bullets: [
      'DDS (Hons), Mahidol University',
      'M.Sc. Periodontics, Mahidol University'
    ]
  },
  nung: {
    id: 'nung',
    img: sNung,
    name: 'Dr. Surpun Srikume (Dr. Nung)',
    role: 'Endodontist',
    short: 'Dr. Nung',
    accent: '#a78bfa',
    shadow: 'rgba(167,139,250,.25)',
    bullets: [
      'DDS (Hons), Srinakharinwirot University',
      'M.Sc. Endodontics, Srinakharinwirot University'
    ],
    orgSize: 'md'
  },
  boy: {
    id: 'boy',
    img: sBoy,
    name: 'Dr. Woradet Phichaiutkrit (Dr. Boy)',
    role: 'Advanced General Dentistry',
    short: 'Dr. Boy',
    accent: '#34d399',
    shadow: 'rgba(52,211,153,.25)',
    bullets: [
      'DDS, Mahidol University',
      'M.Sc. General Dentistry, Khon Kaen University'
    ]
  },
  gui: {
    id: 'gui',
    img: sGui,
    name: 'Dr. Chaichan Sangsirinakagul (Dr. Gui)',
    role: 'Advanced General Dentistry',
    short: 'Dr. Gui',
    accent: '#5eead4',
    shadow: 'rgba(94,234,212,.25)',
    bullets: [
      'DDS, Khon Kaen University',
      'M.Sc. General Dentistry, Khon Kaen University'
    ]
  },
  numaoi: {
    id: 'numaoi',
    img: sNumaoi,
    name: 'Dr. Jureeporn Piladist (Dr. Numaoi)',
    role: 'General Dentistry',
    short: 'Dr. Numaoi',
    accent: '#60a5fa',
    shadow: 'rgba(96,165,250,.25)',
    bullets: [
      'DDS, Chulalongkorn University'
    ]
  },
  ann: {
    id: 'ann',
    img: sAnn,
    name: 'Dr. Lalita Rutchakitprakarn (Dr. Ann)',
    role: 'General Dentistry',
    short: 'Dr. Ann',
    accent: '#fda4af',
    shadow: 'rgba(253,164,175,.25)',
    bullets: [
      'DDS, Thammasat University'
    ]
  },
  chai: {
    id: 'chai',
    img: sChai,
    name: 'Dr. Chatchai Tharanont (Dr. Chai)',
    role: 'General Dentistry',
    short: 'Dr. Chai',
    accent: '#c4b5fd',
    shadow: 'rgba(196,181,253,.25)',
    bullets: [
      'DDS, Mahidol University'
    ]
  },
  arisza: {
    id: 'arisza',
    img: sCherry,
    name: 'Dr. Arisza',
    role: 'Orthodontist',
    short: 'Dr. Arisza',
    accent: '#0ea5e9',
    shadow: 'rgba(14,165,233,.25)',
    bullets: [
      'DDS, Khon Kaen University',
      'M.Sc. Orthodontics, Khon Kaen University'
    ],
    orgSize: 'md'
  }
}

const orgChart = {
  director: {
    ...clinicians.cherry,
    label: 'Clinical Director & Implant Lead',
    subtitle: 'Full-arch planning, complex implant protocols'
  },
  leads: [
    {
      ...clinicians.tob,
      label: 'Orthodontics & Smile Design',
      subtitle: 'Braces, aligners & bite correction',
      reports: [clinicians.arisza]
    },
    {
      ...clinicians.ae,
      label: 'Periodontics & Implant Care',
      subtitle: 'Gum health & surgical regeneration',
      reports: [clinicians.nung]
    },
    {
      ...clinicians.boy,
      label: 'Restorative & General Care',
      subtitle: 'Crowns, fillings & hygiene oversight',
      reports: [clinicians.gui, clinicians.numaoi, clinicians.ann, clinicians.chai]
    }
  ]
}

const teamOrder = ['cherry','tob','ae','nung','boy','gui','numaoi','ann','chai','arisza']
const team = teamOrder.map(id => clinicians[id])

function OrgNode({ person, label, subtitle, size = 'lg', onOpen }){
  return (
    <div className={`org-node org-node--${size}`}>
      <button
        type="button"
        className="org-node__media"
        style={{ borderColor: person.accent, boxShadow: `0 18px 38px ${person.shadow}` }}
        onClick={() => onOpen(person.img, person.name)}
      >
        <img src={person.img} alt={person.name} />
      </button>
      {label && <p className="org-node__tag">{label}</p>}
      <h3>{person.name}</h3>
      <p className="muted">{subtitle || person.role}</p>
    </div>
  )
}

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

      <section className="org-flow">
        <div className="container">
          <Reveal><h2>Clinical Org Chart</h2></Reveal>
          <Reveal delay={1}><p>We keep communication simple: one clinical director, three specialty pods, and clear report lines so every smile plan is coordinated.</p></Reveal>

          <div className="org-flow__deck">
            <div className="org-flow__tier org-flow__tier--director">
              <OrgNode
                person={orgChart.director}
                label={orgChart.director.label}
                subtitle={orgChart.director.subtitle}
                onOpen={openLightbox}
              />
            </div>

            <div className="org-flow__tier org-flow__tier--leads">
              {orgChart.leads.map((lead) => (
                <div className={`org-flow__column${lead.reports.length ? ' has-reports' : ''}`} key={lead.id}>
                  <OrgNode
                    person={lead}
                    label={lead.label}
                    subtitle={lead.subtitle}
                    size="md"
                    onOpen={openLightbox}
                  />
                  {lead.reports.length > 0 && (
                    <div className="org-flow__reports">
                      {lead.reports.map((doc) => (
                        <OrgNode
                          key={doc.id}
                          person={doc}
                          subtitle={doc.role}
                          size={doc.orgSize || 'sm'}
                          onOpen={openLightbox}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
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
