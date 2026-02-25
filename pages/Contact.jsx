import Reveal from '../components/Reveal.jsx'
import imgContact from '../assets/img/contact-illustration.png'
import { useLightbox } from '../components/LightboxProvider.jsx'



export default function Contact(){
  const { openLightbox } = useLightbox()
  const submit = (e) => {
    e.preventDefault()
    alert('Demo form. Replace with your backend or form provider.')
  }
  return (
    <>
      <section className="page-hero small">
        <div className="container">
          <Reveal><h1>Contact Us</h1></Reveal>
          <Reveal delay={1}><p>Send us your details—we aim to respond within 48 hours.</p></Reveal>
        </div>
      </section>

      <section className="container contact-layout">
        <form className="card form" onSubmit={submit}>
          <div className="form-row">
            <label>Title</label>
            <select>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
            </select>
          </div>
          <div className="form-row two">
            <div>
              <label>First name *</label>
              <input required />
            </div>
            <div>
              <label>Last name *</label>
              <input required />
            </div>
          </div>
          <div className="form-row two">
            <div>
              <label>Email *</label>
              <input type="email" required />
            </div>
            <div>
              <label>Confirm email *</label>
              <input type="email" required />
            </div>
          </div>
          <div className="form-row two">
            <div>
              <label>Age</label>
              <input type="number" min="0" />
            </div>
            <div>
              <label>Phone / WhatsApp / LINE</label>
              <input />
            </div>
          </div>
          <div className="form-row">
            <label>Address</label>
            <input />
          </div>
          <div className="form-row">
            <label>Interested Services</label>
            <div className="chips">
              {['Teeth Whitening','Dental Implant','Dental Crown','Dental Veneer','Dental Bridge','Removable Denture','Inlay/Onlay','Root Canal Treatment','Periodontal','Orthodontic','Dental Cleaning','Dental Filling'].map((label,i)=>(
                <label key={i}><input type="checkbox" /> {label}</label>
              ))}
            </div>
          </div>
          <div className="form-row two">
            <div>
              <label>Preferred appointment date</label>
              <input type="date" />
            </div>
            <div>
              <label>Preferred time</label>
              <input type="time" />
            </div>
          </div>
          <div className="form-row">
            <label>How did you hear about us?</label>
            <select>
              <option>Google</option>
              <option>Friends</option>
              <option>PattayaAddict</option>
              <option>ThaiVisa</option>
              <option>Brochure</option>
              <option>Internet</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-row">
            <label>Message</label>
            <textarea rows="5" placeholder="Describe your needs or attach case details."></textarea>
          </div>
          <div className="form-row">
            <button className="btn primary" type="submit">Submit</button>
            <p className="muted">This is a demo form. Replace with your backend or form service.</p>
          </div>
        </form>

        <aside className="card contact-card">
          <img src={imgContact} alt="Contact illustration" onClick={() => openLightbox(imgContact, 'Contact illustration')} style={{cursor:'pointer'}} />
          <h3>Clinic</h3>
          <p>313/5 Pattaya 3rd. Road (near corner South Pattaya Road)<br/>Banglamung, Chonburi 20150</p>
          <ul className="contact-list">
            <li><strong>Tel:</strong> 038-723460</li>
            <li><strong>Email:</strong> <a href="mailto:contact@dentalsmilepattaya.com">contact@dentalsmilepattaya.com</a></li>
          </ul>
          <a className="btn" href="#/map">View Map</a>
        </aside>
      </section>
    </>
  )
}
