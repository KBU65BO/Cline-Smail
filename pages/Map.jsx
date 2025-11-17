import Reveal from '../components/Reveal.jsx'
import imgMap from '../assets/img/map.png'
import { useLightbox } from '../components/LightboxProvider.jsx'

export default function MapPage(){
  const { openLightbox } = useLightbox()
  return (
    <>
      <section className="page-hero small">
        <div className="container">
          <Reveal><h1>Map &amp; Directions</h1></Reveal>
          <Reveal delay={1}><p>Find us easily—near Walking Street (≈700 m) and TukCom (≈300 m).</p></Reveal>
        </div>
      </section>

      <section className="container">
        <Reveal className="map-wrap card">
          <iframe title="Dental Smile Pattaya Map" width="100%" height="440" loading="lazy" style={{border:0}}
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=12.9220523,100.882001&z=16&output=embed"></iframe>
        </Reveal>

        <div className="grid two landmarks">
          <Reveal delay={1} className="card">
              <h3>Coordinates</h3>
              <p><strong>Lat/Lng:</strong> 12.9220523, 100.882001</p>
              <img src={imgMap} alt="Map marker" onClick={() => openLightbox(imgMap, 'Map marker')} style={{cursor:'pointer'}} />
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
      </section>
    </>
  )
}
