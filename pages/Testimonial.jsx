import Reveal from '../components/Reveal.jsx'
import CaseSlider from '../components/CaseSlider.jsx'
import case1b from '../assets/img/case1-before.png'
import case1a from '../assets/img/case1-after.png'
import case2b from '../assets/img/case2-before.png'
import case2a from '../assets/img/case2-after.png'
import case3b from '../assets/img/case3-before.png'
import case3a from '../assets/img/case3-after.png'

const items = [
  { title:'Veneer Makeover', before:case1b, after:case1a },
  { title:'Zoom Whitening', before:case2b, after:case2a },
  { title:'Crown & Bridge', before:case3b, after:case3a },
]

export default function Testimonial(){
  return (
    <>
      <section className="page-hero small">
        <div className="container">
          <Reveal><h1>Patient Stories</h1></Reveal>
          <Reveal delay={1}><p>Real outcomes from whitening, veneers, crowns, implants and more.</p></Reveal>
        </div>
      </section>

      <section className="container">
        <Reveal>
          <CaseSlider items={items} interval={5000} />
        </Reveal>
        <Reveal>
          <div className="gallery-note">
            <p className="muted">This is a mockup gallery. Replace these placeholders with your real before/after photos.</p>
          </div>
        </Reveal>
      </section>
    </>
  )
}
