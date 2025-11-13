import { Link } from 'react-router-dom'
import staffCherry from '../assets/img/staff-cherry.png'

export default function ContactWidget(){
  return (
    <div className="contact-widget" aria-live="polite">
      <div className="contact-widget__photo">
        <img src={staffCherry} alt="Dental Smile care coordinator" />
      </div>
      <div className="contact-widget__panel">
        <p>Need treatment info? Chat with our team.</p>
        <div className="contact-widget__actions">
          <a
            className="contact-badge line"
            href="https://line.me/R/ti/p/@dentalsmile"
            target="_blank"
            rel="noreferrer"
          >
            Line
          </a>
          <a
            className="contact-badge messenger"
            href="https://m.me/dentalsmilepattaya"
            target="_blank"
            rel="noreferrer"
          >
            Messenger
          </a>
          <Link to="/contact" className="btn primary small">
            Free consult
          </Link>
        </div>
      </div>
    </div>
  )
}
